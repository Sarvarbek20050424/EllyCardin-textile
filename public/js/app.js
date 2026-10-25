/**
 * ELLYCARDIN TEKSTIL — All JavaScript
 */

// ============================================
// I18N
// ============================================
var I18N = {
  uz: {
    'nav.about': 'Korxona', 'nav.activity': 'Faoliyat', 'nav.products': 'Mahsulot',
    'nav.inquiry': "So\u2018rov", 'nav.requisites': 'Rekvizitlar', 'nav.contact': 'Aloqa',
    'hero.lead': "Farg\u2018ona viloyati, Quvasoydagi tekstil korxonasi. Hamkorlik, shartnoma va to\u2018lov bo\u2018yicha barcha ma\u2018lumotlar shu sahifada.",
    'hero.cta1': "So\u2018rov yuborish", 'hero.cta2': 'Rekvizitlar',
    'about.title1': 'Korxona', 'about.title2': 'haqida',
    'about.p1': "\u201CELLYCARDIN TEKSTIL\u201D MChJ \u2014 Farg\u2018ona viloyati, Quvasoy shahrida faoliyat yurituvchi tekstil korxonasi. Biz mato ishlab chiqarish va tikuvchilik sohasida xizmat ko\u2018rsatamiz.",
    'about.p2': "Korxonamiz mahalliy va xorijiy hamkorlar bilan uzoq muddatli munosabatlarga asoslangan hamkorlikni qadrlaydi. Sifat, ishonchlilik va o\u2018z vaqtida yetkazib berish \u2014 bizning asosiy tamoyillarimiz.",
    'about.fact.name': 'Korxona nomi', 'about.fact.field': 'Faoliyat',
    'about.fact.fieldVal': "To\u2018qimachilik: mato va tikuvchilik",
    'about.fact.address': 'Manzil',
    'about.fact.addressVal': "O\u2018zbekiston, Farg\u2018ona viloyati, Quvasoy shahri, Mustaqillik ko\u2018chasi, 3-uy",
    'about.fact.tax': 'STIR',
    'route.title1': 'Mato', 'route.title2': "yo\u2018li", 'route.lead': "Mato va ip Quvasoydagi korxonamizda jamlanadi, tikuvchilik jarayonidan o\u2018tadi va tayyor mahsulotga aylanadi.", 'route.cta': "Hamkorlik uchun so\u2018rov →", 'reels.title1': "Sexlardan", 'reels.title2': "jonli kadrlar", 'reels.lead': "Tikuv va boshqa sexlarda har kuni nimalar bo\u2018layotganini qisqa videolarda ko\u2018ring.", 'reels.ig': "Instagramda kuzatish \u2197", 'reels.soon': "Tez orada", 'reels.count': "ta video", 'reels.close': "Yopish", 'reels.prev': "Oldingi", 'reels.next': "Keyingi",
    'route.nodeA': 'Mato', 'route.nodeB': 'Ip',
    'route.nodeAAlt': 'Xitoy', 'route.nodeBAlt': 'Turkiya',
    'process.title1': 'Ishlab', 'process.title2': 'chiqarish',
    'process.step1.title': 'Mato', 'process.step1.text': 'Sifatli xomashyo tanlash va tayyorlash.',
    'process.step2.title': 'Kesish va tikuv', 'process.step2.text': 'Aniq kesish va professional tikuv ishlari.',
    'process.step3.title': 'Sifat nazorati', 'process.step3.text': 'Har bir mahsulot sinchkovlik bilan tekshiriladi.',
    'process.step4.title': 'Tayyor mahsulot', 'process.step4.text': 'Qadoqlash va buyurtmachiga yetkazib berish.',
    'products.title1': "Bizning", 'products.title2': "mahsulotlar",
    'products.inquire': "Shu mahsulotga so\u2018rov", 'products.sample': 'namuna',
    'inquiry.title1': "So\u2018rov", 'inquiry.title2': 'yuborish',
    'inquiry.subtitle': "Savolingiz yoki buyurtmangiz bo\u2018lsa, formani to\u2018ldiring. Biz siz bilan tez orada bog\u2018lanamiz.",
    'inquiry.name': 'Ismingiz', 'inquiry.phone': 'Telefon raqamingiz',
    'inquiry.product': 'Mahsulotni tanlang', 'inquiry.productPlaceholder': "Mahsulotni tanlang...",
    'inquiry.productOther': "Boshqa", 'inquiry.quantity': 'Hajmi', 'inquiry.comment': 'Izoh',
    'inquiry.consent': "Shaxsiy ma\u2018lumotlarimni qayta ishlashga rozilik beraman",
    'inquiry.sendWA': 'WhatsApp orqali yuborish', 'inquiry.sendEmail': 'Pochta orqali',
    'inquiry.errName': "Iltimos, ismingizni kiriting",
    'inquiry.errPhone': "Noto\u2018g\u2018ri telefon raqami",
    'inquiry.errConsent': "Rozilik berishingiz kerak",
    'inquiry.successWA': "WhatsApp\u2018ga yo\u2018naltirilyapsiz...",
    'inquiry.successEmail': "Pochta mijozi ochilyapti...",
    'faq.title1': "Ko\u2018p", 'faq.title2': "beriladigan savollar",
    'faq.q1': "Korxona qayerda joylashgan?",
    'faq.a1': "Farg\u2018ona viloyati, Quvasoy shahri, Mustaqillik ko\u2018chasi, 3-uy.",
    'faq.q2': "To\u2018lov qanday amalga oshiriladi?",
    'faq.a2': "To\u2018lov bank o\u2018tkazmasi orqali amalga oshiriladi. Batafsil ma\u2018lumot uchun rekvizitlar bo\u2018limiga qarang yoki biz bilan bog\u2018laning.",
    'faq.q3': "Qanday bog\u2018lanish mumkin?",
    'faq.a3': "Telefon: +998 90 917 99 29 yoki +998 99 091 99 29 (WhatsApp, Telegram). E-mail: ellycardin.tekstil@mail.ru",
    'faq.q4': "Shartnoma qanday tuziladi?",
    'faq.a4': "Shartnoma tomonlarning kelishuviga asosan tuziladi. Batafsil ma\u2018lumot uchun biz bilan bog\u2018laning.",
    'faq.q5': "Bank rekvizitlarini qayerdan ko\u2018rish mumkin?",
    'faq.a5': "Bank rekvizitlari shu sahifaning \u201CRekvizitlar\u201D bo\u2018limida joylashgan.",
    'req.title1': "Bank", 'req.title2': "rekvizitlari",
    'req.company': 'Korxona nomi', 'req.taxId': 'STIR', 'req.account': 'Hisob raqami (USD)',
    'req.bank': 'Bank', 'req.bankCode': 'Bank kodi', 'req.swift': 'SWIFT', 'req.address': 'Manzil',
    'req.copy': 'Nusxa', 'req.copied': 'Nusxalandi!', 'req.downloadPdf': 'PDF yuklab olish',
    'contact.title1': 'Aloqa', 'contact.title2': "ma\u2018lumotlari",
    'contact.address': "O\u2018zbekiston, Farg\u2018ona viloyati, Quvasoy shahri, Mustaqillik ko\u2018chasi, 3-uy",
    'doc.title': "ELLYCARDIN TEKSTIL \u2014 To\u2018qimachilik korxonasi | Quvasoy, Farg\u2018ona",
    'doc.description': "ELLYCARDIN TEKSTIL MChJ \u2014 Farg\u2018ona viloyati, Quvasoy shahridagi tekstil korxonasi."
  },
  ru: {
    'nav.about': 'Компания', 'nav.activity': 'Деятельность', 'nav.products': 'Продукция',
    'nav.inquiry': 'Заявка', 'nav.requisites': 'Реквизиты', 'nav.contact': 'Контакты',
    'hero.lead': 'Текстильное предприятие в Кувасай, Ферганская область. Вся информация о сотрудничестве, договорах и оплате — на этой странице.',
    'hero.cta1': 'Оставить заявку', 'hero.cta2': 'Реквизиты',
    'about.title1': 'О', 'about.title2': 'компании',
    'about.p1': '«ELLYCARDIN TEKSTIL» ООО — текстильное предприятие в городе Кувасай, Ферганская область. Мы работаем в сфере производства тканей и пошива.',
    'about.p2': 'Наше предприятие ценит долгосрочное партнёрство, основанное на взаимном доверии. Качество, надёжность и своевременная доставка — наши основные принципы.',
    'about.fact.name': 'Название', 'about.fact.field': 'Деятельность',
    'about.fact.fieldVal': 'Текстиль: ткани и пошив',
    'about.fact.address': 'Адрес',
    'about.fact.addressVal': 'Узбекистан, Ферганская область, г. Кувасай, ул. Мустакиллик, д. 3',
    'about.fact.tax': 'ИНН',
    'route.title1': 'Путь', 'route.title2': 'ткани', 'route.lead': "Ткань и нить собираются на нашем предприятии в Кувасае, проходят пошив и становятся готовой продукцией.", 'route.cta': "Запрос на сотрудничество →", 'reels.title1': "Из цехов", 'reels.title2': "живые кадры", 'reels.lead': "Смотрите в коротких видео, что происходит в цехах каждый день.", 'reels.ig': "Смотреть в Instagram \u2197", 'reels.soon': "Скоро", 'reels.count': "видео", 'reels.close': "Закрыть", 'reels.prev': "Назад", 'reels.next': "Вперёд",
    'route.nodeA': 'Ткань', 'route.nodeB': 'Нить',
    'route.nodeAAlt': 'Китай', 'route.nodeBAlt': 'Турция',
    'process.title1': "Наше", 'process.title2': "производство",
    'process.step1.title': 'Ткань', 'process.step1.text': 'Отбор и подготовка качественного сырья.',
    'process.step2.title': 'Раскрой и пошив', 'process.step2.text': 'Точный раскрой и профессиональный пошив.',
    'process.step3.title': 'Контроль качества', 'process.step3.text': 'Каждое изделие тщательно проверяется.',
    'process.step4.title': 'Готовая продукция', 'process.step4.text': 'Упаковка и доставка заказчику.',
    'products.title1': "Наша", 'products.title2': "продукция",
    'products.inquire': 'Заявка на этот товар', 'products.sample': 'образец',
    'inquiry.title1': 'Оставить', 'inquiry.title2': 'заявку',
    'inquiry.subtitle': 'Если у вас есть вопрос или заказ, заполните форму. Мы свяжемся с вами в ближайшее время.',
    'inquiry.name': 'Ваше имя', 'inquiry.phone': 'Номер телефона',
    'inquiry.product': 'Выберите продукт', 'inquiry.productPlaceholder': 'Выберите продукт...',
    'inquiry.productOther': 'Другое', 'inquiry.quantity': 'Объём', 'inquiry.comment': 'Комментарий',
    'inquiry.consent': 'Согласен на обработку персональных данных',
    'inquiry.sendWA': 'Отправить через WhatsApp', 'inquiry.sendEmail': 'По почте',
    'inquiry.errName': 'Пожалуйста, введите имя', 'inquiry.errPhone': 'Неверный номер телефона',
    'inquiry.errConsent': 'Необходимо согласие',
    'inquiry.successWA': 'Перенаправление в WhatsApp...', 'inquiry.successEmail': 'Открытие почтового клиента...',
    'faq.title1': 'Часто', 'faq.title2': 'задаваемые вопросы',
    'faq.q1': 'Где находится предприятие?',
    'faq.a1': 'Ферганская область, г. Кувасай, ул. Мустакиллик, д. 3.',
    'faq.q2': 'Как осуществляется оплата?',
    'faq.a2': 'Оплата производится банковским переводом. Подробности — в разделе «Реквизиты» или свяжитесь с нами.',
    'faq.q3': 'Как связаться?',
    'faq.a3': 'Телефон: +998 90 917 99 29 или +998 99 091 99 29 (WhatsApp, Telegram). E-mail: ellycardin.tekstil@mail.ru',
    'faq.q4': 'Как заключается договор?',
    'faq.a4': 'Договор заключается по соглашению сторон. Свяжитесь с нами для подробностей.',
    'faq.q5': 'Где посмотреть банковские реквизиты?',
    'faq.a5': 'Банковские реквизиты находятся в разделе «Реквизиты» на этой странице.',
    'req.title1': "Банковские", 'req.title2': "реквизиты",
    'req.company': 'Название', 'req.taxId': 'ИНН', 'req.account': 'Счёт (USD)',
    'req.bank': 'Банк', 'req.bankCode': 'Код банка', 'req.swift': 'SWIFT', 'req.address': 'Адрес',
    'req.copy': 'Копировать', 'req.copied': 'Скопировано!', 'req.downloadPdf': 'Скачать PDF',
    'contact.title1': "Наши", 'contact.title2': "контакты",
    'contact.address': 'Узбекистан, Ферганская область, г. Кувасай, ул. Мустакиллик, д. 3',
    'doc.title': 'ELLYCARDIN TEKSTIL — Текстильное предприятие | Кувасай, Фергана',
    'doc.description': '«ELLYCARDIN TEKSTIL» ООО — текстильное предприятие в Ферганской области.'
  },
  en: {
    'nav.about': 'Company', 'nav.activity': 'Activity', 'nav.products': 'Products',
    'nav.inquiry': 'Inquiry', 'nav.requisites': 'Requisites', 'nav.contact': 'Contact',
    'hero.lead': 'A textile enterprise in Kuvasay, Fergana region. All information about cooperation, contracts, and payment is on this page.',
    'hero.cta1': 'Send Inquiry', 'hero.cta2': 'Requisites',
    'about.title1': 'About the', 'about.title2': 'company',
    'about.p1': '"ELLYCARDIN TEKSTIL" FC LLC is a textile enterprise located in Kuvasay, Fergana region. We work in fabric production and sewing.',
    'about.p2': 'Our enterprise values long-term partnerships based on mutual trust. Quality, reliability, and timely delivery are our core principles.',
    'about.fact.name': 'Company name', 'about.fact.field': 'Activity',
    'about.fact.fieldVal': 'Textile: fabrics and sewing',
    'about.fact.address': 'Address',
    'about.fact.addressVal': 'Uzbekistan, Fergana region, Kuvasay city, Mustakillik street, house 3',
    'about.fact.tax': 'Tax ID',
    'route.title1': 'Fabric', 'route.title2': 'route', 'route.lead': "Fabric and thread come together at our company in Kuvasay, go through sewing and become finished products.", 'route.cta': "Send a partnership inquiry →", 'reels.title1': "Live shots", 'reels.title2': "from the workshops", 'reels.lead': "See in short videos what happens in our workshops every day.", 'reels.ig': "Follow on Instagram \u2197", 'reels.soon': "Coming soon", 'reels.count': "videos", 'reels.close': "Close", 'reels.prev': "Previous", 'reels.next': "Next",
    'route.nodeA': 'Fabric', 'route.nodeB': 'Thread',
    'route.nodeAAlt': 'China', 'route.nodeBAlt': 'Turkey',
    'process.title1': "How we", 'process.title2': "work",
    'process.step1.title': 'Fabric', 'process.step1.text': 'Selection and preparation of quality raw materials.',
    'process.step2.title': 'Cutting & Sewing', 'process.step2.text': 'Precise cutting and professional sewing.',
    'process.step3.title': 'Quality Control', 'process.step3.text': 'Every product is carefully inspected.',
    'process.step4.title': 'Finished Product', 'process.step4.text': 'Packaging and delivery to the customer.',
    'products.title1': "Our", 'products.title2': "products",
    'products.inquire': 'Inquire about this product', 'products.sample': 'sample',
    'inquiry.title1': 'Send', 'inquiry.title2': 'inquiry',
    'inquiry.subtitle': 'If you have a question or order, fill out the form. We will contact you shortly.',
    'inquiry.name': 'Your name', 'inquiry.phone': 'Phone number',
    'inquiry.product': 'Select product', 'inquiry.productPlaceholder': 'Select a product...',
    'inquiry.productOther': 'Other', 'inquiry.quantity': 'Quantity', 'inquiry.comment': 'Comment',
    'inquiry.consent': 'I agree to the processing of personal data',
    'inquiry.sendWA': 'Send via WhatsApp', 'inquiry.sendEmail': 'By email',
    'inquiry.errName': 'Please enter your name', 'inquiry.errPhone': 'Invalid phone number',
    'inquiry.errConsent': 'Consent is required',
    'inquiry.successWA': 'Redirecting to WhatsApp...', 'inquiry.successEmail': 'Opening mail client...',
    'faq.title1': 'Frequently', 'faq.title2': 'asked questions',
    'faq.q1': 'Where is the enterprise located?',
    'faq.a1': 'Fergana region, Kuvasay city, Mustakillik street, house 3.',
    'faq.q2': 'How is payment made?',
    'faq.a2': 'Payment is made via bank transfer. See the "Requisites" section or contact us for details.',
    'faq.q3': 'How to contact?',
    'faq.a3': 'Phone: +998 90 917 99 29 or +998 99 091 99 29 (WhatsApp, Telegram). Email: ellycardin.tekstil@mail.ru',
    'faq.q4': 'How is a contract made?',
    'faq.a4': 'A contract is made by mutual agreement. Contact us for details.',
    'faq.q5': 'Where to find bank details?',
    'faq.a5': 'Bank details are in the "Requisites" section of this page.',
    'req.title1': "Bank", 'req.title2': "details",
    'req.company': 'Company name', 'req.taxId': 'Tax ID', 'req.account': 'Account (USD)',
    'req.bank': 'Bank', 'req.bankCode': 'Bank code', 'req.swift': 'SWIFT', 'req.address': 'Address',
    'req.copy': 'Copy', 'req.copied': 'Copied!', 'req.downloadPdf': 'Download PDF',
    'contact.title1': 'Contact', 'contact.title2': 'information',
    'contact.address': 'Uzbekistan, Fergana region, Kuvasay city, Mustakillik street, house 3',
    'doc.title': 'ELLYCARDIN TEKSTIL — Textile Enterprise | Kuvasay, Fergana',
    'doc.description': '"ELLYCARDIN TEKSTIL" FC LLC — a textile enterprise in the Fergana region of Uzbekistan.'
  }
};

