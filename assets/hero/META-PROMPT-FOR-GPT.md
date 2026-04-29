# META-промпт для GPT-5.5 / ChatGPT (генерация Hero-картинки)

**Что это:** скопируй текст ниже и вставь в свой GPT. Он сгенерирует **3 идеальных промпта** для DALL-E / GPT-image-1 / Midjourney под hero-картинку Фаворит-Продукт. Картинку загружаешь в Kling и оживляешь через Image-to-Video.

**Методология:** построено по скиллам `nano-banana` и `claude-seo/seo-image-gen` из LandingFactory. Использует **6-Component Reasoning Brief** (Subject / Action / Context / Composition / Lighting / Style) и **Cinema domain mode** для премиум-эффекта.

---

## КОПИРУЙ ВСЁ НИЖЕ ↓↓↓

Ты — арт-директор премиального брендингового агентства уровня JKR / Pearlfisher / Wedge. Сгенерируй 3 promt'а для image-генератора (DALL-E 3 / GPT-image-1 / Midjourney v6) под hero-картинку B2B-лендинга.

**Методология:** используй **6-Component Reasoning Brief** — каждый prompt должен содержать все 6 компонентов в виде natural narrative prose (не списки через запятую). Domain mode: **Cinema**.

---

### Бизнес-контекст

ООО «Фаворит-Продукт» (Смоленск, Россия). Рыбоперерабатывающий завод с 2009 года. 250 тонн филе/месяц. Свой розничный бренд «Рыбный год» в сетях Соседи, ГИППО, ВкусВилл, SPAR. №1 в ЦФО по экспорту, удостоверение №55L на экспорт в ЕС. Сертификаты HACCP, FSSC 22000, MSC, SEDEX. Целевая аудитория: B2B-закупщики розничных сетей и дистрибьюторов в Беларуси и России. Tone бренда: премиум, авторитетно, спокойно — как Apple, не как реклама.

---

### Эталоны для подражания

- **Apple keynote** — драматичный свет, чистая композиция, negative space
- **Diana's Seafood (Wedge, Dieline 2025 winner)** — navy palette, custom illustration, bold
- **Bremor 2023 ребрендинг** — deep ocean blue + minimalism
- **Stripe.com hero** — gradient depth, premium tech
- **Linear.app** — dark mode, минимализм

---

### Технические требования

- **Aspect ratio:** 16:9 cinematic (1920×1080)
- **Resolution target:** 2K
- **Color palette:** deep ocean navy `#11204a` доминирует (60-70%), ice white `#f0f3f8` акцент (20%), subtle red `#c92030` подсветка (10%)
- **Composition:** negative space на левой трети — туда ляжет H1 текст
- **Без текста, без логотипов, без людей в кадре** (для нейтральности)
- **Cinema domain mode:** real camera specs (Hasselblad H6D-100c, Phase One IQ4, ARRI Alexa Mini LF), real film stocks (Kodak Vision3 500T, Vision3 250D), real lenses (Cooke S7/i, Zeiss Supreme Prime)
- **Movement potential:** статичная композиция с потенциалом для тонкой Kling-анимации (плавающие частицы льда, медленный zoom-in 0.5x→0.6x, light shimmer)

---

### КАК ПИСАТЬ КАЖДЫЙ ПРОМПТ

Для каждого варианта дай мне prompt из **6 компонентов** в формате narrative prose:

1. **Subject** — главный объект с физической специфичностью (текстура, состояние, материал)
2. **Action** — что происходит / state of being (движение, поза, gesture)
3. **Context** — окружение, время, пространство
4. **Composition** — camera angle, shot type, framing, depth of field
5. **Lighting** — источник, качество, направление, цвет, тени (Rembrandt / chiaroscuro / butterfly / rim)
6. **Style** — camera + lens + film stock + colour grading reference (Kodak Vision3 500T, ARRI Alexa, Hasselblad medium format)

**ВАЖНО:** Gemini НЕ поддерживает negative prompts. Используй positive framing:
- ❌ "no people" → ✅ "empty, deserted, uninhabited"
- ❌ "no text" → ✅ "clean, uncluttered, text-free, smooth surfaces"
- ❌ "not blurry" → ✅ "tack-sharp detail, in-focus across the frame"

Не используй keyword stuffing типа "8K masterpiece ultra-detailed". Это не помогает. Только "ultra-realistic, high resolution" в конце.

---

### Дай мне 3 варианта

#### Вариант A — Product-Hero (рыба/филе как главный объект)

**Subject:** премиальное филе или стейк рыбы (треска, судак или форель — ты выбираешь что наиболее cinematic)
**Mood:** sashimi-grade premium quality, ice-cold freshness
**Композиция:** объект справа или по центру, левая треть — negative space для H1

#### Вариант B — Industrial-Hero (производство без лиц)

**Subject:** конвейер из нержавеющей стали с филе, факторное освещение
**Mood:** B2B documentary, industrial premium (как Bremor / Stripe)
**Композиция:** wide-establishing shot, depth of field, без лиц (uninhabited factory floor)

