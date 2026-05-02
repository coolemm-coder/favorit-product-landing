# 🎨 Research: профдизайн B2B-лендингов 2026

**Источники:** GitHub awesome-lists · Awwwards 2025 · YouTube топ-каналы · 2026 best-practice статьи · LandingFactory skills (landing-audit · brand-review · ui-ux-pro-max · psychology-by)

---

## 📊 Что делают про-сайты в 2026

### Победители Awwwards Site of the Year 2025
- **Messenger** — крошечная WebGL-планета в браузере, физика, освещение. Загружается за секунды, ощущается как консольная игра.
- **Lando Norris site** (студия OFF+BRAND) — дизайн пилота F1, immersive 3D + scroll-storytelling.

**Тренд:** 3D/WebGL вошёл в топ. Раньше «премиум» = красивая фотка, теперь = интерактивная сцена.

### B2B-лендинги в 2026 — медиана конверсии 3.8%, топы 8–12%
1. **H1 ≤ 8 слов** (≤ 44 символа). Длинные заголовки = ниже конверсия, busy decision-makers сканируют.
2. **Trust first, conversion second** — credentials/case study/social proof ДО CTA. Без них B2B не отдаст контакт.
3. **Hero показывает value за 3–5 сек** — не статичный tagline, а story-driven визуал (как Notion, Linear, Framer).
4. **Mobile-first** — 80% B2B-трафика с телефона.
5. **One CTA per page** — single goal, no competing buttons.
6. **Reduce cognitive load** — не перегружать сложными B2B-фичами на главной.

### Анти-паттерны 2026
- Большие интерактивные карты OSM/Google для трастового сигнала (как наша 480px Leaflet)
- Компромиссные H1 ≥ 12 слов «и про продукт и про доставку и про цену»
- Несколько одинаковых CTA подряд («Заказать», «Связаться», «Получить»)
- Hero-видео без сюжета (декоративный moodboard вместо product story)

---

## 🛠 Наш текущий стек — gap analysis

| Что у нас | Что у про | Gap |
|---|---|---|
| Vanilla HTML/CSS/JS | Vanilla / Astro / Next-static | OK ✅ |
| Custom CSS-vars (без Tailwind) | Tailwind v4 + CVA / Vanilla extract | ⚠️ Tailwind ускоряет итерации, CSS-vars тяжелее поддерживать |
| Inter + Space Grotesk | Inter · Geist · Satoshi · Inter Display | OK ✅ |
| Leaflet 42KB | Static SVG / Yandex / Mapbox | ❌ Leaflet overkill для 4 точек |
| Schema.org JSON-LD × 4 | Schema + Microdata + JSON-LD | ⚠️ можно расширить (Place, Review) |
| Vercel | Vercel · Cloudflare · Netlify | OK ✅ |
| Codex AI · Kling AI | Midjourney · Runway · Sora · Codex · Higgsfield | OK ✅ |
| Базовая `.reveal` CSS-анимация | Trig.js / GSAP / Motion / Framer Motion | ❌ нет scroll-triggered, нет micro-interactions |
| Counter-анимация stats | Scroll-tied counter + pinning | ⚠️ простая JS, без pinning |
| Hover-effects only | Click feedback · haptic-like · sound (опц.) | ❌ нет click-feedback на CTA |
| Single hero-видео loop | Story-driven 3D/WebGL + scroll-tied | ❌ декоративное видео без сюжета |

**Вердикт:** стек правильный для B2B, но **нет полировки**. Без scroll-anim/micro-interactions сайт ощущается как «шаблон 2022» а не «премиум 2026».

---

## 🎯 Рекомендованные апгрейды (приоритет)

### P0 — обязательно перед лончем

