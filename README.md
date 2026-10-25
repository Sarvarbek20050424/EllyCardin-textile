# Ellycardin Tekstil — sayt

Ishga tushirish: `index.html` ni ikki marta bosib oching (server shart emas) yoki papkani istalgan statik hostingga yuklang.

## Fayllar
- `index.html` — sahifa tuzilmasi
- `css/styles.css` — dizayn
- `js/config.js` — kontaktlar, rekvizitlar, bayroqlar (`index.html` da app.js dan OLDIN ulangan bo‘lishi shart)
- `js/app.js` — tillar, animatsiyalar, forma, slayder
- `assets/logo-full.png`, `assets/logo-mark.png` — logotip (shaffof)

## Qo‘shishingiz kerak (ixtiyoriy, bo‘lmasa ham sayt ishlaydi)
- `assets/hero.mp4` va `assets/hero.webm` — orqa fon videosi (15-30 s, ovozsiz). `assets/hero-poster.jpg` ixtiyoriy.
- `assets/products/interlok.jpg`, `rib.jpg`, `kulirka.jpg`, `fleece.jpg`, `pike.jpg`, `footer.jpg` — mahsulot rasmlari. Nomlar va matnlar `js/app.js` ichidagi `PRODUCTS` ro‘yxatida (hozircha NAMUNA).

## Bayroqlar (`js/config.js`)
- `showRouteCountries` — "Xitoy / Turkiya" yozuvlarini ko‘rsatish (egasi tasdiqlagandan keyin)
- `showTeam` — "Jamoa" bo‘limini ko‘rsatish (tasdiqlangandan keyin; matnlarni avval tekshiring)

## Eslatma
GSAP/ScrollTrigger/Embla CDN dan yuklanadi. Internet bo‘lmasa sahifa baribir to‘liq o‘qiladi, ip animatsiyalari tayyor holda ko‘rinadi.

## Yer shari ("Mato yo‘li")
Globus oltin ip (meridian va parallellar) bilan chiziladi, Quvasoy nuqtasi markazda. Kontinentlarni ko‘rsatish uchun `index.html` da `app.js` dan oldin `window.LAND_DOTS = [[lat, lon], ...]` massivini beruvchi skript ulang (quruqlik nuqtalari). Xitoy va Turkiya nuqtalari va iplari faqat `CONFIG.showRouteCountries = true` bo‘lganda chiqadi.
# Ellycardin Tekstil — sayt

Ishga tushirish: `index.html` ni ikki marta bosib oching (server shart emas) yoki papkani istalgan statik hostingga yuklang.

## Fayllar
- `index.html` — sahifa tuzilmasi
- `css/styles.css` — dizayn
- `js/config.js` — kontaktlar, rekvizitlar, bayroqlar (`index.html` da app.js dan OLDIN ulangan bo‘lishi shart)
- `js/app.js` — tillar, animatsiyalar, forma, slayder
- `assets/logo-full.png`, `assets/logo-mark.png` — logotip (shaffof)

## Qo‘shishingiz kerak (ixtiyoriy, bo‘lmasa ham sayt ishlaydi)
- `assets/hero.mp4` va `assets/hero.webm` — orqa fon videosi (15-30 s, ovozsiz). `assets/hero-poster.jpg` ixtiyoriy.
- `assets/products/interlok.jpg`, `rib.jpg`, `kulirka.jpg`, `fleece.jpg`, `pike.jpg`, `footer.jpg` — mahsulot rasmlari. Nomlar va matnlar `js/app.js` ichidagi `PRODUCTS` ro‘yxatida (hozircha NAMUNA).

## Bayroqlar (`js/config.js`)
- `showRouteCountries` — "Xitoy / Turkiya" yozuvlarini ko‘rsatish (egasi tasdiqlagandan keyin)
- `showTeam` — "Jamoa" bo‘limini ko‘rsatish (tasdiqlangandan keyin; matnlarni avval tekshiring)

## Eslatma
GSAP/ScrollTrigger/Embla CDN dan yuklanadi. Internet bo‘lmasa sahifa baribir to‘liq o‘qiladi, ip animatsiyalari tayyor holda ko‘rinadi.

## Yer shari ("Mato yo‘li")
Globus oltin ip (meridian va parallellar) bilan chiziladi, Quvasoy nuqtasi markazda. Kontinentlarni ko‘rsatish uchun `index.html` da `app.js` dan oldin `window.LAND_DOTS = [[lat, lon], ...]` massivini beruvchi skript ulang (quruqlik nuqtalari). Xitoy va Turkiya nuqtalari va iplari faqat `CONFIG.showRouteCountries = true` bo‘lganda chiqadi.
