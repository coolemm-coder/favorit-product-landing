# Профессиональный дизайн-аудит favorit-product-landing

**Дата:** 2026-04-27
**Метод:** скиллы LandingFactory `ui-ux-pro-max` + `frontend-design` + knowledge базы (`design-system.md`, `typography-system.md`, `hero-patterns.md`, `bento-grid.md`, `best-landings.md`)
**Подход:** визуальный анализ через Comet + code review + сравнение с топ-эталонами индустрии

---

## ОБЩАЯ ДИЗАЙН-ОЦЕНКА: 6.8 / 10

| Критерий | Оценка | Комментарий |
|----------|--------|-------------|
| Visual Hierarchy | 6/10 | Все секции одинаково "кричат", нет фокуса |
| Color System | 7/10 | Есть фирменные синий+красный, но плоско — нет глубины |
| Typography | 8/10 | Хорошие пары Space Grotesk + Inter, но размеры не проработаны |
| Spacing / Rhythm | 5/10 | Все секции одного веса, нет дыхания |
| Hero | 5/10 | H1 обрезан, фон не подходит, CTA тонет |
| Cards & Components | 6/10 | Простые блоки без shadow/depth |
| Microinteractions | 6/10 | Минимум hover, нет scroll-effects |
| Mobile-First | 7/10 | Респонсив есть, но без sticky CTA |
| Brand Consistency | 8/10 | Лого + цвета совпадают |
| Premium Feel | 5/10 | Не выглядит как премиум B2B-сайт |

**Вердикт:** лендинг функциональный, но **выглядит средне**. Чтобы стать "professional B2B premium" — нужно прицельно поработать над hero, ритмом, типографикой и микро-деталями.

---

## 🔴 КРИТИЧЕСКИЕ ДИЗАЙН-ПРОБЛЕМЫ

### 1. Hero не работает (5/10) — главная проблема

**Что вижу на скриншоте:**
- H1 обрезан вверху — видна только нижняя часть «р…у…»
- Фон-изображение «креветки + ракушки» с бесплатного фотобанка — выглядит как **ресторанное меню**, а не B2B-производитель
- Hero-stats (250т / 50+ / 17 лет) не видны на скриншоте — улетели вправо
- CTA «Запросить прайс» **тонет** на ярко-красных креветках — белая кнопка плохо контрастирует

**Эталоны для подражания:**
- **Diana's Seafood** (Wedge, Dieline 2025): лого как hero — две рыбы образуют D+S, чистый минимализм
- **Bremor 2023 ребрендинг**: глубокий океанический синий + bold typography
- **Stripe.com**: gradient backgrounds + большой H1 с 6vw clamp

**Что делать:**
1. **Заменить фон**: либо убрать видео и использовать `assets/template/products/bg2.jpg` (изолированное филе на сетке), либо реальное фото цеха `iblock/7a4` (разделка рыбы), либо чистый dark gradient `linear-gradient(135deg, #11204a 0%, #1a3570 100%)` + grain texture
2. **H1 переразверстать**: убрать `padding-top: 100px`, добавить `align-items: center`, использовать `max-height: 100vh; overflow: hidden`
3. **Hero-stats**: переместить под H1 как полоску или в bento-grid справа от текста (а не теряются)
4. **CTA**: дублировать в красный (`background: var(--ocean)`) — выделяется на любом фоне
5. **Badge сверху H1**: «🏆 Экспортёр года 2023 · ЦФО» — сразу social proof

### 2. Нет ритма между секциями — все одного веса

**Проблема:** На скриншоте видно, что hero, marquee, products идут одного синего тона + 1 светлая секция about. Глаз не понимает где **главное**.

**Правило ритма (по `frontend-design`):**
- Чередовать **light → dark → light → light → dark** секции
- Большие секции (hero, gallery) ↔ маленькие (testimonial bar, stats)
- Не делать 3+ подряд секций одного цвета