| Что | Зачем | Сколько кода |
|---|---|---|
| **1. Trig.js (4KB)** для scroll-reveal | Заменяет нашу `.reveal` на нормальную CSS-first систему. Все элементы появляются плавно при попадании в viewport | 1 `<script>` + дата-атрибуты |
| **2. Карта Leaflet → SVG 240px** | −42KB JS, −1.2s LCP, бренд-палитра | замена секции (готов в `map-preview.html`) |
| **3. Логотип Codex → оригинальный logo.svg** | Brand recognition. Оригинальный фирменный | git revert + удалить 2 файла |
| **4. H1 короткий ≤ 8 слов** | Текущий 12 слов. Новый: «Рыбное филе оптом · доставка за одну ночь» (6 слов) или «Завод рыбного филе для сетей» (5 слов) | 1 строка index.html |
| **5. Single primary CTA** | Сейчас «Запросить прайс» в шапке + 2 в hero + форма + телефон. Сделать один доминирующий «Запросить прайс», остальное — secondary | CSS правки кнопок |
| **6. Mobile sticky CTA — апгрейд** | Не плашка с телефоном, а полноценная кнопка «Запросить прайс» с доминирующим красным | CSS + 5 строк HTML |

### P1 — сразу после P0

| Что | Зачем |
|---|---|
| **7. Micro-interactions** | CTA-кнопки: scale 0.96 на :active, ripple-effect, success-state. Карточки: lift на hover (есть, но усилить) |
| **8. Блок «Почему мы» с case study** | Концентрированный trust-сигнал. Цифры с одного клиента (например ВкусВилл): «12 SKU, 18 месяцев, 2.3 тонны/неделя» |
| **9. Schema.org expansion** | `Place` для каждого склада → `+SEO`. `Review` от сетей |
| **10. Performance** | `loading="lazy"` на below-fold, `<link rel="preload">` для hero-poster, defer некритичный CSS |
| **11. A/B тест CTA-копи** | «Запросить прайс» vs «Получить образцы» vs «Узнать условия». Через analytics-tracking skill |

### P2 — премиум-уровень (как Awwwards-сайты)

| Что | Зачем |
|---|---|
| **12. WebGL-элемент в hero** | Three.js: 3D-кусок льда / рыба → как у Awwwards-2025 Messenger. Файл ≈ 60KB но wow-эффект |
| **13. Dynamic typography** | H1-буквы анимируются при скролле (stretch/shift). Современный тренд 2026 |
| **14. Интерактивный ассортимент-блок от Codex** | `design-preview.html` имеет блок с 5 карточками + drill-down панель спеков. Перенести в index.html |
| **15. AI-кейсы каждой сети** | Codex AI генерит фото «Рыбный год» на полке Соседи / ГИППО / SPAR с реальной розничной выкладкой |

---

## 📚 Top GitHub-репо для inspiration

