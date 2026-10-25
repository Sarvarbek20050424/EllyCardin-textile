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
    'route.title1': 'Mato', 'route.title2': "yo\u2018li",
    'route.nodeA': 'Mato', 'route.nodeB': 'Ip',
    'route.nodeAAlt': 'Xitoy', 'route.nodeBAlt': 'Turkiya',
    'process.title1': 'Ishlab', 'process.title2': 'chiqarish',
    'process.step1.title': 'Mato', 'process.step1.text': 'Sifatli xomashyo tanlash va tayyorlash.',
    'process.step2.title': 'Kesish va tikuv', 'process.step2.text': 'Aniq kesish va professional tikuv ishlari.',
    'process.step3.title': 'Sifat nazorati', 'process.step3.text': 'Har bir mahsulot sinchkovlik bilan tekshiriladi.',
    'process.step4.title': 'Tayyor mahsulot', 'process.step4.text': 'Qadoqlash va buyurtmachiga yetkazib berish.',
    'products.title1': 'Mahsulot', 'products.title2': 'lari',
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
    'req.title1': 'Rekvizit', 'req.title2': 'lar',
    'req.company': 'Korxona nomi', 'req.taxId': 'STIR', 'req.account': 'Hisob raqami (USD)',
    'req.bank': 'Bank', 'req.bankCode': 'Bank kodi (MFO)', 'req.swift': 'SWIFT', 'req.address': 'Manzil',
    'req.copy': 'Nusxa', 'req.copied': 'Nusxalandi!', 'req.downloadPdf': 'PDF yuklab olish',
    'contact.title1': 'Aloqa', 'contact.title2': "ma\u2018lumotlari",
    'contact.address': "O\u2018zbekiston, Farg\u2018ona viloyati, Quvasoy shahri, Mustaqillik ko\u2018chasi, 3-uy",
    'doc.title': "ELLYCARDIN TEKSTIL \u2014 To\u2018qimachilik korxonasi | Quvasoy, Farg\u2018ona",
    'doc.description': "ELLYCARDIN TEKSTIL MChJ \u2014 Farg\u2018ona viloyati, Quvasoy shahridagi tekstil korxonasi."
  },
  ru: {
    'nav.about': 'Компания', 'nav.activity': 'Деятельность', 'nav.products': 'Продукция',
    'nav.inquiry': 'Заявка', 'nav.requisites': 'Реквизиты', 'nav.contact': 'Контакты',
    'hero.lead': 'Текстильное предприятие в Куvasay, Ферганская область. Вся информация о сотрудничестве, договорах и оплате — на этой странице.',
    'hero.cta1': 'Оставить заявку', 'hero.cta2': 'Реквизиты',
    'about.title1': 'О', 'about.title2': 'компании',
    'about.p1': '«ELLYCARDIN TEKSTIL» МЧЖ — текстильное предприятие в городе Куvasay, Ферганская область. Мы работаем в сфере производства тканей и пошива.',
    'about.p2': 'Наше предприятие ценит долгосрочное партнёрство, основанное на взаимном доверии. Качество, надёжность и своевременная доставка — наши основные принципы.',
    'about.fact.name': 'Название', 'about.fact.field': 'Деятельность',
    'about.fact.fieldVal': 'Текстиль: ткани и пошив',
    'about.fact.address': 'Адрес',
    'about.fact.addressVal': 'Узбекистан, Ферганская область, г. Куvasay, ул. Мустакиллик, д. 3',
    'about.fact.tax': 'ИНН',
    'route.title1': 'Путь', 'route.title2': 'ткани',
    'route.nodeA': 'Ткань', 'route.nodeB': 'Нить',
    'route.nodeAAlt': 'Китай', 'route.nodeBAlt': 'Турция',
    'process.title1': 'Производ', 'process.title2': 'ство',
    'process.step1.title': 'Ткань', 'process.step1.text': 'Отбор и подготовка качественного сырья.',
    'process.step2.title': 'Раскрой и пошив', 'process.step2.text': 'Точный раскрой и профессиональный пошив.',
    'process.step3.title': 'Контроль качества', 'process.step3.text': 'Каждое изделие тщательно проверяется.',
    'process.step4.title': 'Готовая продукция', 'process.step4.text': 'Упаковка и доставка заказчику.',
    'products.title1': 'Продук', 'products.title2': 'ция',
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
    'faq.a1': 'Ферганская область, г. Куvasay, ул. Мустакиллик, д. 3.',
    'faq.q2': 'Как осуществляется оплата?',
    'faq.a2': 'Оплата производится банковским переводом. Подробности — в разделе «Реквизиты» или свяжитесь с нами.',
    'faq.q3': 'Как связаться?',
    'faq.a3': 'Телефон: +998 90 917 99 29 или +998 99 091 99 29 (WhatsApp, Telegram). E-mail: ellycardin.tekstil@mail.ru',
    'faq.q4': 'Как заключается договор?',
    'faq.a4': 'Договор заключается по соглашению сторон. Свяжитесь с нами для подробностей.',
    'faq.q5': 'Где посмотреть банковские реквизиты?',
    'faq.a5': 'Банковские реквизиты находятся в разделе «Реквизиты» на этой странице.',
    'req.title1': 'Рекви', 'req.title2': 'зиты',
    'req.company': 'Название', 'req.taxId': 'ИНН', 'req.account': 'Счёт (USD)',
    'req.bank': 'Банк', 'req.bankCode': 'Код банка (МФО)', 'req.swift': 'SWIFT', 'req.address': 'Адрес',
    'req.copy': 'Копировать', 'req.copied': 'Скопировано!', 'req.downloadPdf': 'Скачать PDF',
    'contact.title1': 'Контакт', 'contact.title2': 'ные данные',
    'contact.address': 'Узбекистан, Ферганская область, г. Куvasay, ул. Мустакиллик, д. 3',
    'doc.title': 'ELLYCARDIN TEKSTIL — Текстильное предприятие | Куvasay, Фергана',
    'doc.description': '«ELLYCARDIN TEKSTIL» МЧЖ — текстильное предприятие в Ферганской области.'
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
    'route.title1': 'Fabric', 'route.title2': 'route',
    'route.nodeA': 'Fabric', 'route.nodeB': 'Thread',
    'route.nodeAAlt': 'China', 'route.nodeBAlt': 'Turkey',
    'process.title1': 'Manu', 'process.title2': 'facturing',
    'process.step1.title': 'Fabric', 'process.step1.text': 'Selection and preparation of quality raw materials.',
    'process.step2.title': 'Cutting & Sewing', 'process.step2.text': 'Precise cutting and professional sewing.',
    'process.step3.title': 'Quality Control', 'process.step3.text': 'Every product is carefully inspected.',
    'process.step4.title': 'Finished Product', 'process.step4.text': 'Packaging and delivery to the customer.',
    'products.title1': 'Pro', 'products.title2': 'ducts',
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
    'req.title1': 'Requi', 'req.title2': 'sites',
    'req.company': 'Company name', 'req.taxId': 'Tax ID', 'req.account': 'Account (USD)',
    'req.bank': 'Bank', 'req.bankCode': 'Bank code (MFO)', 'req.swift': 'SWIFT', 'req.address': 'Address',
    'req.copy': 'Copy', 'req.copied': 'Copied!', 'req.downloadPdf': 'Download PDF',
    'contact.title1': 'Contact', 'contact.title2': 'information',
    'contact.address': 'Uzbekistan, Fergana region, Kuvasay city, Mustakillik street, house 3',
    'doc.title': 'ELLYCARDIN TEKSTIL — Textile Enterprise | Kuvasay, Fergana',
    'doc.description': '"ELLYCARDIN TEKSTIL" FC LLC — a textile enterprise in the Fergana region of Uzbekistan.'
  }
};

