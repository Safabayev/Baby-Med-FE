# Graph Report - Baby-Med-FE  (2026-08-16)

## Corpus Check
- 29 files · ~8,157 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 130 nodes · 217 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b6a1831e`
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `t()` - 15 edges
3. `Locale` - 11 edges
4. `routing` - 7 edges
5. `Localized` - 7 edges
6. `site` - 6 edges
7. `scripts` - 5 edges
8. `HomePage()` - 3 edges
9. `Footer()` - 3 edges
10. `Header()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `t()`  [EXTRACTED]
  src/app/[locale]/layout.tsx → src/lib/i18n.ts
- `generateMetadata()` --calls--> `t()`  [EXTRACTED]
  src/app/[locale]/uslugi/page.tsx → src/lib/i18n.ts
- `HomePage()` --calls--> `t()`  [EXTRACTED]
  src/components/home/HomePage.tsx → src/lib/i18n.ts
- `Footer()` --calls--> `t()`  [EXTRACTED]
  src/components/layout/Footer.tsx → src/lib/i18n.ts
- `Header()` --calls--> `t()`  [EXTRACTED]
  src/components/layout/Header.tsx → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "layout.tsx"
Cohesion: 0.15
Nodes (16): generateMetadata(), inter, Props, generateMetadata(), Footer(), FooterProps, Header(), HeaderProps (+8 more)

### Community 1 - "HomePage.tsx"
Cohesion: 0.17
Nodes (15): cardTones, doctorTones, roomTones, advantages, about, contactsBlock, ctaBlock, doctorsBlock (+7 more)

### Community 2 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "routing.ts"
Cohesion: 0.18
Nodes (8): Props, Props, HomePage(), LangSwitchProps, { Link, redirect, usePathname, useRouter, getPathname }, Locale, routing, config

### Community 4 - "package.json"
Cohesion: 0.14
Nodes (13): dependencies, next, next-intl, react, react-dom, name, private, scripts (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 6 - "PricesPage.tsx"
Cohesion: 0.25
Nodes (7): headerTones, priceTones, rowHover, pricesPage, PriceGroup, priceGroups, PriceItem

### Community 7 - "Baby Med FE"
Cohesion: 0.50
Nodes (3): Baby Med FE, Local development, Production

## Knowledge Gaps
- **60 isolated node(s):** `eslintConfig`, `nextConfig`, `withNextIntl`, `name`, `version` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `layout.tsx` to `HomePage.tsx`, `routing.ts`, `PricesPage.tsx`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `withNextIntl` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._