| Репо | Что внутри | Применимо |
|---|---|---|
| [Ashutoshx7/VengenceUI](https://github.com/Ashutoshx7/VengenceUI) | Animated copy-paste компоненты для лендинга, 2026 | hero / trust / pricing блоки |
| [mearashadowfax/ScrewFast](https://github.com/mearashadowfax/ScrewFast) | Astro + Tailwind, открытый B2B-шаблон | Структура B2B-сайта, типографика |
| [PageAI-Pro/page-ui](https://github.com/PageAI-Pro/page-ui) | Landing UI компоненты на React + Tailwind | Hero / features / testimonials |
| [thedevdojo/tails-components](https://github.com/thedevdojo/tails-components) | No-config copy-paste Tailwind blocks | feature blocks, pricing, FAQ |
| [EasyFrontendHQ/html-tailwindcss-components](https://github.com/EasyFrontendHQ/html-tailwindcss-components) | Pure HTML+Tailwind, без JS-фреймворка | Прямая совместимость с нашим стеком |
| [PaulleDemon/awesome-landing-pages](https://github.com/PaulleDemon/awesome-landing-pages) | Free templates SaaS/agency | моодборд для hero |
| [nordicgiant2/awesome-landing-page](https://github.com/nordicgiant2/awesome-landing-page) | Проверенные landing шаблоны | референсы CTA / layout |

## 📺 YouTube — кому подписаться

| Канал | Кто | Чем полезен |
|---|---|---|
| **DesignCourse** | Gary Simon · 1M+ | Web-design fundamentals, Figma → код |
| **Ran Segall (Flux)** | Ran Segall · 1M+ | Frameworks + habits, реальные проекты |
| **Charli Marie** | Charli Marie | Чистый design breakdown, типографика |
| **Mt. Mograph** | Motion graphics | After Effects + 3D мотион |
| **Satori Graphics** | Ben Marriott | AE / C4D / Premiere Pro |
| **Awwwards** | (channel) | Site of the Day разборы |

---

## 🔧 Animation libraries для нашего vanilla стека

| Lib | Размер | Подход | Когда брать |
|---|---|---|---|
| **Trig.js** ⭐ | 4KB | CSS-first, observes scroll | Сейчас — для P0 (scroll-reveal) |
| **Anime.js** | ≈20KB | JS, гибкий | Если нужна сложная timeline-анимация |
| **Sal.js** | 9KB | Reveal-only | Альтернатива Trig.js |
| **Magic.css** | CSS only | Class-based, 50+ эффектов | Для quick CTA-микроинтеракций |
| **Animate.css** | CSS only | Готовые keyframes | Простые fade/slide/bounce |
| **GSAP** | 50KB+ | JS, мощный | Только для hero-сцены P2 |
| **Motion (Framer Motion vanilla)** | 17KB | API типа Framer Motion для vanilla | Когда нужны spring-анимации |

**Рекомендация:** **Trig.js** для P0 + **Magic.css** для micro-interactions. Если в P2 пойдём в WebGL — добавим **Three.js + GSAP**.

---

## 💡 Workflow «как делать профсайты» — шаблон 2026

### Этап 1: Research (3 часа)
1. 5 конкурентов в нише → скриншоты hero/трасты/CTA → Figma moodboard
2. Awwwards SOTD за последний месяц по B2B/manufacturing → паттерны
3. Я.Wordstat → семантика (ВЧ/СЧ/НЧ ключи) для Title/H2
4. Главный insight потребителя: что страшно/что хочет/что мешает

### Этап 2: Strategy (2 часа)
1. **One goal per page** — формулировка одного целевого действия
2. **PAS / AIDA** для структуры (Problem-Agitate-Solution)
3. **3-5 секундный пробел** для hero — что увидит за 3 сек
4. **Trust ladder** — какие 3 факта говорят «вы не поломаетесь»

### Этап 3: Wireframe (1 час)
- 12 секций по фреймворку: Hero → Trust → Problem → Solution → Demo → Authority → Process → Pricing → FAQ → CTA → Contacts → Footer
- Не больше 1 экрана на секцию (mobile-first)

### Этап 4: Design (4 часа)
- **Палитра:** brand + 2 acent + neutral (5 цветов max)
- **Type scale:** modular 1.25× / 1.333× (5–6 размеров)
- **Spacing system:** 4px base (4/8/12/16/24/32/48/64/96)
- **Components:** button (primary/ghost), card, input, badge — 4 базовых, всё из них
- **Animation:** scroll-reveal по умолчанию, micro-interaction на :active

### Этап 5: Code (6 часов)
- Vanilla HTML или Astro (без React для статики)
- Tailwind v4 ИЛИ CSS-vars + utility classes
- **Trig.js** для scroll-anim (4KB)
- **lazy-load** изображений + `loading="lazy"`
- Schema.org JSON-LD × 4 (Org + LocalBusiness + Product + FAQPage)

### Этап 6: Performance audit (1 час)
- Lighthouse: цель 95+ во всех 4 категориях
- LCP < 2.5s, CLS = 0, INP < 200ms
- WebPageTest на 3G mobile из Минска
- Bundle analyzer: всё что > 50KB — пересмотр

### Этап 7: A/B test (postlaunch)
- Hero H1 × 2 варианта
- CTA copy × 3 варианта
- Yandex.Metrika / Plausible

---

## 🎯 Что конкретно сделать с Фаворит-Продукт сейчас

**P0 минимум за 1 день:**
1. Откатить Codex-логотип на `logo.svg`
2. Карта 480px → SVG 240px + 4 cards (готов превью)
3. H1 → 5–6 слов
4. Single primary CTA в hero
5. Trig.js подключить (1 строка скрипта)
6. Mobile sticky CTA → доминирующая красная кнопка
7. Закоммитить + push (Vercel-связку Git донастроим отдельно)

**P1 за 2 дня:**
1. Блок «Почему мы» с case study ВкусВилл/ГИППО (требует данных от клиента)
2. Schema.org Place для каждого склада
3. Performance audit + lazy-load + preload
4. A/B-тест setup на Я.Метрике

**P2 за неделю (премиум-уровень):**
1. WebGL ice-cube в hero (Three.js, 60KB)
2. Dynamic typography H1
3. Интерактивный ассортимент-блок (drill-down с спеками)
4. AI-кейсы фото "Рыбный год на полке Соседи"

---

## 🔗 Sources

### B2B Landing Best Practices 2026
- [12 Landing Page Best Practices of 2026 — Leadfeeder](https://www.leadfeeder.com/blog/conversion-optimization/landing-pages-convert/)
- [B2B Landing Page Examples 2026 — Unicornplatform](https://unicornplatform.com/blog/b2b-landing-page-examples/)
- [B2B Landing Page Examples 25+ Designs — Apexure](https://www.apexure.com/blog/b2b-landing-page-examples)
- [How to Build B2B Landing Page 2026 — GetResponse](https://www.getresponse.com/blog/how-to-build-b2b-landing-pages)
- [12 B2B Landing Page Design Examples 2026 — Flowtrix](https://www.flowtrix.co/blogs/12-b2b-landing-page-design-examples-for-2026)
- [Best Practices for Designing B2B SaaS Landing Pages — Genesys Growth](https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages)

### Awwwards SOTY 2025 + Дизайн-тренды
- [Awwwards Nominees 2025](https://www.awwwards.com/websites/2025/)
- [Top 10 Web Design Trends 2026 — Really Good Designs](https://reallygooddesigns.com/web-design-trends-2026/)
- [Best Website Designs in 2026 — Spinx Digital](https://www.spinxdigital.com/blog/best-website-design/)
- [10 Website Design Trends 2026 — Lovable](https://lovable.dev/guides/website-design-trends-2026)
- [Top 6 Modern Web Design Trends 2026 — Digital ByteTeck](https://www.digitalbyteteck.com/modern-web-design-trends/)
- [Best Landing Page Design Trends 2026 — Moburst](https://www.moburst.com/blog/landing-page-design-trends-2026/)

### Animation libraries
- [Best CSS/JS Animation Libraries 2026 — GrayGrids](https://graygrids.com/blog/best-css-javascript-animation-libraries)
- [GSAP vs ScrollMagic vs Trig.js — DEV.to](https://dev.to/idevgames/the-ultimate-web-scroll-animation-showdown-gsap-vs-scrollmagic-vs-trigjs-2b4j)
- [Best JavaScript Scroll Animation Libraries 2026 — CSS Author](https://cssauthor.com/best-javascript-scroll-animation-scrollytelling-libraries/)
- [10 Best GSAP Alternatives — Animation Addons](https://animation-addons.com/blog/gsap-alternatives-for-web-animations/)

### YouTube каналы
- [40 Web Design YouTubers 2026 — Feedspot](https://videos.feedspot.com/web_design_youtube_channels/)
- [10 Best YouTube Channels for Designers — Acodez](https://acodez.in/best-youtube-channels-for-designers/)

### GitHub awesome-lists
- [VengenceUI](https://github.com/Ashutoshx7/VengenceUI) — Animated landing components
- [PaulleDemon/awesome-landing-pages](https://github.com/PaulleDemon/awesome-landing-pages)
- [mearashadowfax/ScrewFast](https://github.com/mearashadowfax/ScrewFast) — Astro B2B template
- [PageAI-Pro/page-ui](https://github.com/PageAI-Pro/page-ui) — Landing UI React + Tailwind
- [thedevdojo/tails-components](https://github.com/thedevdojo/tails-components)
- [nordicgiant2/awesome-landing-page](https://github.com/nordicgiant2/awesome-landing-page)
- [EasyFrontendHQ/html-tailwindcss-components](https://github.com/EasyFrontendHQ/html-tailwindcss-components)
