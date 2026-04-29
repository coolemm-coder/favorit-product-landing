# Промпты для Kling AI / Codex GPT-5.5

**Цель:** премиальное hero-видео в стиле Apple / Diana's Seafood / Bremor 2023.
**Длина:** 6-10 секунд, loop.
**Размер:** 1920×1080 (16:9), будет cover-fit на 100vh hero.

---

## Этап 1: Сгенерировать картинку (GPT-5.5 / Midjourney / Nano-Banana)

Используй один из этих промптов для статичной картинки, которую потом оживляем в Kling.

### Промпт A — главный (рыба + лёд, dark cinematic)
```
Premium cinematic close-up of fresh raw fish fillet on ice cubes, deep blue
underwater lighting, ice crystals glistening, water droplets, dark moody
ocean blue background (#11204a) with subtle gradient, 16:9 wide composition,
shallow depth of field, fish in left third of frame, negative space on right
for text overlay, professional food photography, hasselblad medium format,
muted desaturated palette, hint of red accent (sashimi pink fillet),
ultra-detailed texture, 4K, no text, no logos
```

### Промпт B — производство (industrial cinematic)
```
Slow motion close-up of fresh fish fillets sliding down stainless steel
conveyor belt in clean modern fish processing factory, soft factory lighting
with cool blue tones, blurred white-coated worker in background, premium
B2B documentary aesthetic, dark navy color grade #11204a base, focus on
ice and fish, no faces visible, 16:9 cinematic, depth of field, Sony FX9
look, 24fps motion blur
```

### Промпт C — целая рыба (премиум каталог)
```
Hero shot of single whole frozen cod fish elegantly placed on dark slate,
cracked ice scattered around, single dramatic side-lighting from upper left,
deep ocean-blue background gradient with subtle bokeh particles, premium
product photography style of Apple keynote, 16:9 cinematic crop, fish in
left two-thirds, breathing space on right, photorealistic 4K, color palette
navy blue + ice white + subtle red accent on fish belly
```

---

## Этап 2: Оживить в Kling AI

Загрузить картинку из этапа 1 в Kling, использовать **Image-to-Video**.

### Kling-промпт (для всех вариантов):
```
Subtle cinematic motion: gentle ice crystals slowly drifting down,
soft particles floating in deep blue water, very slow zoom-in
(0.5x to 0.6x scale over 6 seconds), barely-noticeable water surface
ripple in background, slight light shimmer on fish texture. NO scene
change, NO camera shake, NO sudden movement. Premium calm meditative
loop-able motion. Atmosphere: deep ocean stillness.
```

### Настройки Kling
- **Duration:** 6 sec (можно 10s pro)
- **Mode:** Standard или Pro (если есть)
- **Camera:** Static + Zoom-In
- **Motion strength:** 0.3–0.5 (минимальная — premium look)
- **Negative prompt:** «text, watermark, logo, sudden movement, scene change, blur, low quality»

---

## Этап 3: Сохранить и подключить

После генерации:

```bash
# Сохрани видео сюда:
~/Desktop/favorit-product-landing/assets/hero/hero.mp4

# Сжать в WebM (для лучшей производительности):
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 -an hero.webm

# Или сжать MP4 (если webm не нужен):
ffmpeg -i hero.mp4 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart hero-compressed.mp4
mv hero-compressed.mp4 hero.mp4
```

**Важно:**
- `-an` убирает звук (видео должно быть без аудио — он не играет в браузере без user-gesture)
- `-movflags +faststart` — для быстрого старта на вебе
- Целевой размер файла: **3–8 МБ для MP4** (будет грузиться 1-2 сек на 4G)

После сохранения hero.mp4 в `assets/hero/` — он автоматически подхватится в `<video>` теге в hero.

---

## Альтернатива: Coverr / Pexels (готовые видео)

Если генерация занимает время, можно временно использовать стоковое видео:
- https://coverr.co — поиск «fish», «factory», «ocean»
- https://pexels.com/videos — поиск «frozen fish», «seafood», «water bubbles»

Скачать, обрезать до 8-10 сек, сохранить как `assets/hero/hero.mp4`.

---

## Текущее состояние

Сейчас в hero подключён `<video src="assets/hero/hero.mp4">` с poster-кадром
(фото производства из `assets/photos/iblock/7a4/`). Если видео нет —
показывается фон `assets/photos/iblock/7a4/` с opacity 0.32 и dark gradient.

Этого достаточно для запуска лендинга. Видео — premium-апгрейд, который можно добавить позже.
