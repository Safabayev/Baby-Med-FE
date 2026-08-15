# Graph Report - Baby-Med-FE  (2026-08-16)

## Corpus Check
- 32 files · ~8,771 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 145 nodes · 253 edges · 16 communities (11 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `89dcf352`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- layout.tsx
- HomePage.tsx
- compilerOptions
- routing.ts
- package.json
- devDependencies
- PricesPage.tsx
- Baby Med FE
- next.config.ts
- AGENTS.md
- eslint.config.mjs
- postcss.config.mjs
- ThemeProvider.tsx
- page.tsx

## God Nodes (most connected - your core abstractions)
1. `t()` - 17 edges
2. `compilerOptions` - 16 edges
3. `Locale` - 12 edges
4. `routing` - 7 edges
5. `Localized` - 7 edges
6. `site` - 6 edges
7. `scripts` - 5 edges
8. `ThemeProvider()` - 5 edges
9. `ThemeToggle()` - 4 edges
10. `nav` - 4 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `t()`  [EXTRACTED]
  src/app/[locale]/uslugi/page.tsx → src/lib/i18n.ts
- `generateMetadata()` --calls--> `t()`  [EXTRACTED]
  src/app/[locale]/layout.tsx → src/lib/i18n.ts
- `HomePage()` --calls--> `t()`  [EXTRACTED]
  src/components/home/HomePage.tsx → src/lib/i18n.ts
- `PricesPage()` --calls--> `t()`  [EXTRACTED]
  src/components/prices/PricesPage.tsx → src/lib/i18n.ts
- `Footer()` --calls--> `t()`  [EXTRACTED]
  src/components/layout/Footer.tsx → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (16 total, 5 thin omitted)

### Community 0 - "layout.tsx"
Cohesion: 0.19
Nodes (15): generateMetadata(), inter, Props, viewport, Footer(), FooterProps, Header(), HeaderProps (+7 more)

### Community 1 - "HomePage.tsx"
Cohesion: 0.16
Nodes (16): cardTones, doctorTones, roomTones, advantages, about, contactsBlock, ctaBlock, doctorsBlock (+8 more)

### Community 2 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "routing.ts"
Cohesion: 0.31
Nodes (5): LangSwitch(), LangSwitchProps, { Link, redirect, usePathname, useRouter, getPathname }, routing, config

### Community 4 - "package.json"
Cohesion: 0.14
Nodes (13): dependencies, next, next-intl, react, react-dom, name, private, scripts (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @netlify/plugin-nextjs, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

### Community 6 - "PricesPage.tsx"
Cohesion: 0.15
Nodes (11): generateMetadata(), Props, headerTones, PricesPage(), priceTones, rowHover, meta, pricesPage (+3 more)

### Community 7 - "Baby Med FE"
Cohesion: 0.50
Nodes (3): Baby Med FE, Local development, Production

### Community 14 - "ThemeProvider.tsx"
Cohesion: 0.38
Nodes (8): ThemeContext, ThemeContextValue, ThemeProvider(), applyTheme(), prefersDark(), readStoredTheme(), resolveTheme(), Theme

## Knowledge Gaps
- **64 isolated node(s):** `eslintConfig`, `nextConfig`, `withNextIntl`, `name`, `version` (+59 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `layout.tsx` to `HomePage.tsx`, `PricesPage.tsx`, `page.tsx`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `Locale` connect `layout.tsx` to `HomePage.tsx`, `routing.ts`, `PricesPage.tsx`, `page.tsx`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `withNextIntl` to the rest of the system?**
  _64 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._