// Typographic apostrophes: o‘ g‘ in Uzbek, ’ everywhere else
function typo(s, lang) {
  if (typeof s !== 'string') return s;
  if (lang === 'uz') s = s.replace(/([oOgG])['’‘]/g, '$1\u2018');
  return s.replace(/'/g, '\u2019');
}

function t(key) {
  var lang = document.documentElement.lang || 'uz';
  var v = (I18N[lang] && I18N[lang][key]) || (I18N.uz && I18N.uz[key]) || key;
  return typo(v, lang);
}

function applyTranslations() {
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var key = el.getAttribute('data-i18n');
    var attr = el.getAttribute('data-i18n-attr');
    if (attr) { el.setAttribute(attr, t(key)); } else { el.textContent = t(key); }
  }
  var phoneInput = document.getElementById('inq-phone');
  if (phoneInput) phoneInput.placeholder = '+998';
  document.title = t('doc.title');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('doc.description'));
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t('doc.title'));
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t('doc.description'));
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'uz';
  document.documentElement.lang = lang;
  var btns = document.querySelectorAll('.lang-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === lang);
  }
  if (typeof CONFIG !== 'undefined') {
    var nodeA = CONFIG.showRouteCountries ? 'route.nodeAAlt' : 'route.nodeA';
    var nodeB = CONFIG.showRouteCountries ? 'route.nodeBAlt' : 'route.nodeB';
    var labels = document.querySelectorAll('.route-label');
    if (labels[0]) labels[0].textContent = t(nodeA);
    if (labels[1]) labels[1].textContent = t(nodeB);
  }
  applyTranslations();
  try { localStorage.setItem('ellycardin-lang', lang); } catch(e) {}
  if (window.ScrollTrigger && window.ScrollTrigger.refresh) {
    setTimeout(function() { window.ScrollTrigger.refresh(); }, 100);
  }
}

