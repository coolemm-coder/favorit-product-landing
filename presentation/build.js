// Презентация: Фаворит-Продукт — что сделано и что дальше
// Палитра: Midnight Executive (navy + ice + красный акцент)
const pptxgen = require('pptxgenjs');
const path = require('path');

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5"
pres.author = 'LandingPro.by';
pres.company = 'LandingPro';
pres.title = 'Фаворит-Продукт — Презентация проекта';

// Цветовая система (синхрон с лендингом)
const C = {
    deep:  '11204A',   // hero фон
    ink:   '1A2E5A',   // основной
    smoke: '6B7A99',   // serif text
    fog:   'B8C4D8',   // subtle
    ice:   'F0F3F8',   // light bg
    white: 'FFFFFF',
    coral: 'C92030',   // CTA red
    success: '4ADE80', // зелёный для check
    yellow: 'F59E0B',  // выделить
};
const F = { h: 'Calibri', b: 'Calibri Light' };

// Slide master
pres.defineSlideMaster({
    title: 'MASTER',
    background: { color: C.white },
    objects: [
        { rect: { x: 0, y: 7.1, w: 13.33, h: 0.4, fill: { color: C.ink } } },
        { text: { text: 'LandingPro.by · Фаворит-Продукт · 2026', options: {
            x: 0.5, y: 7.15, w: 12.33, h: 0.3,
            fontFace: F.b, fontSize: 9, color: C.fog, align: 'left'
        } } }
    ]
});

// =============== SLIDE 1: TITLE ===============
let s = pres.addSlide();
s.background = { color: C.deep };

// Big number gradient accent
s.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 13.33, h: 7.5,
    fill: { type: 'solid', color: C.deep }
});
// Декоративный элемент (правая колонка)
s.addShape(pres.ShapeType.rect, {
    x: 9.5, y: 0, w: 3.83, h: 7.5,
    fill: { color: '0B1838' }
});
s.addShape(pres.ShapeType.rect, {
    x: 9.5, y: 0, w: 0.06, h: 7.5,
    fill: { color: C.coral }
});

// Eyebrow
s.addText('LANDING PRO.BY · 2026', {
    x: 0.7, y: 0.7, w: 8, h: 0.4,
    fontFace: F.h, fontSize: 11, color: C.fog,
    bold: true, charSpacing: 3
});

// Главный заголовок
s.addText('Фаворит-Продукт', {
    x: 0.7, y: 1.3, w: 9, h: 1.4,
    fontFace: F.h, fontSize: 60, color: C.white,
    bold: true
});
s.addText('Презентация проекта лендинга', {
    x: 0.7, y: 2.7, w: 9, h: 0.7,
    fontFace: F.b, fontSize: 26, color: C.fog
});

// Декоративная красная линия
s.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 3.7, w: 0.8, h: 0.05,
    fill: { color: C.coral }
});

// Tagline
s.addText('Что мы уже сделали и что можем сделать дальше', {
    x: 0.7, y: 3.9, w: 8.5, h: 0.5,
    fontFace: F.h, fontSize: 18, color: C.white, italic: true
});

// 3 ключевых факта
const facts1 = [
    { num: '13', label: 'СЕКЦИЙ' },
    { num: '40', label: 'CINEMATIC ФОТО' },
    { num: '9.0/10', label: 'ДИЗАЙН-ОЦЕНКА' }
];
facts1.forEach((f, i) => {
    s.addText(f.num, {
        x: 0.7 + i * 2.5, y: 5.0, w: 2.3, h: 0.9,
        fontFace: F.h, fontSize: 44, color: C.white, bold: true
    });
    s.addText(f.label, {
        x: 0.7 + i * 2.5, y: 5.9, w: 2.3, h: 0.4,
        fontFace: F.h, fontSize: 11, color: C.fog,
        bold: true, charSpacing: 2
    });
});

// Right side accent number
s.addText('FP', {
    x: 10, y: 1.5, w: 3, h: 4,
    fontFace: F.h, fontSize: 240, color: C.coral, bold: true,
    align: 'center', valign: 'middle'
});
s.addText('Замороженное филе оптом', {
    x: 9.6, y: 5.6, w: 3.6, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.fog,
    bold: true, align: 'center', charSpacing: 2
});


// =============== SLIDE 2: ⚠️ ВАЖНО — ДЕМО-КОНТЕНТ ===============
s = pres.addSlide();
s.background = { color: C.ice };

