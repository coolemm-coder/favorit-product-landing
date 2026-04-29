#!/bin/bash
# Deploy скрипт для Фаворит-Продукт лендинга
# Запуск: bash deploy.sh
#
# Что делает:
# 1. Проверяет состояние git
# 2. Делает git add + commit + push в main
# 3. Vercel автоматически подхватывает изменения и деплоит
# 4. Показывает итоговую URL

set -e
cd "$(dirname "$0")"

echo "🚀 Deploy Фаворит-Продукт лендинг → Vercel"
echo ""

# 1. Проверка
echo "📋 Текущее состояние git:"
git status --short | head -20
echo ""

# 2. Размер коммита
ASSETS_SIZE=$(du -sh assets/ 2>/dev/null | cut -f1)
echo "📦 Размер assets/: $ASSETS_SIZE"

# 3. Коммит
echo ""
echo "📝 Коммит изменений..."
git add -A
git commit -m "feat: полная переделка лендинга

- Hero: премиум-видео Kling, badge, gradient CTA, risk-reversal плашка
- Trust-marquee с цифрами и сертификатами
- Каталог 6 категорий с правильными фото
- Галерея 18 фото — свёрнутая с lazy-load + табы + lightbox
- gallery.html — отдельная страница с 40 фото и табами
- О предприятии: process-grid 4 этапа цикла с cinematic-кадрами от Codex
- Quote: B2B-фокус (скорость отгрузки + документы ЕАЭС)
- 6 преимуществ + СТМ-блок с 4 этапами + 4 преимуществами
- Карта Leaflet с 4 точками складов (Смоленск + 3 МО)
- 5 сертификатов + 11 партнёров (РБ + РФ)
- FAQ × 8 вопросов в аккордеоне
- Контакты: форма из 2 полей (опциональные в details)
- Footer 4-колоночный
- Mobile sticky CTA с телефоном
- Schema.org × 4 (Org + LocalBusiness + Product + FAQPage)
- 9 cinematic-кадров от Codex AI в едином стиле navy/coral
- Counter-анимация stats, hover-эффекты, grain-текстура
- Copywriting B2B (Outcome + Specificity + Authority)
- Telephone в шапке + лого SVG
- Премиум design system (shadows, gradients, ease-out)" 2>&1 || echo "(нет новых изменений)"

# 4. Push
echo ""
echo "🌐 Push в GitHub..."
git push origin main 2>&1 | tail -5

# 5. Vercel auto-deploy
echo ""
echo "✅ Готово! Vercel автоматически подхватит изменения."
echo ""
echo "📍 Где смотреть:"
echo "   • Vercel Dashboard: https://vercel.com/landingpro/favorit-product-landing"
echo "   • GitHub: https://github.com/coolemm-coder/favorit-product-landing"
echo ""
echo "⏱  Деплой займёт ~30-60 секунд. Vercel пришлёт preview-URL в Dashboard или email."
