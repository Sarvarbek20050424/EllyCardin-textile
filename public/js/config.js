/**
 * ELLYCARDIN TEKSTIL — Feature flags & constants
 */
var CONFIG = {
  // Feature flags (unconfirmed facts hidden behind these)
  showRouteCountries: false,  // true = show "Xitoy"/"Turkiya"; false = show "Mato"/"Ip"
  showTeam: false,            // true = render #team section and nav link
  
  // Contact constants (confirmed)
  phones: ['+998909179929', '+998990919929'],
  whatsapp: '998990919929',
  telegram: '+998990919929',
  email: 'ellycardin.tekstil@mail.ru',
  instagram: 'https://instagram.com/mashxura_zafarovna',
  instagramHandle: '@mashxura_zafarovna',
  
  // Company info (confirmed)
  legalName: '"ELLYCARDIN TEKSTIL" FC LLC',
  address: {
    uz: "O'zbekiston, Farg'ona viloyati, Quvasoy shahri, Mustaqillik ko'chasi, 3-uy",
    ru: 'Узбекистан, Ферганская область, г. Кувасай, ул. Мустакиллик, д. 3',
    en: 'Uzbekistan, Fergana region, Kuvasay city, Mustakillik street, house 3'
  },
  taxId: '310030163',
  bank: {
    name: 'JSCB "TRUSTBANK"',
    city: { uz: "Farg'ona shahri", ru: 'г. Фергана', en: 'Fergana city' },
    usdAccount: '20208840605589012001',
    bankCode: '00491',
    swift: 'TRSAUZ22'
  },
  
  // Activity wording (confirmed - never use "trikotaj")
  activity: {
    uz: "To'qimachilik: mato va tikuvchilik",
    ru: 'Текстиль: ткани и пошив',
    en: 'Textile: fabrics and sewing'
  }
};
