# Kling Image-to-Video — финальный промпт под favorit hero-poster

**Картинка:** `hero-poster.png` (2.1 МБ, 1920×1080)
**Тип:** Abstract-Hero (вариант C)
**Что на картинке:** кристаллы льда внизу справа на тёмно-синем фоне, луч света сверху-справа, тонкий красный акцент в центре кристаллов, частицы пыли в воздухе, левая часть — глубокий navy

---

## 🎬 Шаги в Kling AI

### 1. Открыть Kling
- https://klingai.com — главная
- Logged in → меню **AI Video** → **Image to Video**

### 2. Загрузить картинку
- Перетащить `hero-poster.png` (либо `~/Desktop/фвв .png`)
- Aspect ratio определится автоматически (16:9)

### 3. Настройки

| Параметр | Значение |
|----------|----------|
| **Mode** | `Pro` (если подписка), иначе `Standard` |
| **Version** | Kling 1.6 / 2.0 / 2.1 (новее = лучше) |
| **Duration** | `5 sec` (можно `10 sec` если хватает кредитов) |
| **Camera Movement** | `Static` |
| **Motion Strength** | `0.3` (минимальная для премиум) |
| **CFG Scale** | `0.5` (если есть слайдер) |

### 4. Motion Prompt (вставить в Kling)

```
Subtle cinematic motion: tiny ice particles and dust slowly drifting
through deep blue atmosphere from top-right to bottom-left, very faint
shimmer of crystalline reflections on ice shards in lower right, soft
volumetric light shaft pulsing gently from upper right corner with
barely-noticeable intensity variation, almost imperceptible camera
zoom-in from 1.0 to 1.04 across 5 seconds. The ice crystals remain
perfectly still — only ambient particles, light shimmer, and dust move.
Static camera position. Atmosphere: meditative deep ocean stillness,
premium brand abstraction, calm cinematic loop.
```

### 5. Negative prompt (если поле есть)

```
sudden movement, scene change, camera shake, morphing crystals, melting
ice, dripping water, people, faces, hands, text, watermark, logo,
distortion, low quality, cartoon, animated style, blur, double exposure
```

### 6. Generate → подождать (1-4 мин)

### 7. Если результат не нравится

- **Слишком много движения** → уменьши Motion Strength до 0.2
- **Кристаллы морфируют** → пропиши «crystals stay perfectly still» жирнее в начале
- **Свет дёргается** → добавь «smooth subtle light pulsing, NO sudden flashes»
- **Появились артефакты** → Regenerate (новый seed)

### 8. Скачать MP4

Кнопка **Download** → файл попадёт в `~/Downloads/Kling_*.mp4` (или подобное)

---

## 📦 После скачивания

Скажи мне «**скачал видео**» — я:
1. Найду в Downloads и перенесу в `assets/hero/hero.mp4`
2. Сожму через ffmpeg до 3-5 МБ для веба
3. Создам WebM-вариант (~2 МБ для современных браузеров)
4. Подключу в `<video>` теге как priority source
5. Проверю как лендинг отображается с видео

Или сам:
```bash
cd ~/Desktop/favorit-product-landing
ffmpeg -i ~/Downloads/Kling_*.mp4 \
  -c:v libx264 -crf 26 -preset slow -an -movflags +faststart \
  -vf "scale=1920:1080" \
  assets/hero/hero.mp4
```

---

## ✅ Что уже сделано на лендинге

- ✅ Картинка скопирована: `assets/hero/hero-poster.png` (2.1 МБ)
- ✅ Оптимизированы версии: `hero-poster.webp` (176 КБ) + `hero-poster.jpg` (220 КБ)
- ✅ Подключена как `background-image` в `.hero-bg` (показывается всегда)
- ✅ Подключена как `poster` в `<video>` теге (показывается до загрузки видео)
- ✅ Заменён `og:image` на новый кадр (для шаринга в соцсетях)
- ✅ Поднята opacity hero-bg с 0.32 до 0.85 (картинка теперь в полную силу, не блёкло)

Лендинг уже выглядит премиально с этой картинкой. Видео — последний штрих для оживления.

---

## 💡 Альтернативные варианты Kling-промпта

Если хочется чуть более динамичный эффект (но всё ещё premium):

### Версия Б — Light shaft акцент

```
Cinematic atmosphere: a single soft volumetric light shaft slowly
sweeping from upper-right corner downward across 5 seconds, illuminating
ice crystal surfaces with shifting subtle highlights as it moves. Tiny
sparkling dust particles drift slowly through the light beam. Ice
crystals remain motionless. Deep blue background unchanged. Static camera.
Mood: serene cinematic premium loop.
```

### Версия В — Глубинный pull-in

```
Premium cinematic motion: slow continuous push-in toward the ice crystals
center across 5 seconds (1.0x to 1.08x scale), particles flowing past
camera from edges inward to suggest depth, soft light shimmer on crystal
facets revealing texture. Smooth motion, no shake, no scene change.
Deep ocean blue palette preserved. Mood: meditative descent into icy depths.
```

### Версия Г — Frozen breath

```
Atmospheric loop: faint frozen vapor breath rising from ice crystals
upward and dissipating, very slow tilt-shift particle drift, soft
chromatic aberration shimmer on crystal edges, ambient light from above
gently breathing in intensity (0.95 to 1.05 luminance). Crystals static.
Static camera. Premium calm cinematic atmosphere.
```

Выбирай свой вариант. **Версия А (основная)** — самая premium и сдержанная, подходит для B2B.