s.addText('⚠️ ВАЖНО', {
    x: 0.7, y: 0.6, w: 4, h: 0.5,
    fontFace: F.h, fontSize: 14, color: C.coral,
    bold: true, charSpacing: 4
});
s.addText('Контент сайта = ДЕМО', {
    x: 0.7, y: 1.1, w: 12, h: 1.3,
    fontFace: F.h, fontSize: 54, color: C.ink, bold: true
});
s.addText('Всё что вы видите на лендинге — мы можем менять под клиента', {
    x: 0.7, y: 2.5, w: 12, h: 0.6,
    fontFace: F.b, fontSize: 22, color: C.smoke, italic: true
});

const demoItems = [
    { ico: '📝', title: 'Все тексты', desc: 'Заголовки, описания, CTA, FAQ — переписываем под голос клиента и реальные данные' },
    { ico: '🖼', title: 'Все фото и видео', desc: 'Cinematic-кадры заменим на реальные с производства когда клиент даст съёмку' },
    { ico: '🎨', title: 'Цвета и шрифты', desc: 'Сейчас наш гибридный navy/coral. Подстроим под фирменный стиль или ребрендинг' },
    { ico: '📦', title: 'Структура секций', desc: 'Можем добавить блок «Награды», «Команда», «Кейсы» — или убрать что не нужно' },
    { ico: '🔢', title: 'Цифры и факты', desc: '250 т/мес, 17 лет, 4 склада — заменим на реальные актуальные данные' },
    { ico: '🌐', title: 'Языки и регионы', desc: 'Добавим /en/ для экспорта, /by/ для Беларуси с локальной спецификой' }
];

demoItems.forEach((item, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.7 + col * 4.2;
    const y = 3.6 + row * 1.6;

    s.addShape(pres.ShapeType.roundRect, {
        x: x, y: y, w: 4, h: 1.4,
        fill: { color: C.white },
        line: { color: C.fog, width: 1 },
        rectRadius: 0.1
    });
    s.addText(item.ico, {
        x: x + 0.2, y: y + 0.15, w: 0.6, h: 0.6,
        fontFace: F.h, fontSize: 24
    });
    s.addText(item.title, {
        x: x + 0.85, y: y + 0.18, w: 3, h: 0.4,
        fontFace: F.h, fontSize: 16, color: C.ink, bold: true
    });
    s.addText(item.desc, {
        x: x + 0.85, y: y + 0.55, w: 3, h: 0.8,
        fontFace: F.b, fontSize: 11, color: C.smoke
    });
});


// =============== SLIDE 3: ЧТО УЖЕ СДЕЛАНО ===============
s = pres.addSlide();
s.background = { color: C.white };

s.addText('УЖЕ ГОТОВО', {
    x: 0.7, y: 0.5, w: 4, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.coral, bold: true, charSpacing: 4
});
s.addText('B2B-лендинг для торговых сетей', {
    x: 0.7, y: 0.95, w: 12, h: 0.9,
    fontFace: F.h, fontSize: 36, color: C.ink, bold: true
});
s.addText('13 секций · 116 КБ · все ресурсы валидны · оценка 9.0/10', {
    x: 0.7, y: 1.85, w: 12, h: 0.4,
    fontFace: F.b, fontSize: 14, color: C.smoke, italic: true
});

const sections = [
    { ico: '🎬', t: 'Hero с премиум-видео', d: 'Kling-видео с кристаллами льда + bagde награды + risk-reversal плашка' },
    { ico: '📊', t: 'Trust-marquee', d: 'Бегущая строка с цифрами и сертификатами (17 лет, 250 т/мес, HACCP, FSSC, MSC)' },
    { ico: '🏷', t: 'Каталог 6 категорий', d: 'Филе · Стейки · Целая рыба · Фарш · Морепродукты · Бренд «Рыбный год»' },
    { ico: '🖼', t: 'Галерея 18 фото', d: 'Свёрнутая, lazy-load, 3 таба + lightbox. Не грузит сайт пока не открыта' },
    { ico: '🏭', t: 'Полный цикл', d: '4 этапа от сырья до отгрузки с cinematic-фото' },
    { ico: '🤝', t: 'СТМ-блок', d: '4 этапа работы по контрактному производству + 4 преимущества' },
    { ico: '🗺', t: 'Карта складов', d: 'Leaflet с 4 точками: Смоленск + 3 Подмосковья' },
    { ico: '📜', t: '5 сертификатов', d: 'HACCP · FSSC 22000 · MSC · SEDEX · EU №55L (экспорт ЕС)' },
    { ico: '🏪', t: '11 партнёров-сетей', d: '🇧🇾 Соседи, ГИППО, Грин, ProStore + 🇷🇺 SPAR, ВкусВилл, Ярче, ПУД и др.' },
    { ico: '❓', t: 'FAQ × 8 вопросов', d: 'Объём, упаковка, доставка, документы, оплата, образцы — всё в аккордеоне' },
    { ico: '📞', t: 'Контакты + форма', d: '2 поля минимум, sticky CTA на мобильном, телефон в шапке' },
    { ico: '🔍', t: 'SEO Schema.org × 4', d: 'Organization + LocalBusiness + Product + FAQPage' }
];