function t(key) {
  var lang = document.documentElement.lang || 'uz';
  return (I18N[lang] && I18N[lang][key]) || (I18N.uz && I18N.uz[key]) || key;
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
  { id: 'interlok', image: '/assets/products/interlok.jpg', title: { uz: 'Interlok', ru: 'Интерлок', en: 'Interlock' }, text: { uz: "Bir tomonlama silliq mato.", ru: 'Односторонний гладкий материал.', en: 'Smooth single-sided fabric.' } },
  { id: 'rib', image: '/assets/products/rib.jpg', title: { uz: 'Rib', ru: 'Риб', en: 'Rib' }, text: { uz: "Elastik mato.", ru: 'Эластичный материал.', en: 'Elastic fabric.' } },
  { id: 'kulirka', image: '/assets/products/kulirka.jpg', title: { uz: 'Kulirka', ru: 'Кулирка', en: 'Jersey' }, text: { uz: "Yengil, yupqa mato.", ru: 'Лёгкий, тонкий материал.', en: 'Light, thin fabric.' } },
  { id: 'fleece', image: '/assets/products/fleece.jpg', title: { uz: 'Fleece', ru: 'Флис', en: 'Fleece' }, text: { uz: "Ichki tomoni yumshoq, issiq mato.", ru: 'Мягкий изнутри, тёплый материал.', en: 'Soft inside, warm fabric.' } },
  { id: 'pike', image: '/assets/products/pike.jpg', title: { uz: 'Pike', ru: 'Пике', en: 'Pique' }, text: { uz: "To'qilgan strukturaviy mato.", ru: 'Структурный вязаный материал.', en: 'Structured knitted fabric.' } },
  { id: 'footer', image: '/assets/products/footer.jpg', title: { uz: 'Footer', ru: 'Футер', en: 'Footer' }, text: { uz: "Mustahkam, zich mato.", ru: 'Прочный, плотный материал.', en: 'Durable, dense fabric.' } }
];

function getProductTitle(product) {
  var lang = document.documentElement.lang || 'uz';
  return (product.title && product.title[lang]) || product.title.uz || product.id;
}

function getProductText(product) {
  var lang = document.documentElement.lang || 'uz';
  return (product.text && product.text[lang]) || product.text.uz || '';
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
        renderProducts(); renderFAQ(); renderRequisites(); populateProductSelect();
      });
    }
  }

  function initThreads() {
    if (!window.gsap || !window.ScrollTrigger) return;
    if (reducedMotion) {
      var paths = document.querySelectorAll('.section-thread path, .route-thread-line');
      for (var i = 0; i < paths.length; i++) { paths[i].style.strokeDashoffset = '0'; }
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
    for (var i = 0; i < rows.length; i++) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<th>' + rows[i].label + '</th><td>' + rows[i].value + '<button class="copy-btn" data-copy="' + rows[i].value + '" aria-label="' + t('req.copy') + '"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1"/><path d="M2 9V2h7" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg><span>' + t('req.copy') + '</span></button></td>';
      tbody.appendChild(tr);
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

  function init() {
    initLanguage();
    initLoader();
    initNav();
    initScrollProgress();
    initLangSwitch();
    initVideo();
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
