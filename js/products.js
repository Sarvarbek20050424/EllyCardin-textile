/**
 * ELLYCARDIN TEKSTIL — Products data
 * These are PLACEHOLDER names. Replace with real products as needed.
 */
var PRODUCTS = [
  {
    id: 'interlok',
    image: '/assets/products/interlok.jpg',
    title: { uz: 'Interlok', ru: 'Интерлок', en: 'Interlock' },
    text: {
      uz: "Bir tomonlama silliq mato. Ich kiyim va yengil kiyimlar uchun.",
      ru: 'Односторонний гладкий материал. Для нижнего белья и лёгкой одежды.',
      en: 'Smooth single-sided fabric. For underwear and light garments.'
    }
  },
  {
    id: 'rib',
    image: '/assets/products/rib.jpg',
    title: { uz: 'Rib', ru: 'Риб', en: 'Rib' },
    text: {
      uz: "Elastik mato. Manjetlar va yoqalar uchun.",
      ru: 'Эластичный материал. Для манжет и воротников.',
      en: 'Elastic fabric. For cuffs and collars.'
    }
  },
  {
    id: 'kulirka',
    image: '/assets/products/kulirka.jpg',
    title: { uz: 'Kulirka', ru: 'Кулирка', en: 'Jersey' },
    text: {
      uz: "Yengil, yupqa mato. Yozgi kiyimlar uchun.",
      ru: 'Лёгкий, тонкий материал. Для летней одежды.',
      en: 'Light, thin fabric. For summer clothing.'
    }
  },
  {
    id: 'fleece',
    image: '/assets/products/fleece.jpg',
    title: { uz: 'Fleece', ru: 'Флис', en: 'Fleece' },
    text: {
      uz: "Ichki tomoni yumshoq, issiq mato.",
      ru: 'Мягкий изнутри, тёплый материал.',
      en: 'Soft inside, warm fabric.'
    }
  },
  {
    id: 'pike',
    image: '/assets/products/pike.jpg',
    title: { uz: 'Pike', ru: 'Пике', en: 'Pique' },
    text: {
      uz: "To'qilgan strukturaviy mato.",
      ru: 'Структурный вязаный материал.',
      en: 'Structured knitted fabric.'
    }
  },
  {
    id: 'footer',
    image: '/assets/products/footer.jpg',
    title: { uz: 'Footer', ru: 'Футер', en: 'Footer' },
    text: {
      uz: "Mustahkam, zich mato. Keng qo'llaniladi.",
      ru: 'Прочный, плотный материал. Широко применяется.',
      en: 'Durable, dense fabric. Widely used.'
    }
  }
];

/**
 * Get product title in current language
 */
function getProductTitle(product) {
  var lang = document.documentElement.lang || 'uz';
  return (product.title && product.title[lang]) || product.title.uz || product.id;
}

/**
 * Get product text in current language
 */
function getProductText(product) {
  var lang = document.documentElement.lang || 'uz';
  return (product.text && product.text[lang]) || product.text.uz || '';
}