**Что делать:**
- Hero (тёмный) → Marquee (super dark) → **Products (СВЕТЛЫЙ переключение!)** → Gallery (светлый) → About split (white) → Quote (cream/ice) → Advantages (white) → STM (light blue) → Map (dark/gradient) → Geo (full-bleed photo) → Certs (white) → Partners (light) → FAQ (white) → Contact (split dark/white)

Сейчас между hero и каталогом идут 3 секции синего фона подряд → визуально утомляет.

### 3. Карточки каталога — плоские, без иерархии

**Что вижу:** 6 карточек одинакового размера с цифрами 01-06. Нет «главной» карточки. Фото товаров на opacity 0.4 — едва видны.

**Эталон (Apple Product Cards):**
- 1 большая карточка (главный продукт = Филе или Рыбный год)
- 4-5 средних
- 1-2 маленькие

**Решение — Bento Grid:**

```
┌────────────────┬─────────┬─────────┐
│  ФИЛЕ          │ Стейки  │ Тушка   │
│  (большая,     │         │         │
│   2x2)         ├─────────┼─────────┤
│                │ Фарш    │ Море-   │
│                │         │ продукты│
└────────────────┴─────────┴─────────┘
┌──────────────────────────────────────┐
│  «РЫБНЫЙ ГОД» — собственный бренд    │
│  (full-width, акцентная)              │
└──────────────────────────────────────┘
```

### 4. Нет visual depth (теней, glassmorphism)

**Что вижу:** все элементы на flat-фонах. Никаких теней под карточками. Нет «глубины» сцены.

**Решения из `design-system.md`:**
```css
--shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);
--shadow-primary: 0 10px 25px -5px rgba(26, 46, 90, 0.3); /* для CTA */
```

Применить везде где есть карточки: products, gallery, STM, partners, certs, FAQ.

### 5. Маркиза с рыбами — плоская

**Что вижу:** 9 SVG-рыб одного бледно-голубого цвета на тёмном фоне. Все одинаковые "по весу".

**Решение:** добавить разные цвета (синий → фирменный синий → красный для филе/стейков), увеличить интервалы, варьировать веса. Или вообще заменить marquee на **trust-bar с цифрами** (точные числа = лучше для B2B):

```
17 лет ⋅ 250 т/мес ⋅ 50+ SKU ⋅ 4 склада ⋅ EU экспорт ⋅ HACCP ⋅ FSSC 22000 ⋅ MSC
```

---

## 🟡 ВАЖНЫЕ УЛУЧШЕНИЯ

### 6. Типографика — не использует full-scale

**Сейчас:** clamp(40px, 7vw, 88px) для hero — нормально, но **сжато**.

**Эталон (по `typography-system.md`):**
```css
--text-hero: clamp(2.5rem, 6vw, 5rem);      /* 40px → 80px */
--text-h1:   clamp(2rem, 4.5vw, 3.5rem);    /* 32px → 56px */
```

**Что добавить:**
- `letter-spacing: -0.04em` для hero (сейчас -0.04em есть ✓, но мало для tighter)
- `line-height: 0.95` для hero ✓
- **Drop-cap** или огромная цифра в about — визуальная фишка
- Number-only display — например в stats: `font-variant-numeric: tabular-nums; font-feature-settings: "ss01";`

### 7. Нет grain-texture (по `grain-texture.md`)

В hero есть `::after` с noise SVG, но **opacity: 0** (не виден). Нужно поднять до 0.04-0.06 — добавит органичной текстуры, премиум look.

```css
.hero::after { opacity: 0.05; } /* было 0 */
```

### 8. Цветовая система — нет светлого акцента

**Сейчас:**
- Тёмно-синий `#1a2e5a` (60%)
- Красный `#c92030` (15%)
- Серые/белые (25%)

**Что не хватает:** **глубокого ocean blue для acent backgrounds** — не плоский tint, а с переходом.

**Добавить:**
```css
--gradient-deep: linear-gradient(135deg, #11204a 0%, #1a3570 100%);
--gradient-coral: linear-gradient(135deg, #c92030 0%, #e54156 100%);
--accent-mist: rgba(168, 197, 224, 0.08); /* для тонких backgrounds */
```