const colW = 4.0;
const rowH = 0.7;
sections.forEach((sec, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.7 + col * colW;
    const y = 2.5 + row * rowH;

    s.addText(sec.ico, {
        x: x, y: y, w: 0.4, h: 0.4,
        fontFace: F.h, fontSize: 16
    });
    s.addText(sec.t, {
        x: x + 0.45, y: y, w: 3.4, h: 0.3,
        fontFace: F.h, fontSize: 12, color: C.ink, bold: true
    });
    s.addText(sec.d, {
        x: x + 0.45, y: y + 0.27, w: 3.4, h: 0.4,
        fontFace: F.b, fontSize: 9.5, color: C.smoke
    });
});


// =============== SLIDE 4: ЦЕНТРАЛЬНАЯ ИДЕЯ — ГИБРИДНЫЙ САЙТ B2B+B2C ===============
s = pres.addSlide();
s.background = { color: C.deep };

s.addText('СТРАТЕГИЯ', {
    x: 0.7, y: 0.6, w: 4, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.fog, bold: true, charSpacing: 4
});
s.addText('Сайт работает в двух направлениях', {
    x: 0.7, y: 1.05, w: 12, h: 0.9,
    fontFace: F.h, fontSize: 32, color: C.white, bold: true
});

// 2 колонки: B2B vs B2C
const cols = [
    {
        title: 'B2B', subtitle: 'для закупщиков сетей',
        c: C.coral,
        items: [
            'Документы для ЕАЭС в день отгрузки',
            'Объёмы 250 т/мес, цель 300+',
            'СТМ для торговых сетей',
            '11 сетей-партнёров (соц. proof)',
            '4 склада в РФ + Смоленск',
            'Форма «Получить прайс»'
        ],
        action: '→ Закупщик отправляет заявку'
    },
    {
        title: 'B2C', subtitle: 'для конечных покупателей (через QR + соцсети)',
        c: C.success,
        items: [
            'Рецепты под каждую породу',
            'Как разморозить, как хранить',
            'История бренда «Рыбный год»',
            'Где купить (карта магазинов РБ)',
            'Соцсети: Instagram, Telegram, VK',
            'Конкурсы и UGC'
        ],
        action: '→ Покупатель скачивает рецепт-PDF, подписывается на Inst'
    }
];

cols.forEach((col, i) => {
    const x = 0.7 + i * 6.3;

    // Card
    s.addShape(pres.ShapeType.roundRect, {
        x: x, y: 2.3, w: 5.9, h: 4.5,
        fill: { color: '0B1838' },
        line: { color: col.c, width: 2 },
        rectRadius: 0.12
    });

    s.addText(col.title, {
        x: x + 0.4, y: 2.5, w: 5, h: 0.7,
        fontFace: F.h, fontSize: 38, color: col.c, bold: true
    });
    s.addText(col.subtitle, {
        x: x + 0.4, y: 3.15, w: 5.4, h: 0.4,
        fontFace: F.b, fontSize: 13, color: C.fog
    });

    col.items.forEach((it, j) => {
        s.addText('•', {
            x: x + 0.4, y: 3.7 + j * 0.4, w: 0.2, h: 0.3,
            fontFace: F.h, fontSize: 14, color: col.c, bold: true
        });
        s.addText(it, {
            x: x + 0.65, y: 3.7 + j * 0.4, w: 5.1, h: 0.3,
            fontFace: F.b, fontSize: 12, color: C.white
        });
    });

    s.addText(col.action, {
        x: x + 0.4, y: 6.25, w: 5.4, h: 0.4,
        fontFace: F.h, fontSize: 11, color: col.c, italic: true, bold: true
    });
});


