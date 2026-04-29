# Промпты для генерации 4 кадров «Полный цикл»

**Цель:** заменить старые низкокачественные фото с Битрикса на 4 cinematic AI-кадра в едином стиле для блока «О предприятии».

**Где будут стоять:** правая колонка блока About-Split, 2×2 grid, у каждой ячейки aspect ratio ~ 1:1 или 4:3.

**Стиль:** premium navy palette `#11204a` + ice white `#f0f3f8` + минимальный красный акцент `#c92030`. Тот же mood что и в hero (кристаллы льда). Чтобы все 5 кадров (hero + 4 process) выглядели как одна серия от одного фотографа.

**Методология:** nano-banana 6-Component Reasoning Brief (Subject / Action / Context / Composition / Lighting / Style), Cinema domain mode, narrative prose, positive framing.

---

## 🔑 ОБЩИЕ ПАРАМЕТРЫ ДЛЯ ВСЕХ 4 КАДРОВ

```
Aspect ratio: 1:1 (square) или 4:3
Resolution: 2K
Color grading: Kodak Vision3 500T (cool tungsten), desaturated, deep navy shadows,
ice-white highlights with subtle red specular accent
Camera: ARRI Alexa Mini LF + Cooke S7/i Full Frame Plus 50mm
Mood: documentary B2B premium, calm professional, no marketing kitsch
Negative: people faces, hands of workers visible, text, watermark, logos,
sudden colors, oversaturation, cartoon, melting ice, warm orange tones
```

---

## 📸 КАДР 1 — СЫРЬЁ (raw fish reception)

### DALL-E 3 / GPT-image-1 prompt

```
A cinematic top-down view of fresh whole frozen Atlantic cod and pollock
fish lying neatly arranged on stainless steel processing tray, glistening
ice crystals scattered between fish bodies, deep blue cool factory lighting
casting subtle shadows, water droplets on metallic surface reflecting
overhead light. Captured with ARRI Alexa Mini LF, Cooke S7/i 50mm lens,
shallow depth of field on the central fish with soft falloff to edges.
Color grading: Kodak Vision3 500T tungsten, desaturated palette dominated
by deep navy blue #11204a and ice white #f0f3f8 with single subtle red
accent on fish belly. Documentary B2B premium aesthetic. Empty industrial
environment, uninhabited, no people visible, clean uncluttered composition.
Ultra-realistic, high resolution.
```

### Midjourney v6
```
overhead cinematic shot of fresh whole frozen cod and pollock arranged on
stainless steel tray, ice crystals between fish, cool blue factory lighting,
water droplets on metal, ARRI Alexa Mini LF, Cooke S7/i 50mm, shallow depth
of field, Kodak Vision3 500T color grade, navy blue #11204a + ice white,
documentary B2B premium, empty industrial environment --ar 1:1 --v 6
--style raw --stylize 250
```

### Объяснение по компонентам
- **Subject:** целые мороженые рыбы (треска + минтай) — узнаваемое сырьё
- **Action:** статика, рыбы аккуратно разложены — не хаос, а порядок
- **Context:** stainless steel факторный поднос — сразу читается как «производство»
- **Composition:** top-down view (тарелка-flat-lay) — модно для B2B-food, чистая сетка
- **Lighting:** cool blue factory lighting — холодная свежесть, не тёплая ресторанность
- **Style:** ARRI + Cooke + Kodak Vision3 500T — кинематографическая глубина

---

## 📸 КАДР 2 — РАЗДЕЛКА (filleting / processing)

### DALL-E 3 / GPT-image-1 prompt

```
Macro close-up of pristine white fish fillet being placed onto polished
stainless steel cutting surface, sharp Japanese-style knife visible at
edge of frame, fillet meat showing translucent fibrous texture catching
soft directional light, tiny droplets of water beading on surface. Clean
white anonymous gloved hand barely visible at frame edge holding fillet
in place. Shot with ARRI Alexa Mini LF and 50mm Cooke S7/i, very shallow
depth of field with knife and far edge in soft bokeh. Cool blue tungsten
lighting from upper-left creating Rembrandt-style shadow on fillet edge.
Color palette dominated by ice-cold navy blue #11204a backdrop, fillet
in pale ivory tones. No faces visible, no body, only edge of gloved hand,
quiet meditative production atmosphere. Ultra-realistic, high resolution.
```