### 9. Кнопки CTA — без shadow primaryпризма

**Сейчас:** `.btn-w` плоская белая, `.nav-cta` плоская красная.

**Решение:**
```css
.nav-cta {
    background: linear-gradient(135deg, #c92030 0%, #d93040 100%);
    box-shadow: 0 4px 12px -2px rgba(201, 32, 48, 0.4);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -4px rgba(201, 32, 48, 0.5);
}
```

### 10. Сертификаты — table-style вместо bento

**Сейчас:** 5 ячеек в одну линию, выглядит как калькулятор Excel.

**Эталон:** разноразмерные карточки с большой иконкой/значком сертификата + краткое описание.

```
┌──────┬───────────┬──────┬─────┐
│ MSC  │  FSSC22000│ HACCP│ EU  │
│  ⭐  │  большая  │      │ 55L │
├──────┴───────────┼──────┴─────┤
│   SEDEX (audit)  │  Допуск    │
│                  │  школьно-  │
│                  │  дет.      │
└──────────────────┴────────────┘
```

### 11. Карта складов — нет подписи hero под ней

После Leaflet карты идёт сразу map-legend. Нужен **call-to-action** — например, «Все 4 склада с регулярными отгрузками рефрижератором».

### 12. Footer слишком тонкий

```html
<footer class="footer">
    ООО «Фаворит-Продукт» · Смоленск · 2009–2026
    Сайт: LandingPro.by
</footer>
```

**Эталон (по `footers.md`):** футер в B2B обычно 4-колоночный:
- Колонка 1: лого + адрес + телефон + email
- Колонка 2: разделы (Каталог, СТМ, Партнёры)
- Колонка 3: документы (Политика, Договор, Сертификаты)
- Колонка 4: соцсети + быстрая форма обратной связи

---

## 🟢 ЧТО ДЕЛАТЬ В ПЕРВУЮ ОЧЕРЕДЬ (приоритезация)

### Квик-вины (час работы) — поднимут «премиальность» сразу:

1. **Заменить hero-фон** на `assets/template/products/bg2.jpg` или dark gradient
2. **Добавить badge** в hero «🏆 Экспортёр года 2023 в ЦФО»
3. **Дубль CTA в красном** в hero (контраст на любом фоне)
4. **Активировать grain-texture** (opacity 0 → 0.05)
5. **Добавить shadow к карточкам** (md → lg на hover)
6. **Цветной акцент-CTA** с gradient + shadow
7. **Marquee** заменить на trust-bar с цифрами (или раскрасить рыб)

### Средние правки (2-3 часа):

8. **Bento-grid в каталоге** — главная карточка 2×2 для «Филе» или «Рыбный год»
9. **Bento-grid в сертификатах** — разноразмерные блоки
10. **Контрастные секции** — правильное чередование dark/light по ритму
11. **Микро-анимации** — counters в stats, scroll-reveal с stagger, hover effects on cards
12. **Footer** перерасверстать в 4 колонки

### Стратегические (4-6 часов):

13. **Видео hero**: записать или сгенерировать 5-сек видео цеха или плавающего филе
14. **Custom illustrations** для категорий — заменить SVG-рыб в маркизе на 1-2 фирменные иллюстрации в стиле бренда «Рыбный год»
15. **Scroll-progress bar** сверху страницы
16. **Mobile-sticky CTA** с шевроном "📞 +7 ⋅ Запросить прайс"

---

## 📐 КОНКРЕТНЫЕ CSS ПАТЧИ

### Patch 1: Глубина и тени (вставить в :root)
```css
--shadow-sm:  0 1px 3px rgba(17, 32, 74, 0.06), 0 1px 2px rgba(17, 32, 74, 0.04);
--shadow-md:  0 4px 6px -1px rgba(17, 32, 74, 0.08), 0 2px 4px -2px rgba(17, 32, 74, 0.05);
--shadow-lg:  0 10px 15px -3px rgba(17, 32, 74, 0.10), 0 4px 6px -4px rgba(17, 32, 74, 0.05);
--shadow-xl:  0 20px 25px -5px rgba(17, 32, 74, 0.12), 0 8px 10px -6px rgba(17, 32, 74, 0.05);
--shadow-cta: 0 10px 25px -5px rgba(201, 32, 48, 0.35);
--gradient-deep: linear-gradient(135deg, #11204a 0%, #1a3570 100%);
--gradient-coral: linear-gradient(135deg, #c92030 0%, #e54156 100%);
```