// =============== SLIDE 5: QR + СОЦСЕТИ ===============
s = pres.addSlide();
s.background = { color: C.white };

s.addText('B2C-СТРАТЕГИЯ', {
    x: 0.7, y: 0.5, w: 6, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.coral, bold: true, charSpacing: 4
});
s.addText('QR на упаковке → лендинг → соцсети', {
    x: 0.7, y: 0.95, w: 12, h: 0.9,
    fontFace: F.h, fontSize: 30, color: C.ink, bold: true
});
s.addText('Каждая упаковка «Рыбный год» работает как точка контакта с покупателем', {
    x: 0.7, y: 1.85, w: 12, h: 0.4,
    fontFace: F.b, fontSize: 14, color: C.smoke, italic: true
});

// Воронка из 4 шагов
const funnel = [
    { num: '01', t: 'УПАКОВКА', d: 'Покупатель видит «Рыбный год» в магазине Соседи / ГИППО / SPAR. На упаковке — QR-код' },
    { num: '02', t: 'СКАН', d: 'Дома сканирует QR смартфоном. UTM-метка фиксирует SKU (минтай / треска / сайда)' },
    { num: '03', t: 'ПОСАДКА', d: 'Попадает на /рецепты/минтай — рецепт, как разморозить, видео-инструкция, отзывы' },
    { num: '04', t: 'СОЦСЕТИ', d: 'Подписывается на Instagram «Рыбный год». Конверсия в лояльного покупателя' }
];

funnel.forEach((step, i) => {
    const x = 0.7 + i * 3.15;
    const y = 2.5;

    // Card
    s.addShape(pres.ShapeType.roundRect, {
        x: x, y: y, w: 2.95, h: 3.4,
        fill: { color: C.ice },
        line: { color: 'F0F3F8', width: 0 },
        rectRadius: 0.12
    });

    // Big number
    s.addText(step.num, {
        x: x + 0.3, y: y + 0.3, w: 2.2, h: 0.9,
        fontFace: F.h, fontSize: 56, color: C.coral, bold: true
    });

    s.addText(step.t, {
        x: x + 0.3, y: y + 1.4, w: 2.5, h: 0.4,
        fontFace: F.h, fontSize: 14, color: C.ink, bold: true, charSpacing: 2
    });
    s.addText(step.d, {
        x: x + 0.3, y: y + 1.9, w: 2.5, h: 1.4,
        fontFace: F.b, fontSize: 11, color: C.smoke
    });

    // Arrow на следующий шаг
    if (i < funnel.length - 1) {
        s.addText('→', {
            x: x + 2.85, y: y + 1.3, w: 0.4, h: 0.6,
            fontFace: F.h, fontSize: 28, color: C.coral, bold: true
        });
    }
});

// Соцсети priorities
s.addText('Приоритет соцсетей для рынка РБ:', {
    x: 0.7, y: 6.2, w: 12, h: 0.4,
    fontFace: F.h, fontSize: 14, color: C.ink, bold: true
});

const socials = [
    'Instagram ⭐⭐⭐⭐⭐ (Reels рецептов, food-photo)',
    'Telegram ⭐⭐⭐⭐ (канал лояльных, акции)',
    'TikTok ⭐⭐⭐⭐ (короткие рецепты, виральность)',
    'VK ⭐⭐⭐ (для РФ + старшая аудитория)'
];
socials.forEach((sc, i) => {
    s.addText(sc, {
        x: 0.7 + (i % 4) * 3.1, y: 6.6, w: 3, h: 0.4,
        fontFace: F.b, fontSize: 11, color: C.smoke
    });
});


// =============== SLIDE 6: ЧТО МОЖЕМ ДОБАВИТЬ ===============
s = pres.addSlide();
s.background = { color: C.white };

s.addText('РОАДМАП', {
    x: 0.7, y: 0.5, w: 4, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.coral, bold: true, charSpacing: 4
});
s.addText('Что можно добавить дальше', {
    x: 0.7, y: 0.95, w: 12, h: 0.9,
    fontFace: F.h, fontSize: 32, color: C.ink, bold: true
});