### Midjourney v6
```
macro close-up of white fish fillet on polished stainless steel cutting
board, Japanese knife edge visible, translucent meat fibers, water beads,
subtle gloved hand edge, ARRI Alexa Mini LF, Cooke 50mm, very shallow DOF,
Rembrandt cool blue lighting, navy #11204a + ivory white, no faces,
meditative production --ar 1:1 --v 6 --style raw --stylize 250
```

### Объяснение
- **Subject:** филе рыбы крупным планом — готовый продукт компании
- **Action:** «being placed» — статика с намёком на действие
- **Context:** stainless steel + Japanese knife — премиум-инструменты, точность
- **Composition:** macro + shallow DOF + knife edge bokeh — кинематографическая фокусировка
- **Lighting:** Rembrandt cool blue от upper-left — драматичный, не плоский
- **Style:** «no faces, only edge of gloved hand» — анонимность B2B

---

## 📸 КАДР 3 — УПАКОВКА (packaging in branded foil)

### DALL-E 3 / GPT-image-1 prompt

```
Cinematic close-up of premium frozen fish fillet sealed inside translucent
silver vacuum packaging, lying on dark navy slate surface with ice crystals
scattered around. The vacuum film catches subtle highlights, fish fillet
visible through plastic in soft pink-pale ivory tones. Empty industrial
shelf with similar packed products visible in deep blurred background.
Shot with ARRI Alexa Mini LF and Cooke S7/i 50mm Full Frame Plus, shallow
depth of field, three-quarter angle from upper-right. Cool tungsten lighting
with single subtle warm rim accent on packaging edge. Color grading Kodak
Vision3 500T: deep navy #11204a dominates, ice-cold silver-white packaging,
single faint red accent stripe visible on label area. No text on label, no
logos, clean uncluttered composition, uninhabited empty workspace.
Ultra-realistic, high resolution.
```

### Midjourney v6
```
close-up of premium fish fillet in transparent silver vacuum pack on dark
navy slate, ice crystals around, soft highlights on plastic film, empty
factory shelf bokeh background, ARRI Alexa Mini LF Cooke 50mm, three-quarter
angle, Rembrandt blue light with red rim accent, Kodak Vision3 500T grade,
navy #11204a + silver-white, no text no logos, B2B premium --ar 1:1 --v 6
--style raw --stylize 250
```

### Объяснение
- **Subject:** vacuum-pack с филе — финальный розничный продукт
- **Action:** статика на slate — premium product photography
- **Context:** «empty industrial shelf bokeh» — намёк на склад/массовость
- **Composition:** three-quarter angle — самый flattering для упаковки
- **Lighting:** Rembrandt + warm rim accent — мягкий profesionalный
- **Style:** «no text, no logos» — будет место под бренд клиента (СТМ)

---

## 📸 КАДР 4 — ОТГРУЗКА (cold storage / dispatch)

### DALL-E 3 / GPT-image-1 prompt

```
Wide cinematic shot inside refrigerated warehouse: stacks of frozen fish
boxes in neat rows extending into vanishing point depth, cold mist rising
between aisles, single warm light beam slanting from upper right cutting
through cold blue atmosphere. Open refrigerator truck doors visible in
foreground, dark interior of trailer suggesting outgoing shipment. Captured
with ARRI Alexa Mini LF, Cooke 35mm wide lens, deep depth of field, low
angle from worker eye level looking down the aisle. Cool tungsten factory
lighting overhead with hint of warm sodium glow from far end. Color grading
Kodak Vision3 500T: deep navy #11204a shadows, ice-cold white-silver boxes,
subtle warm orange accent at far light source for cinematic depth. Empty
deserted aisle with no workers visible, no faces, uninhabited industrial
atmosphere. Ultra-realistic, high resolution.
```

### Midjourney v6
```
wide cinematic shot of refrigerated warehouse, neat aisles of frozen fish
boxes vanishing into distance, cold mist rising, single warm light beam
from upper-right, refrigerator truck doors in foreground, ARRI Alexa Mini
LF Cooke 35mm wide, low angle, deep DOF, Kodak Vision3 500T grade, navy
#11204a + silver-white + warm sodium accent at far end, empty aisle no
workers, B2B documentary --ar 1:1 --v 6 --style raw --stylize 250
```