### Patch 2: Premium CTA
```css
.btn-cta-primary {
    background: var(--gradient-coral);
    color: #fff;
    padding: 16px 36px;
    border-radius: 100px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    box-shadow: var(--shadow-cta);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px -6px rgba(201, 32, 48, 0.45);
}
```

### Patch 3: Grain texture (для hero)
```css
.hero::after {
    opacity: 0.05;  /* было 0 */
}
```

### Patch 4: Card hover
```css
.p-card, .map-legend-item, .partner-logo, .stm-step, .cert {
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s, box-shadow 0.3s;
}
.p-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
```

---

## 📊 СРАВНЕНИЕ С ТОП-ЭТАЛОНАМИ

### vs. **Diana's Seafood** (Dieline 2025 winner)
| Критерий | Diana's | Favorit |
|----------|---------|---------|
| Bold typography | 9/10 | 7/10 — chip размер |
| Custom illustrations | 10/10 | 5/10 — стандартные SVG |
| Color system | 9/10 | 7/10 — нужен deeper blue |
| Premium feel | 9/10 | 6/10 — flat secrions |

### vs. **Bremor.com** (главный конкурент в РБ)
| Критерий | Bremor | Favorit |
|----------|--------|---------|
| Hero impact | 8/10 | 5/10 |
| Trust signals | 9/10 | 8/10 |
| Product cards | 8/10 | 6/10 |
| Mobile UX | 8/10 | 7/10 |

### vs. **Linear.app** (B2B reference)
| Критерий | Linear | Favorit |
|----------|--------|---------|
| Section rhythm | 10/10 | 5/10 |
| Microinteractions | 10/10 | 6/10 |
| Density | 9/10 | 7/10 |

---

## ИТОГ

Лендинг **на 50% от premium-уровня**. Чтобы догнать Diana's / Bremor / Linear по уровню дизайна, нужно:

1. **Перевернуть hero** (1ч) — фон, badge, дубль CTA, grain
2. **Добавить depth** (30 мин) — shadow tokens, hover states
3. **Bento-сетки** (2ч) — для products, certs, advantages
4. **Чередование секций** (1ч) — рваный ритм dark/light
5. **Микроанимации** (2ч) — counters, scroll-reveal, hover effects

После этих правок лендинг будет **8.5+/10** по дизайну — на уровне конкурентов из Dieline Awards.

---

## 🎨 ЧТО ВИЖУ НА СКРИНШОТЕ ПРЯМО СЕЙЧАС

| Зона | Проблема | Как исправить |
|------|----------|---------------|
| H1 | Обрезан вверху, видна только нижняя часть слов | Убрать большой padding-top, добавить max-height |
| CTA «Запросить прайс» | Белая на ярком фоне → тонет | Сделать красную gradient-кнопку с shadow |
| Hero-stats (250т / 50+ / 17) | Уехали вправо за viewport | Переместить под текст в виде trust-bar |
| Подзаголовок | Серый на полупрозрачном — низкий контраст | Поднять контраст, увеличить текст до 18px |
| Шапка | Прозрачная на ярком фоне → нечитаемая | Добавить more dark blur background |
| Marquee | Все рыбы одного цвета и размера | Разнообразить, или заменить на цифры-trust |
| Products цифры 01-04 | Слишком крупные, ломают баланс | Уменьшить opacity до 0.03, поставить в угол |
| Карточки | Плоские, без shadow | Добавить shadow-sm + hover shadow-lg |

После всех правок лендинг визуально будет **на уровне топ-сайтов B2B-сегмента рыбной отрасли**.