function initLanguage() {
  var lang = 'uz';
  var params = new URLSearchParams(window.location.search);
  if (params.get('lang') && I18N[params.get('lang')]) {
    lang = params.get('lang');
  } else {
    try {
      var saved = localStorage.getItem('ellycardin-lang');
      if (saved && I18N[saved]) lang = saved;
    } catch(e) {}
    if (lang === 'uz') {
      var browserLang = (navigator.language || '').slice(0, 2);
      if (I18N[browserLang]) lang = browserLang;
    }
  }
  setLanguage(lang);
}

// ============================================
// PRODUCTS
// ============================================
var PRODUCTS = [
  { id: 'interlok', image: './assets/products/interlok.jpg', title: { uz: 'Interlok', ru: 'Интерлок', en: 'Interlock' }, text: { uz: "Zich, silliq to'qima.", ru: 'Плотное гладкое полотно.', en: 'Dense, smooth fabric.' } },
  { id: 'rib', image: './assets/products/rib.jpg', title: { uz: 'Rib', ru: 'Риб', en: 'Rib' }, text: { uz: "Elastik, qirrali to'qima.", ru: 'Эластичное полотно в рубчик.', en: 'Elastic ribbed fabric.' } },
  { id: 'kulirka', image: './assets/products/kulirka.jpg', title: { uz: 'Kulirka', ru: 'Кулирка', en: 'Jersey' }, text: { uz: "Yengil, yupqa mato.", ru: 'Лёгкий, тонкий материал.', en: 'Light, thin fabric.' } },
  { id: 'fleece', image: './assets/products/fleece.jpg', title: { uz: 'Fleece', ru: 'Флис', en: 'Fleece' }, text: { uz: "Ichki tomoni yumshoq, issiq mato.", ru: 'Мягкий изнутри, тёплый материал.', en: 'Soft inside, warm fabric.' } },
  { id: 'pike', image: './assets/products/pike.jpg', title: { uz: 'Pike', ru: 'Пике', en: 'Pique' }, text: { uz: "Relyefli sirtli mato.", ru: 'Полотно с рельефной поверхностью.', en: 'Fabric with a textured surface.' } },
  { id: 'footer', image: './assets/products/footer.jpg', title: { uz: 'Footer', ru: 'Футер', en: 'Footer' }, text: { uz: "Mustahkam, zich mato.", ru: 'Прочный, плотный материал.', en: 'Durable, dense fabric.' } }
];