### Объяснение
- **Subject:** склад + рефрижератор-фура — финальная стадия цикла
- **Action:** «open truck doors» — намёк на отгрузку, без человеческой суеты
- **Context:** «vanishing point depth» — масштаб производства
- **Composition:** wide-angle low-shot вдоль аисла — драматичная перспектива
- **Lighting:** «warm light beam cutting through cold blue» — кинематографический контраст (как в Hero крис­таллы)
- **Style:** «no workers, deserted aisle» — premium B2B без людских историй

---

## 🚀 КАК ЗАПУСТИТЬ ГЕНЕРАЦИЮ

### Вариант A: nano-banana CLI (если установлен)

```bash
cd ~/Desktop/favorit-product-landing/assets/hero/

# Кадр 1
nano-banana "$(< /dev/stdin)" --model pro -s 2K -a 1:1 -o process-01-raw <<EOF
[вставить prompt из «КАДР 1»]
EOF

# Кадр 2
nano-banana "$(< /dev/stdin)" --model pro -s 2K -a 1:1 -o process-02-cutting <<EOF
[вставить prompt из «КАДР 2»]
EOF

# Кадр 3 и 4 — аналогично
```

### Вариант B: ChatGPT / DALL-E 3

1. Открой ChatGPT (Plus/Pro)
2. Скопируй prompt из нужного кадра
3. Скажи «Сгенерируй это в DALL-E 3, aspect ratio 1:1, ultra-realistic»
4. Сохрани все 4 картинки в `~/Desktop/favorit-product-landing/assets/hero/`:
   - `process-01-raw.png`
   - `process-02-cutting.png`
   - `process-03-packaging.png`
   - `process-04-shipping.png`

### Вариант C: Midjourney v6 в Discord

1. Открой бот в любом канале
2. Введи `/imagine prompt:` + skip правый prompt варианта
3. Дождись результата (~ 1 мин)
4. Кликни U1/U2/U3/U4 → upscale → сохрани

### Вариант D: Все 4 за один раз через ChatGPT

Скажи в ChatGPT:

> «Сгенерируй мне 4 кинематографических изображения 1:1 в едином стиле premium B2B documentary. Стиль: ARRI Alexa + Cooke 50mm, Kodak Vision3 500T color grade, deep navy #11204a + ice white #f0f3f8, без людей в кадре. Каждое изображение под отдельный этап: 1) сырьё (целая рыба на стали), 2) разделка (филе + нож), 3) упаковка (vacuum pack), 4) отгрузка (склад с фурой). Все 4 — одна визуальная серия.»

ChatGPT сделает 4 кадра за 4 запроса.

---

## 🎨 ПОСЛЕ ГЕНЕРАЦИИ

Скажи мне «**сгенерил 4 кадра**» — я:

1. Найду их в `~/Downloads/` или `~/Desktop/`
2. Сожму в WebP (~150-200 КБ каждый)
3. Заменю в `index.html` `process-cell-img` на новые пути
4. Проверю как смотрится в браузере

Или сам положи их сюда:
- `~/Desktop/favorit-product-landing/assets/hero/process-01-raw.png`
- `~/Desktop/favorit-product-landing/assets/hero/process-02-cutting.png`
- `~/Desktop/favorit-product-landing/assets/hero/process-03-packaging.png`
- `~/Desktop/favorit-product-landing/assets/hero/process-04-shipping.png`

И сожми (опционально):
```bash
cd ~/Desktop/favorit-product-landing/assets/hero
for f in process-*.png; do
    convert "$f" -quality 88 -resize 1024x1024 "${f%.png}.webp"
done
```

---

## ✨ БОНУС: ОПТИМИЗАЦИЯ ПОД KLING

Все 4 кадра можно потом оживить в Kling Image-to-Video если хочется live-фон. Анимации тонкие:
- **Сырьё:** медленный pan от центра, лёгкий пар
- **Разделка:** капля воды стекает по фолюлу, нож едва заметно сдвигается
- **Упаковка:** subtle reflection shimmer на vacuum film
- **Отгрузка:** медленный zoom-in вглубь aisle, частицы пыли в луче света

Но это уже бонус. Статичные cinematic кадры тоже отлично работают.