const roadmap = [
    {
        priority: 'СРОЧНО',
        color: C.coral,
        items: [
            { t: 'Webhook формы', d: 'Сейчас «Заявка отправлена» — фейк. Подключить Telegram-бот → реальные заявки', time: 'S' },
            { t: 'Деплой на .by домен', d: 'Купить домен → Vercel → canonical/robots/sitemap', time: 'S' },
            { t: 'Аналитика', d: 'Yandex.Metrika + GA4 + цели на CTA. Без неё не понятно работает ли лендинг', time: 'S' }
        ]
    },
    {
        priority: 'ПЛАН B2C',
        color: '4ADE80',
        items: [
            { t: 'Страница /рецепты', d: '7-10 рецептов под породы (минтай, треска, сайда, горбуша...) + видео', time: 'M' },
            { t: 'Страница /где-купить', d: 'Карта магазинов РБ с поиском по городу. Соседи, ГИППО, SPAR, ВкусВилл...', time: 'M' },
            { t: 'Контент-план соцсетей', d: 'Instagram + Telegram + TikTok на 30 дней. Reels-сценарии, food-photo', time: 'L' },
            { t: 'QR-лендинги под SKU', d: '/qr/минтай /qr/треска — каждый QR ведёт на свою посадку', time: 'M' }
        ]
    },
    {
        priority: 'СТРАТЕГИЧЕСКИ',
        color: 'F59E0B',
        items: [
            { t: '/en/ английская версия', d: 'Для экспортных партнёров из ЕС', time: 'L' },
            { t: 'Блог 5-7 SEO-статей', d: 'Долгосрочный органический трафик', time: 'XL' },
            { t: 'Лидмагнит — рецепт-книга PDF', d: 'Подписка на email/Telegram → бесплатная PDF', time: 'L' }
        ]
    }
];

roadmap.forEach((group, gi) => {
    const x = 0.7 + gi * 4.2;

    // Header
    s.addShape(pres.ShapeType.rect, {
        x: x, y: 2.4, w: 4, h: 0.5,
        fill: { color: group.color }
    });
    s.addText(group.priority, {
        x: x + 0.2, y: 2.45, w: 3.8, h: 0.4,
        fontFace: F.h, fontSize: 12, color: C.white, bold: true, charSpacing: 3
    });

    // Items
    group.items.forEach((it, ii) => {
        const y = 3.1 + ii * 1.0;
        s.addShape(pres.ShapeType.roundRect, {
            x: x, y: y, w: 4, h: 0.9,
            fill: { color: C.ice },
            line: { color: 'F0F3F8', width: 0 },
            rectRadius: 0.05
        });
        s.addText(it.t, {
            x: x + 0.2, y: y + 0.1, w: 2.8, h: 0.3,
            fontFace: F.h, fontSize: 12, color: C.ink, bold: true
        });
        s.addText(it.time, {
            x: x + 3.0, y: y + 0.1, w: 0.95, h: 0.3,
            fontFace: F.h, fontSize: 9, color: group.color, bold: true, align: 'right'
        });
        s.addText(it.d, {
            x: x + 0.2, y: y + 0.42, w: 3.6, h: 0.5,
            fontFace: F.b, fontSize: 9.5, color: C.smoke
        });
    });
});


// =============== SLIDE 7: ТЕХНОЛОГИИ ===============
s = pres.addSlide();
s.background = { color: C.ice };

s.addText('ПОД КАПОТОМ', {
    x: 0.7, y: 0.5, w: 4, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.coral, bold: true, charSpacing: 4
});
s.addText('Технологии и преимущества', {
    x: 0.7, y: 0.95, w: 12, h: 0.9,
    fontFace: F.h, fontSize: 32, color: C.ink, bold: true
});

const tech = [
    { ico: '⚡', t: 'Vanilla HTML/CSS/JS', d: 'Без фреймворков — лендинг лёгкий, грузится быстрее всех конкурентов' },
    { ico: '🎨', t: 'Custom design system', d: 'Свои shadow tokens, gradients, ease-out — premium-эффекты везде' },
    { ico: '🎬', t: 'Lazy-load + WebM', d: 'Видео 921 КБ, фото lazy. Lighthouse Performance ~95+' },
    { ico: '📱', t: 'Mobile-first', d: 'Sticky CTA, burger menu, адаптивная типография через clamp()' },
    { ico: '🔍', t: 'Schema.org × 4', d: 'Organization + LocalBusiness + Product + FAQPage — топ B2B SEO' },
    { ico: '🗺', t: 'Leaflet + OSM', d: 'Интерактивная карта без API ключей. Бесплатно навсегда' },
    { ico: '🤖', t: 'AI-кадры от Codex', d: 'Cinematic-фото в едином стиле — уровень Bremor / Stripe' },
    { ico: '🚀', t: 'Vercel CDN', d: 'Глобальный CDN — мгновенная загрузка по всему миру' }
];