function getProductTitle(product) {
  var lang = document.documentElement.lang || 'uz';
  return typo((product.title && product.title[lang]) || product.title.uz || product.id, lang);
}

function getProductText(product) {
  var lang = document.documentElement.lang || 'uz';
  return typo((product.text && product.text[lang]) || product.text.uz || '', lang);
}

// ============================================
// MAIN APP
// ============================================
(function() {
  'use strict';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;
    if (reducedMotion) { loader.style.display = 'none'; return; }
    loader.addEventListener('click', function() { hideLoader(); });
    setTimeout(hideLoader, 1400);
    setTimeout(function() {
      if (loader && loader.parentNode) {
        loader.classList.add('hidden');
        setTimeout(function() { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 500);
      }
    }, 2500);
    function hideLoader() {
      if (!loader || loader.classList.contains('hidden')) return;
      loader.classList.add('hidden');
      setTimeout(function() { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 500);
    }
  }

  function initNav() {
    var burger = document.getElementById('nav-burger');
    var mobileMenu = document.getElementById('mobile-menu');
    var navLinks = document.querySelectorAll('.mobile-menu__nav a, .nav-links a');
    if (burger && mobileMenu) {
      burger.addEventListener('click', function() {
        var isOpen = mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open');
        burger.setAttribute('aria-expanded', !isOpen);
        mobileMenu.setAttribute('aria-hidden', isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      }
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
          burger.focus();
        }
      });
    }
    var btnTop = document.getElementById('btn-top');
    if (btnTop) {
      btnTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      });
    }
  }

  function initScrollProgress() {
    var fill = document.getElementById('scroll-progress-fill');
    var needle = document.getElementById('scroll-needle');
    if (!fill || !needle) return;
    function update() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      fill.style.width = progress + '%';
      needle.style.left = progress + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initLangSwitch() {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        if (lang) setLanguage(lang);
        renderProducts(); renderFAQ(); renderRequisites(); populateProductSelect(); renderReels();
      });
    }
  }

  function initThreads() {
    if (!window.gsap || !window.ScrollTrigger || reducedMotion) {
      // No animation library (or reduced motion): show every thread fully drawn
      var all = document.querySelectorAll('.section-thread path, .route-thread-line, .process-line-fill');
      for (var q = 0; q < all.length; q++) { all[q].style.strokeDashoffset = '0'; }
      var st = document.querySelectorAll('.process-step');
      for (var s = 0; s < st.length; s++) { st[s].classList.add('lit'); }
      return;
    }
    window.gsap.registerPlugin(window.ScrollTrigger);
    var threads = document.querySelectorAll('.section-thread path');
    for (var i = 0; i < threads.length; i++) {
      var section = threads[i].closest('.section, .hero');
      if (!section) continue;
      window.gsap.to(threads[i], { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: section, start: 'top 80%', end: 'bottom 20%', scrub: 1 } });
    }
    var routeLines = document.querySelectorAll('.route-thread-line');
    for (var j = 0; j < routeLines.length; j++) {
      window.gsap.to(routeLines[j], { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '#route', start: 'top 60%', end: 'bottom 40%', scrub: 1 } });
    }
    var processLine = document.querySelector('.process-line-fill');
    if (processLine) {
      window.gsap.to(processLine, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '#process', start: 'top 60%', end: 'bottom 40%', scrub: 1, onUpdate: function(self) {
        var steps = document.querySelectorAll('.process-step');
        var progress = self.progress;
        for (var k = 0; k < steps.length; k++) { if (progress > (k / steps.length)) { steps[k].classList.add('lit'); } }
      } } });
    }
  }

  var emblaApi = null;
  var autoplayActive = true;

  function renderProducts() {
    var container = document.getElementById('slider-container');
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < PRODUCTS.length; i++) {
      var p = PRODUCTS[i];
      var slide = document.createElement('div');
      slide.className = 'embla__slide';
      slide.innerHTML = '<div class="product-card" tabindex="0" data-product-id="' + p.id + '" role="button" aria-label="' + getProductTitle(p) + '"><div class="product-card__image"><img src="' + p.image + '" alt="' + getProductTitle(p) + '" loading="lazy" width="400" height="300" onerror="this.style.display=\'none\'"><div class="product-card__placeholder"><svg viewBox="0 0 100 100"><path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="rgba(194,165,107,0.4)" stroke-width="1"/><path d="M10,60 Q30,40 50,60 T90,60" fill="none" stroke="rgba(194,165,107,0.3)" stroke-width="0.8"/></svg></div><span class="product-card__tag">' + t('products.sample') + '</span></div><div class="product-card__info"><h3 class="product-card__title">' + getProductTitle(p) + '</h3><p class="product-card__text">' + getProductText(p) + '</p></div><div class="product-card__underline"></div></div>';
      container.appendChild(slide);
    }
    initEmbla();
  }

  function initEmbla() {
    if (!window.EmblaCarousel) return;
    var container = document.getElementById('slider-container');
    if (!container) return;
    if (emblaApi) { emblaApi.destroy(); emblaApi = null; }
    var opts = { loop: true, align: 'start' };
    emblaApi = window.EmblaCarousel(container, opts, []);
    var prevBtn = document.getElementById('slider-prev');
    var nextBtn = document.getElementById('slider-next');
    if (prevBtn) prevBtn.addEventListener('click', function() { emblaApi.scrollPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', function() { emblaApi.scrollNext(); });
    container.setAttribute('tabindex', '0');
    container.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') emblaApi.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi.scrollNext();
    });
    var cards = container.querySelectorAll('.product-card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function() { openLightbox(this.getAttribute('data-product-id')); });
      cards[i].addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(this.getAttribute('data-product-id')); }
      });
    }
  }

  var lightboxTrigger = null;
  function openLightbox(productId) {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    var product = null;
    for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].id === productId) { product = PRODUCTS[i]; break; } }
    if (!product) return;
    lightboxTrigger = document.activeElement;
    var titleEl = document.getElementById('lightbox-title');
    var textEl = document.getElementById('lightbox-text');
    var imageEl = document.getElementById('lightbox-image');
    if (titleEl) titleEl.textContent = getProductTitle(product);
    if (textEl) textEl.textContent = getProductText(product);
    if (imageEl) { imageEl.innerHTML = '<img src="' + product.image + '" alt="' + getProductTitle(product) + '" onerror="this.style.display=\'none\'">'; }
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var closeBtn = document.getElementById('lightbox-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lightboxTrigger) lightboxTrigger.focus();
  }

  function initLightbox() {
    var closeBtn = document.getElementById('lightbox-close');
    var overlay = document.getElementById('lightbox-overlay');
    var inquiryBtn = document.getElementById('lightbox-inquiry');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) overlay.addEventListener('click', closeLightbox);
    if (inquiryBtn) {
      inquiryBtn.addEventListener('click', function() {
        closeLightbox();
        var productSelect = document.getElementById('inq-product');
        if (productSelect) {
          var title = document.getElementById('lightbox-title');
          if (title) {
            var options = productSelect.options;
            for (var i = 0; i < options.length; i++) { if (options[i].text === title.textContent) { productSelect.selectedIndex = i; break; } }
          }
        }
        setTimeout(function() { var inquiry = document.getElementById('inquiry'); if (inquiry) inquiry.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }); }, 100);
      });
    }
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { var lightbox = document.getElementById('lightbox'); if (lightbox && lightbox.style.display !== 'none') closeLightbox(); }
    });
  }

  function renderFAQ() {
    var list = document.getElementById('faq-list');
    if (!list) return;
    var questions = ['faq.q1', 'faq.q2', 'faq.q3', 'faq.q4', 'faq.q5'];
    var answers = ['faq.a1', 'faq.a2', 'faq.a3', 'faq.a4', 'faq.a5'];
    list.innerHTML = '';
    for (var i = 0; i < questions.length; i++) {
      var details = document.createElement('details');
      details.className = 'faq-item';
      details.innerHTML = '<summary>' + t(questions[i]) + '</summary><div class="faq-item__answer">' + t(answers[i]) + '</div>';
      list.appendChild(details);
    }
  }

  function renderRequisites() {
    var tbody = document.getElementById('req-tbody');
    if (!tbody) return;
    var lang = document.documentElement.lang || 'uz';
    var rows = [
      { label: t('req.company'), value: CONFIG.legalName },
      { label: t('req.taxId'), value: CONFIG.taxId },
      { label: t('req.account'), value: CONFIG.bank.usdAccount },
      { label: t('req.bank'), value: CONFIG.bank.name + ', ' + (CONFIG.bank.city[lang] || CONFIG.bank.city.uz) },
      { label: t('req.bankCode'), value: CONFIG.bank.bankCode },
      { label: t('req.swift'), value: CONFIG.bank.swift },
      { label: t('req.address'), value: CONFIG.address[lang] || CONFIG.address.uz }
    ];
    tbody.innerHTML = '';
    var copyIcon = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1"/><path d="M2 9V2h7" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>';
    for (var i = 0; i < rows.length; i++) {
      var tr = document.createElement('tr');
      var th = document.createElement('th'); th.textContent = rows[i].label;
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(typo(rows[i].value, lang).replace(/"([^"]*)"/g, '\u201C$1\u201D')));
      var btn = document.createElement('button');
      btn.className = 'copy-btn'; btn.type = 'button';
      btn.setAttribute('data-copy', rows[i].value);
      btn.setAttribute('aria-label', t('req.copy') + ': ' + rows[i].label);
      btn.innerHTML = copyIcon + '<span>' + t('req.copy') + '</span>';
      td.appendChild(btn); tr.appendChild(th); tr.appendChild(td); tbody.appendChild(tr);
    }
    var copyBtns = tbody.querySelectorAll('.copy-btn');
    for (var j = 0; j < copyBtns.length; j++) { copyBtns[j].addEventListener('click', handleCopy); }
  }

  function handleCopy(e) {
    var btn = e.currentTarget;
    var text = btn.getAttribute('data-copy');
    var statusEl = document.getElementById('copy-status');
    function onSuccess() {
      var span = btn.querySelector('span');
      if (span) span.textContent = t('req.copied');
      if (statusEl) statusEl.textContent = t('req.copied');
      setTimeout(function() { if (span) span.textContent = t('req.copy'); if (statusEl) statusEl.textContent = ''; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function() { fallbackCopy(text); onSuccess(); });
    } else { fallbackCopy(text); onSuccess(); }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
  }

  function initPDF() {
    var btn = document.getElementById('btn-pdf');
    if (!btn) return;
    btn.addEventListener('click', function() { window.print(); });
  }

  function populateProductSelect() {
    var select = document.getElementById('inq-product');
    if (!select) return;
    var firstOption = select.options[0];
    var lastOption = select.querySelector('option[value="other"]');
    select.innerHTML = '';
    if (firstOption) { firstOption.textContent = t('inquiry.productPlaceholder'); select.appendChild(firstOption); }
    for (var i = 0; i < PRODUCTS.length; i++) {
      var opt = document.createElement('option');
      opt.value = PRODUCTS[i].id;
      opt.textContent = getProductTitle(PRODUCTS[i]);
      select.appendChild(opt);
    }
    if (lastOption) { lastOption.textContent = t('inquiry.productOther'); select.appendChild(lastOption); }
  }

  function initForm() {
    var phoneInput = document.getElementById('inq-phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        var val = e.target.value.replace(/[^\d+]/g, '');
        if (val.length > 0 && val[0] !== '+') val = '+' + val;
        if (val.length > 1 && val.slice(0, 2) !== '+9') val = '+998' + val.replace(/^\+?998?/, '');
        e.target.value = val.slice(0, 13);
      });
    }
    var btnWA = document.getElementById('btn-whatsapp');
    var btnEmail = document.getElementById('btn-email');
    if (btnWA) btnWA.addEventListener('click', function() { sendInquiry('whatsapp'); });
    if (btnEmail) btnEmail.addEventListener('click', function() { sendInquiry('email'); });
  }

  function sendInquiry(channel) {
    var hp = document.querySelector('.hp-field input');
    if (hp && hp.value) return;
    var name = document.getElementById('inq-name');
    var phone = document.getElementById('inq-phone');
    var consent = document.getElementById('inq-consent');
    var product = document.getElementById('inq-product');
    var quantity = document.getElementById('inq-quantity');
    var comment = document.getElementById('inq-comment');
    var status = document.getElementById('form-status');
    var valid = true;
    document.getElementById('err-name').textContent = '';
    document.getElementById('err-phone').textContent = '';
    document.getElementById('err-consent').textContent = '';
    if (!name || !name.value.trim()) { document.getElementById('err-name').textContent = t('inquiry.errName'); valid = false; }
    var phoneDigits = (phone ? phone.value : '').replace(/[^\d]/g, '');
    if (!phone || phoneDigits.length < 12) { document.getElementById('err-phone').textContent = t('inquiry.errPhone'); valid = false; }
    if (!consent || !consent.checked) { document.getElementById('err-consent').textContent = t('inquiry.errConsent'); valid = false; }
    if (!valid) return;
    var lang = document.documentElement.lang || 'uz';
    var productName = product && product.value && product.value !== 'other' ? getProductTitle(PRODUCTS.find(function(p) { return p.id === product.value; }) || PRODUCTS[0]) : (product ? product.value : '');
    var message = lang === 'uz' ? "So'rov:\nIsm: " + name.value + "\nTelefon: " + phone.value + "\nMahsulot: " + (productName || '—') + "\nHajmi: " + (quantity ? quantity.value || '—' : '—') + "\nIzoh: " + (comment ? comment.value || '—' : '—') : lang === 'ru' ? 'Заявка:\nИмя: ' + name.value + '\nТелефон: ' + phone.value + '\nПродукт: ' + (productName || '—') + '\nОбъём: ' + (quantity ? quantity.value || '—' : '—') + '\nКомментарий: ' + (comment ? comment.value || '—' : '—') : 'Inquiry:\nName: ' + name.value + '\nPhone: ' + phone.value + '\nProduct: ' + (productName || '—') + '\nQuantity: ' + (quantity ? quantity.value || '—' : '—') + '\nComment: ' + (comment ? comment.value || '—' : '—');
    if (status) { status.textContent = channel === 'whatsapp' ? t('inquiry.successWA') : t('inquiry.successEmail'); }
    if (channel === 'whatsapp') { window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(message), '_blank'); }
    else { window.location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Inquiry from ' + name.value) + '&body=' + encodeURIComponent(message); }
  }

  function initVideo() {
    var video = document.querySelector('.hero__video');
    if (!video) return;
    if (navigator.connection && navigator.connection.saveData) { video.style.display = 'none'; return; }
    video.addEventListener('error', function() { video.style.display = 'none'; });
  }

  // ============================================
  // HERO EFFECTS — one shared animation loop
  // Runs only while the hero is on screen and the tab is visible.
  // ============================================
  var heroVisible = true;
  var heroTasks = [];
  var heroRaf = null;
  var wideMQ = window.matchMedia('(min-width: 769px)');

  function heroTick() {
    heroRaf = null;
    if (!heroVisible || document.hidden) return;
    for (var i = 0; i < heroTasks.length; i++) heroTasks[i]();
    heroRaf = requestAnimationFrame(heroTick);
  }
  function heroKick() {
    if (!heroRaf && heroVisible && !document.hidden && heroTasks.length) heroRaf = requestAnimationFrame(heroTick);
  }
  function initHeroLoop() {
    var hero = document.querySelector('.hero');
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(function(entries) {
        heroVisible = entries[0].isIntersecting;
        heroKick();
      }).observe(hero);
    }
    document.addEventListener('visibilitychange', heroKick);
  }

  // ---------- 1. Silk waves (react to the cursor) ----------
  function initSilkWaves() {
    if (reducedMotion) return;
    var svg = document.getElementById('silk-waves');
    var hero = document.querySelector('.hero');
    if (!svg || !hero) return;
    var waves = svg.querySelectorAll('.silk-wave');
    var defs = [
      { pts: [0, 0.5, 0.25, 0.4375, 0.5, 0.5, 0.75, 0.5625, 1, 0.5], amp: 0.05 },
      { pts: [0, 0.375, 0.333, 0.3125, 0.667, 0.375, 1, 0.375], amp: 0.04 },
      { pts: [0, 0.625, 0.167, 0.5625, 0.5, 0.625, 0.833, 0.6875, 1, 0.625], amp: 0.06 },
      { pts: [0, 0.25, 0.417, 0.225, 0.75, 0.275, 1, 0.25], amp: 0.03 }
    ];
    var mx = 0.5, my = 0.5, tx = 0.5, ty = 0.5;
    hero.addEventListener('pointermove', function(e) {
      if (e.pointerType === 'touch') return;
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
    });
    hero.addEventListener('pointerleave', function() { tx = 0.5; ty = 0.5; });

    function frame() {
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      var time = performance.now() * 0.001;
      for (var i = 0; i < waves.length && i < defs.length; i++) {
        var p = defs[i].pts, amp = defs[i].amp, n = p.length / 2;
        var xs = [], ys = [];
        for (var j = 0; j < n; j++) {
          var px = p[j * 2], py = p[j * 2 + 1];
          var wave = Math.sin(time * 0.8 + px * 5 + i * 0.9) * amp * 0.5;
          var dx = mx - px, dy = my - py;
          var pull = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) * 2.2);
          xs.push(px * 1200);
          ys.push((py + wave + dy * pull * 0.22) * 800);
        }
        var d = 'M' + xs[0].toFixed(1) + ',' + ys[0].toFixed(1);
        for (var k = 1; k < n - 1; k++) {
          var mxp = (xs[k] + xs[k + 1]) / 2, myp = (ys[k] + ys[k + 1]) / 2;
          d += ' Q' + xs[k].toFixed(1) + ',' + ys[k].toFixed(1) + ' ' + mxp.toFixed(1) + ',' + myp.toFixed(1);
        }
        d += ' L' + xs[n - 1].toFixed(1) + ',' + ys[n - 1].toFixed(1);
        waves[i].setAttribute('d', d);
      }
    }
    heroTasks.push(frame);
  }

  // ---------- 2. Flying fibers ----------
  function initFlyingFibers() {
    if (reducedMotion) return;
    var canvas = document.getElementById('flying-fibers');
    var hero = document.querySelector('.hero');
    if (!canvas || !hero) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    var fibers = [];
    var COUNT = 35;
    var w = 0, h = 0;

    function resize() {
      var nw = hero.offsetWidth, nh = hero.offsetHeight;
      if (w && h) {
        for (var i = 0; i < fibers.length; i++) { fibers[i].x *= nw / w; fibers[i].y *= nh / h; }
      }
      w = canvas.width = nw;
      h = canvas.height = nh;
    }
    resize();
    window.addEventListener('resize', resize);
    for (var i = 0; i < COUNT; i++) {
      fibers.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.2 - 0.1,
        len: Math.random() * 8 + 4, a: Math.random() * Math.PI * 2,
        rs: (Math.random() - 0.5) * 0.02, op: Math.random() * 0.4 + 0.2
      });
    }
    function frame() {
      if (!wideMQ.matches) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < fibers.length; i++) {
        var f = fibers[i];
        f.x += f.vx; f.y += f.vy; f.a += f.rs;
        if (f.x < -f.len) f.x = w + f.len; else if (f.x > w + f.len) f.x = -f.len;
        if (f.y < -f.len) f.y = h + f.len; else if (f.y > h + f.len) f.y = -f.len;
        var dx = Math.cos(f.a) * f.len / 2, dy = Math.sin(f.a) * f.len / 2;
        ctx.strokeStyle = 'rgba(194,165,107,' + f.op + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(f.x - dx, f.y - dy);
        ctx.lineTo(f.x + dx, f.y + dy);
        ctx.stroke();
      }
    }
    heroTasks.push(frame);
  }

  // ---------- 3. Stitch line with needle (scroll driven, runs only while moving) ----------
  function initStitchLine() {
    if (reducedMotion) return;
    var svg = document.getElementById('stitch-line');
    if (!svg) return;
    var path = svg.querySelector('.stitch-path');
    var needle = svg.querySelector('.stitch-needle');
    if (!path || !needle) return;
    var cur = 0, target = 0, raf = null;

    function readTarget() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var top = window.pageYOffset || document.documentElement.scrollTop || 0;
      target = max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
    }
    function draw() {
      raf = null;
      cur += (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.0004) cur = target;
      var vh = window.innerHeight;
      var left = (window.innerWidth - 1080) / 2;
      var x = Math.max(8, Math.min(40, left / 2));
      var top = 70, bottom = vh - 60;
      var endY = top + cur * (bottom - top);
      var steps = Math.max(2, Math.round(endY / 14));
      var d = 'M' + x + ',0';
      for (var i = 1; i <= steps; i++) {
        var y = (endY / steps) * i;
        d += ' L' + (x + Math.sin(i * 0.5 + cur * 14) * 2.5).toFixed(1) + ',' + y.toFixed(1);
      }
      path.setAttribute('d', d);
      var nx = x + Math.sin(steps * 0.5 + cur * 14) * 2.5;
      needle.setAttribute('transform', 'translate(' + nx.toFixed(1) + ',' + endY.toFixed(1) + ') rotate(' + (Math.cos(steps * 0.5 + cur * 14) * 8).toFixed(1) + ')');
      if (cur !== target) raf = requestAnimationFrame(draw);
    }
    function kick() { readTarget(); if (!raf) raf = requestAnimationFrame(draw); }
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    kick();
  }

  // ---------- 4. Cursor trail (fine pointers only, runs only while moving) ----------
  function initCursorTrail() {
    if (reducedMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    var canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    function size() {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener('resize', size);

    var pts = [], mx = -100, my = -100, dx = -100, dy = -100, r = 3, rt = 3, raf = null, seen = false;
    function loop() {
      raf = null;
      var now = performance.now();
      dx += (mx - dx) * 0.35; dy += (my - dy) * 0.35; r += (rt - r) * 0.2;
      pts.push({ x: dx, y: dy, t: now });
      while (pts.length && now - pts[0].t > 450) pts.shift();
      ctx.clearRect(0, 0, W, H);
      for (var i = 1; i < pts.length; i++) {
        var a = 1 - (now - pts[i].t) / 450;
        ctx.strokeStyle = 'rgba(194,165,107,' + (a * 0.55).toFixed(3) + ')';
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(pts[i - 1].x, pts[i - 1].y); ctx.lineTo(pts[i].x, pts[i].y); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(194,165,107,0.9)';
      ctx.beginPath(); ctx.arc(dx, dy, r, 0, Math.PI * 2); ctx.fill();
      var moving = Math.abs(mx - dx) > 0.3 || Math.abs(my - dy) > 0.3 || Math.abs(rt - r) > 0.05;
      if (moving || pts.length > 2) raf = requestAnimationFrame(loop);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    window.addEventListener('pointermove', function(e) {
      if (e.pointerType === 'touch') return;
      if (!seen) { seen = true; dx = e.clientX; dy = e.clientY; }
      mx = e.clientX; my = e.clientY; kick();
    }, { passive: true });
    document.addEventListener('pointerover', function(e) {
      rt = (e.target.closest && e.target.closest('a, button, [role="button"], summary, input, select, textarea, label')) ? 7 : 3;
      kick();
    });
    document.documentElement.addEventListener('pointerleave', function() { ctx.clearRect(0, 0, W, H); mx = my = -100; });
  }

  // ---------- Route globe: gold-thread globe behind "Mato yo'li" ----------
  // Optional land dots: define window.LAND_DOTS = [[lat, lon], ...] (see README) to show continents.
  function initGlobe() {
    var wrap = document.getElementById('route-map');
    if (!wrap) return;
    var cv = document.createElement('canvas');
    cv.className = 'route-globe'; cv.setAttribute('aria-hidden', 'true');
    wrap.insertBefore(cv, wrap.firstChild);
    var ctx = cv.getContext('2d');
    if (!ctx) return;
    var D = Math.PI / 180, HOME = { lat: 40.3, lon: 72.0 };
    var pins = [{ lat: 40.3, lon: 72.0, main: true }], arcs = [];
    if (typeof CONFIG !== 'undefined' && CONFIG.showRouteCountries) {
      pins.push({ lat: 35, lon: 103 }, { lat: 39, lon: 35 }); arcs = [[1, 0], [2, 0]];
    }
    var off = { x: 0, y: 0 }, tgt = { x: 0, y: 0 }, S = 300, R = 146, raf = null, vis = false;
    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2), r = cv.getBoundingClientRect();
      S = r.width || 300; R = S / 2 - 4;
      cv.width = S * dpr; cv.height = S * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function P(lat, lon) {
      var la = lat * D, dl = (lon - HOME.lon - off.x) * D, a0 = (HOME.lat + off.y) * D;
      var cl = Math.cos(la);
      return { x: S / 2 + cl * Math.sin(dl) * R,
               y: S / 2 - (Math.cos(a0) * Math.sin(la) - Math.sin(a0) * cl * Math.cos(dl)) * R,
               z: Math.sin(a0) * Math.sin(la) + Math.cos(a0) * cl * Math.cos(dl) };
    }
    function line(pts, alpha, w) {
      ctx.strokeStyle = 'rgba(194,165,107,' + alpha + ')'; ctx.lineWidth = w; ctx.beginPath();
      var pen = false;
      for (var i = 0; i < pts.length; i++) {
        if (pts[i].z > 0) { if (pen) ctx.lineTo(pts[i].x, pts[i].y); else ctx.moveTo(pts[i].x, pts[i].y); pen = true; } else pen = false;
      }
      ctx.stroke();
    }
    function draw(time) {
      ctx.clearRect(0, 0, S, S);
      var g = ctx.createRadialGradient(S / 2 - R * 0.3, S / 2 - R * 0.3, R * 0.1, S / 2, S / 2, R);
      g.addColorStop(0, 'rgba(194,165,107,0.10)'); g.addColorStop(1, 'rgba(194,165,107,0.02)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(S / 2, S / 2, R, 0, 7); ctx.fill();
      ctx.strokeStyle = 'rgba(194,165,107,0.35)'; ctx.lineWidth = 1; ctx.stroke();
      var lat, lon, pts;
      for (lon = -180; lon < 180; lon += 20) { pts = []; for (lat = -90; lat <= 90; lat += 5) pts.push(P(lat, lon)); line(pts, 0.16, 0.8); }
      for (lat = -60; lat <= 60; lat += 20) { pts = []; for (lon = -180; lon <= 180; lon += 5) pts.push(P(lat, lon)); line(pts, 0.16, 0.8); }
      if (window.LAND_DOTS) {
        ctx.fillStyle = 'rgba(194,165,107,0.55)';
        for (var i = 0; i < window.LAND_DOTS.length; i++) { var q = P(window.LAND_DOTS[i][0], window.LAND_DOTS[i][1]); if (q.z > 0.05) ctx.fillRect(q.x - 0.7, q.y - 0.7, 1.4, 1.4); }
      }
      for (var a = 0; a < arcs.length; a++) {
        var A = pins[arcs[a][0]], B = pins[arcs[a][1]], a1 = A.lat * D, o1 = A.lon * D, a2 = B.lat * D, o2 = B.lon * D;
        var v1 = [Math.cos(a1) * Math.cos(o1), Math.cos(a1) * Math.sin(o1), Math.sin(a1)], v2 = [Math.cos(a2) * Math.cos(o2), Math.cos(a2) * Math.sin(o2), Math.sin(a2)];
        var om = Math.acos(Math.max(-1, Math.min(1, v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]))); pts = [];
        for (var s = 0; s <= 40; s++) {
          var f = s / 40, k1 = Math.sin((1 - f) * om) / Math.sin(om), k2 = Math.sin(f * om) / Math.sin(om);
          var X = k1 * v1[0] + k2 * v2[0], Y = k1 * v1[1] + k2 * v2[1], Z = k1 * v1[2] + k2 * v2[2];
          pts.push(P(Math.asin(Z) / D, Math.atan2(Y, X) / D));
        }
        line(pts, 0.8, 1.2);
      }
      var pulse = (time % 2000) / 2000;
      for (var n = 0; n < pins.length; n++) {
        var pp = P(pins[n].lat, pins[n].lon); if (pp.z <= 0) continue;
        ctx.fillStyle = 'rgba(232,217,174,0.95)'; ctx.beginPath(); ctx.arc(pp.x, pp.y, pins[n].main ? 4 : 3, 0, 7); ctx.fill();
        if (pins[n].main && !reducedMotion) { ctx.strokeStyle = 'rgba(232,217,174,' + (1 - pulse) * 0.7 + ')'; ctx.beginPath(); ctx.arc(pp.x, pp.y, 4 + pulse * 14, 0, 7); ctx.stroke(); }
      }
    }
    function frame(now) {
      raf = null;
      off.x += (tgt.x - off.x) * 0.07; off.y += (tgt.y - off.y) * 0.07;
      draw(now);
      if (vis && !document.hidden) raf = requestAnimationFrame(frame);
    }
    function kick() { if (!raf && vis && !document.hidden) raf = requestAnimationFrame(frame); }
    size(); draw(0);
    window.addEventListener('resize', function() { size(); draw(0); });
    if (reducedMotion) return;
    wrap.addEventListener('pointermove', function(e) {
      if (e.pointerType === 'touch') return;
      var r = wrap.getBoundingClientRect();
      tgt.x = ((e.clientX - r.left) / r.width - 0.5) * -24; tgt.y = ((e.clientY - r.top) / r.height - 0.5) * 18; kick();
    });
    wrap.addEventListener('pointerleave', function() { tgt.x = 0; tgt.y = 0; kick(); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function(es) { vis = es[0].isIntersecting; kick(); }).observe(wrap);
    document.addEventListener('visibilitychange', kick);
  }

  // ---------- Workshop videos (template-driven, see js/videos.js) ----------
  var reelTrigger = null;
  function renderReels() {
    var track = document.getElementById('reels-track');
    if (!track) return;
    var lang = document.documentElement.lang || 'uz';
    var list = (typeof VIDEOS !== 'undefined' && VIDEOS.length) ? VIDEOS : null;
    var real = !!list;
    if (!list) list = [{}, {}, {}, {}, {}];
    track.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var v = list[i], card = document.createElement('button');
      card.type = 'button'; card.className = 'reel' + (real ? '' : ' reel--soon');
      card.style.setProperty('--h', (i * 37) % 60);
      var title = real && v.title ? typo(v.title[lang] || v.title.uz || '', lang) : '';
      if (real && v.src) { card.setAttribute('aria-label', title || t('reels.ig')); card.setAttribute('data-i', i); }
      else { card.disabled = true; card.setAttribute('aria-label', t('reels.soon')); }
      var poster = real && v.poster ? '<img src="' + v.poster + '" alt="" loading="lazy" onerror="this.remove()">' : '';
      card.innerHTML = '<span class="reel__bg"></span>' + poster +
        (real && v.duration ? '<span class="reel__time">' + v.duration + '</span>' : '') +
        '<span class="reel__ig" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2" y="2" width="12" height="12" rx="3.5"/><circle cx="8" cy="8" r="2.8"/><circle cx="11.4" cy="4.6" r=".5" fill="currentColor"/></svg></span>' +
        '<span class="reel__play" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg></span>' +
        '<span class="reel__cap">' + (real ? title : t('reels.soon')) + '</span>';
      track.appendChild(card);
    }
    var cnt = document.getElementById('reels-count');
    if (cnt) cnt.textContent = real ? list.length + ' ' + t('reels.count') : '';
    var ig = document.getElementById('reels-ig');
    if (ig && typeof CONFIG !== 'undefined') ig.href = CONFIG.instagram;
  }

  function initReels() {
    var track = document.getElementById('reels-track');
    if (!track) return;
    track.addEventListener('click', function(e) {
      var card = e.target.closest ? e.target.closest('.reel[data-i]') : null;
      if (!card) return;
      var v = VIDEOS[+card.getAttribute('data-i')];
      if (!v || !v.src) return;
      reelTrigger = card;
      var m = document.getElementById('reel-modal'), vid = document.getElementById('reel-video');
      vid.src = v.src; if (v.poster) vid.poster = v.poster;
      m.hidden = false; document.body.style.overflow = 'hidden';
      var p = vid.play(); if (p && p.catch) p.catch(function() {});
      document.getElementById('reel-close').focus();
    });
    function close() {
      var m = document.getElementById('reel-modal'), vid = document.getElementById('reel-video');
      if (m.hidden) return;
      vid.pause(); vid.removeAttribute('src'); vid.load(); m.hidden = true; document.body.style.overflow = '';
      if (reelTrigger) reelTrigger.focus();
    }
    document.getElementById('reel-close').addEventListener('click', close);
    document.getElementById('reel-modal').addEventListener('click', function(e) { if (e.target === this) close(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });
    var step = function(dir) { return function() { track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: reducedMotion ? 'auto' : 'smooth' }); }; };
    document.getElementById('reels-prev').addEventListener('click', step(-1));
    document.getElementById('reels-next').addEventListener('click', step(1));
  }

  function applyTeamFlag() {
    var team = document.getElementById('team');
    if (team && typeof CONFIG !== 'undefined' && CONFIG.showTeam) team.style.display = '';
  }

  function init() {
    initLanguage();
    initLoader();
    initNav();
    initScrollProgress();
    initLangSwitch();
    initVideo();
    initHeroLoop();
    initSilkWaves();
    initFlyingFibers();
    heroKick();
    initStitchLine();
    initCursorTrail();
    initGlobe();
    renderReels();
    initReels();
    applyTeamFlag();
    renderProducts();
    renderFAQ();
    renderRequisites();
    populateProductSelect();
    initLightbox();
    initForm();
    initPDF();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() { initThreads(); });
    } else { setTimeout(initThreads, 500); }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
