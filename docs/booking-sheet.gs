/**
 * Приём заявок с сайта Baby Med в Google Таблицу.
 *
 * Установка — см. docs/booking-sheet.md.
 * Коротко: Расширения → Apps Script → вставить этот файл → Развернуть как
 * веб-приложение (доступ «Все») → URL положить в BOOKING_SHEET_WEBHOOK_URL.
 */

/** Должен совпадать с BOOKING_SHEET_TOKEN в переменных окружения сайта. */
var SHARED_TOKEN = 'ЗАМЕНИТЕ_НА_СВОЙ_СЕКРЕТ';

/** Лист, в который складываются заявки. Создаётся автоматически. */
var SHEET_NAME = 'Заявки';

var HEADERS = [
  'Дата заявки',
  'Имя',
  'Телефон',
  'Направление',
  'Желаемая дата',
  'Комментарий',
  'Язык сайта',
];

var SERVICE_LABELS = {
  pregnancy: 'Ведение беременности',
  birth: 'Роды',
  cesarean: 'Кесарево сечение',
  neonatology: 'Неонатология',
  pediatrics: 'Педиатрия',
  gynecology: 'Гинекология',
  ultrasound: 'УЗД-диагностика',
  lab: 'Лабораторные анализы',
  other: 'Другое',
};

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);

    if (SHARED_TOKEN && payload.token !== SHARED_TOKEN) {
      return jsonResponse({ ok: false, error: 'forbidden' });
    }

    var sheet = getSheet();
    sheet.appendRow([
      formatSubmittedAt(payload.submittedAt),
      payload.name || '',
      // Апостроф не даёт таблице съесть «+» и превратить номер в формулу.
      "'" + (payload.phone || ''),
      SERVICE_LABELS[payload.service] || payload.service || '',
      payload.date || '',
      payload.comment || '',
      payload.locale === 'uz' ? "O'zbekcha" : 'Русский',
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

/** Быстрая проверка, что развёртывание живо: откройте URL в браузере. */
function doGet() {
  return jsonResponse({ ok: true, service: 'baby-med-booking' });
}

function getSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(6, 320);
  }

  return sheet;
}

function formatSubmittedAt(iso) {
  var date = iso ? new Date(iso) : new Date();
  if (isNaN(date.getTime())) {
    date = new Date();
  }
  return Utilities.formatDate(date, 'Asia/Tashkent', 'dd.MM.yyyy HH:mm');
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