#### Вариант C — Abstract-Hero (вода / лёд / свет)

**Subject:** ice crystals, water droplets, light shafts через тёмно-синюю воду
**Mood:** meditative, deep ocean stillness, premium brand abstraction
**Композиция:** macro photography aesthetic, частицы плавают в кадре

---

### ФОРМАТ ОТВЕТА для каждого варианта:

```markdown
## Вариант A — [название]

### Полный prompt (DALL-E 3 / GPT-image-1):
> [200-250 слов natural narrative prose со всеми 6 компонентами]

### Midjourney v6 версия:
> [тот же prompt + параметры --ar 16:9 --v 6 --style raw --stylize 250]

### Объяснение на русском:
- **Subject:** [что описано и зачем]
- **Action:** [почему статика / тонкое движение]
- **Context:** [настроение через окружение]
- **Composition:** [где negative space, depth, camera angle и почему]
- **Lighting:** [тип освещения + почему он премиум]
- **Style:** [камера + плёнка + colour grading + кто референс]

### Kling Image-to-Video подсказка:
> [40-80 слов: какое тонкое движение задать в Kling. Например: "Subtle drift of ice crystals down at 0.3 strength, very slow zoom-in from 0.5x to 0.6x over 6 seconds, no scene change, no camera shake. Atmosphere: deep ocean stillness."]

### Negative prompt (для Midjourney):
> [exclusions positive-framed: "open clearing, deserted, text-free, sharp focus, etc."]
```

---

### ОГРАНИЧЕНИЯ КАЧЕСТВА

- Каждый prompt 200-250 слов — не больше, не меньше
- Narrative prose, не списки через запятую
- Реальные камеры и плёнки (Hasselblad H6D, Phase One IQ4, ARRI Alexa, Kodak Portra 400, Vision3 500T)
- Реальные lighting setup названия (Rembrandt, chiaroscuro, butterfly, split, rim)
- Без поэтических преувеличений ("breathtaking", "masterpiece") — будь конкретным
- Объяснение на русском короткое и техническое — не лей воду

Думай как настоящий креативный директор. Каждое слово в prompt должно работать на финальный кадр.

## КОПИРУЙ ВСЁ ВЫШЕ ↑↑↑

---

## Что делать дальше

1. Скопируй блок между `↓↓↓` и `↑↑↑`
2. Вставь в ChatGPT (GPT-5/Codex Pro) или Claude
3. GPT выдаст 3 готовых промпта по 6-component методологии
4. Выбери вариант → сгенерь картинку:
   - **DALL-E 3** через ChatGPT (Plus/Pro) — самое простое
   - **Midjourney v6** через Discord — лучшее качество
   - **GPT-image-1** через API — для batch-генерации
   - **Gemini 3 Pro / Nano-Banana** через `nano-banana "..."` если установлено
5. Загрузи картинку в **Kling AI** → Image-to-Video с подсказкой из ответа GPT
6. Скачай видео → переименуй в `hero.mp4` → положи в `/Users/admin/Desktop/favorit-product-landing/assets/hero/hero.mp4`
7. Перезагрузи лендинг — видео автоматически подхватится

---

## ffmpeg-команды для оптимизации видео

```bash
# Сжать MP4 (целевой размер 3-8 МБ для веба)
ffmpeg -i hero-original.mp4 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart hero.mp4

# Создать WebM (для лучшей производительности)
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 -an hero.webm
```

`-an` убирает аудио (видео всё равно играет без звука в браузере без user-gesture).

---

## Дополнительно: использовать nano-banana CLI напрямую

Если у тебя установлен `nano-banana` CLI (Gemini 3.1 Flash):

```bash
# Generate hero image directly
nano-banana "ваш-prompt-из-варианта-A" -s 2K -a 16:9 -o favorit-hero-A --model pro

# Pro model для максимального качества
nano-banana "prompt" --model pro -s 2K -a 16:9 -o hero-final
```

Установка: `git clone https://github.com/kingbootoshi/nano-banana-2-skill.git ~/tools/nano-banana-2 && cd ~/tools/nano-banana-2 && bun install && bun link`. Нужен Gemini API key из https://aistudio.google.com/apikey.

---

## Что я применил из скиллов LandingFactory

✅ **6-Component Reasoning Brief** (Subject / Action / Context / Composition / Lighting / Style) — Cinema domain mode
✅ **Real camera specs** — Hasselblad H6D-100c, Phase One IQ4, ARRI Alexa
✅ **Real film stocks** — Kodak Vision3 500T, Vision3 250D
✅ **Real lighting setups** — Rembrandt, chiaroscuro, butterfly
✅ **Positive framing** вместо negative prompts (Gemini-совместимость)
✅ **No keyword stuffing** — narrative prose, не tag-lists
✅ **Aspect ratio set отдельно** — Gemini требует `set_aspect_ratio`, MJ через `--ar 16:9`
✅ **2K resolution** для blog-hero preset (по seo-image-presets)
✅ **Domain mode: Cinema** — драматичный свет, depth, negative space (не Product mode)
✅ **Visceral specificity** — описывать что камера видит, не абстракции