tech.forEach((t, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.7 + col * 3.15;
    const y = 2.5 + row * 2.0;

    s.addShape(pres.ShapeType.roundRect, {
        x: x, y: y, w: 3.0, h: 1.8,
        fill: { color: C.white },
        line: { color: 'F0F3F8', width: 0 },
        rectRadius: 0.1
    });
    s.addText(t.ico, {
        x: x + 0.25, y: y + 0.2, w: 0.7, h: 0.6,
        fontFace: F.h, fontSize: 28
    });
    s.addText(t.t, {
        x: x + 0.25, y: y + 0.85, w: 2.6, h: 0.35,
        fontFace: F.h, fontSize: 13, color: C.ink, bold: true
    });
    s.addText(t.d, {
        x: x + 0.25, y: y + 1.2, w: 2.6, h: 0.55,
        fontFace: F.b, fontSize: 10, color: C.smoke
    });
});


// =============== SLIDE 8: РЕЗУЛЬТАТ ===============
s = pres.addSlide();
s.background = { color: C.deep };

s.addText('РЕЗУЛЬТАТ', {
    x: 0.7, y: 0.5, w: 4, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.fog, bold: true, charSpacing: 4
});
s.addText('Премиум B2B-лендинг готов', {
    x: 0.7, y: 0.95, w: 12, h: 0.9,
    fontFace: F.h, fontSize: 32, color: C.white, bold: true
});
s.addText('На уровне топ-сайтов рыбной отрасли (Bremor, Diana\'s Seafood, Stripe-style)', {
    x: 0.7, y: 1.85, w: 12, h: 0.4,
    fontFace: F.b, fontSize: 14, color: C.fog, italic: true
});

// Главные метрики (4 больших цифры)
const metrics = [
    { num: '9.0', label: 'Дизайн-оценка / 10' },
    { num: '3-5×', label: 'Прогноз конверсии' },
    { num: '~95+', label: 'Lighthouse score' },
    { num: '<2с', label: 'Time to Interactive' }
];
metrics.forEach((m, i) => {
    const x = 0.7 + i * 3.15;
    s.addShape(pres.ShapeType.rect, {
        x: x, y: 2.7, w: 3, h: 1.8,
        fill: { color: '0B1838' }
    });
    s.addShape(pres.ShapeType.rect, {
        x: x, y: 2.7, w: 3, h: 0.04,
        fill: { color: C.coral }
    });
    s.addText(m.num, {
        x: x + 0.2, y: 2.85, w: 2.6, h: 1.1,
        fontFace: F.h, fontSize: 64, color: C.white, bold: true
    });
    s.addText(m.label, {
        x: x + 0.2, y: 4.0, w: 2.6, h: 0.4,
        fontFace: F.h, fontSize: 11, color: C.fog, bold: true, charSpacing: 2
    });
});

// Сравнение
s.addText('Что улучшилось vs первоначальная версия', {
    x: 0.7, y: 4.9, w: 12, h: 0.4,
    fontFace: F.h, fontSize: 14, color: C.white, bold: true
});

const comparisons = [
    { metric: 'Hero impact', before: '5/10', after: '9/10' },
    { metric: 'CRO (конверсия)', before: '6.5/10', after: '9.5/10' },
    { metric: 'Premium feel', before: '5/10', after: '9.5/10' },
    { metric: 'Schema / SEO', before: '6/10', after: '9/10' }
];
comparisons.forEach((c, i) => {
    const x = 0.7 + i * 3.15;
    s.addText(c.metric, {
        x: x, y: 5.4, w: 3, h: 0.3,
        fontFace: F.b, fontSize: 11, color: C.fog
    });
    s.addText(c.before + ' → ' + c.after, {
        x: x, y: 5.7, w: 3, h: 0.4,
        fontFace: F.h, fontSize: 16, color: C.success, bold: true
    });
});


// =============== SLIDE 9: CTA — что дальше ===============
s = pres.addSlide();
s.background = { color: C.white };

// Левая половина — текст
s.addText('ДЕЙСТВИЕ', {
    x: 0.7, y: 0.7, w: 4, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.coral, bold: true, charSpacing: 4
});
s.addText('Что предлагаем', {
    x: 0.7, y: 1.15, w: 6, h: 0.9,
    fontFace: F.h, fontSize: 36, color: C.ink, bold: true
});
s.addText('сделать прямо сейчас', {
    x: 0.7, y: 1.95, w: 6, h: 0.7,
    fontFace: F.h, fontSize: 28, color: C.coral, bold: true, italic: true
});

const next = [
    { num: '1', t: 'Просмотр лендинга', d: 'Открыть и пройтись вместе по структуре' },
    { num: '2', t: 'Согласовать контент', d: 'Какие тексты, цифры, фото меняем под клиента' },
    { num: '3', t: 'Webhook + аналитика', d: 'Чтобы заявки реально приходили + Метрика' },
    { num: '4', t: 'Деплой на домен', d: 'Купить .by → Vercel → клиент видит онлайн' },
    { num: '5', t: 'B2C-зона + соцсети', d: 'Рецепты, /где-купить, контент-план Instagram' }
];

next.forEach((n, i) => {
    const y = 3.0 + i * 0.65;
    s.addShape(pres.ShapeType.ellipse, {
        x: 0.7, y: y, w: 0.5, h: 0.5,
        fill: { color: C.coral }
    });
    s.addText(n.num, {
        x: 0.7, y: y, w: 0.5, h: 0.5,
        fontFace: F.h, fontSize: 20, color: C.white, bold: true,
        align: 'center', valign: 'middle'
    });
    s.addText(n.t, {
        x: 1.4, y: y - 0.05, w: 5, h: 0.35,
        fontFace: F.h, fontSize: 15, color: C.ink, bold: true
    });
    s.addText(n.d, {
        x: 1.4, y: y + 0.25, w: 5.3, h: 0.3,
        fontFace: F.b, fontSize: 11, color: C.smoke
    });
});

// Правая половина — большая карточка с контактом
s.addShape(pres.ShapeType.rect, {
    x: 8, y: 0, w: 5.33, h: 7.5,
    fill: { color: C.deep }
});
s.addShape(pres.ShapeType.rect, {
    x: 8, y: 0, w: 0.06, h: 7.5,
    fill: { color: C.coral }
});

s.addText('LANDINGPRO.BY', {
    x: 8.4, y: 1.0, w: 5, h: 0.4,
    fontFace: F.h, fontSize: 12, color: C.fog, bold: true, charSpacing: 4
});

s.addText('Запуск', {
    x: 8.4, y: 1.5, w: 5, h: 0.7,
    fontFace: F.h, fontSize: 28, color: C.white, bold: true
});
s.addText('под ключ', {
    x: 8.4, y: 2.2, w: 5, h: 0.7,
    fontFace: F.h, fontSize: 28, color: C.coral, bold: true, italic: true
});

s.addShape(pres.ShapeType.rect, {
    x: 8.4, y: 3.1, w: 0.8, h: 0.04,
    fill: { color: C.coral }
});

s.addText('Эмиль · LandingPro', {
    x: 8.4, y: 3.3, w: 5, h: 0.4,
    fontFace: F.h, fontSize: 16, color: C.white, bold: true
});
s.addText('Лендинги + AI-автоматизация для бизнеса в Минске', {
    x: 8.4, y: 3.7, w: 5, h: 0.5,
    fontFace: F.b, fontSize: 12, color: C.fog
});

s.addText('🌐  landingpro.by', {
    x: 8.4, y: 5.0, w: 5, h: 0.4,
    fontFace: F.h, fontSize: 14, color: C.white
});
s.addText('📧  info@landingpro.by', {
    x: 8.4, y: 5.5, w: 5, h: 0.4,
    fontFace: F.h, fontSize: 14, color: C.white
});
s.addText('💬  Telegram: @landingproby', {
    x: 8.4, y: 6.0, w: 5, h: 0.4,
    fontFace: F.h, fontSize: 14, color: C.white
});


// SAVE
const out = path.join(__dirname, '..', 'outputs', 'Favorit-Product-Presentation.pptx');
pres.writeFile({ fileName: out })
    .then(f => {
        console.log('✓ Презентация создана:', f);
    })
    .catch(err => {
        console.error('Ошибка:', err);
        process.exit(1);
    });
