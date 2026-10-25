import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations as defaultTranslations, productData as defaultProducts, faqData as defaultFaq, requisitesData as defaultRequisites, type Locale } from './i18n';

export type { Locale } from './i18n';

// Types
export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  specs: string[];
  featured: boolean;
  published: boolean;
}

export interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export interface Requisite {
  id: number;
  label: string;
  value: string;
}

export interface Inquiry {
  id: string;
  number: number;
  name: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
  locale: Locale;
  status: 'new' | 'accepted' | 'contacted' | 'closed' | 'cancelled';
  createdAt: string;
  note?: string;
}

export interface SiteTexts {
  hero: { title: string; subtitle: string; description: string };
  about: { title: string; description: string };
  contacts: {
    phones: string[];
    email: string;
    address: Record<Locale, string>;
    instagram: string;
    telegram: string;
    whatsapp: string;
  };
}

export interface StoreData {
  products: Record<Locale, Product[]>;
  faq: Record<Locale, FAQItem[]>;
  requisites: Record<Locale, Requisite[]>;
  inquiries: Inquiry[];
  siteTexts: Record<Locale, SiteTexts>;
  nextInquiryNumber: number;
}

interface StoreContextType {
  data: StoreData;
  updateProducts: (locale: Locale, products: Product[]) => void;
  updateFaq: (locale: Locale, faq: FAQItem[]) => void;
  updateRequisites: (locale: Locale, requisites: Requisite[]) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'number' | 'status' | 'createdAt'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status'], note?: string) => void;
  updateSiteTexts: (locale: Locale, texts: Partial<SiteTexts>) => void;
  resetData: () => void;
}

const defaultSiteTexts: Record<Locale, SiteTexts> = {
  uz: {
    hero: {
      title: defaultTranslations.uz.hero.title,
      subtitle: defaultTranslations.uz.hero.subtitle,
      description: defaultTranslations.uz.hero.description,
    },
    about: {
      title: defaultTranslations.uz.about.title,
      description: defaultTranslations.uz.about.description,
    },
    contacts: {
      phones: ['+998 90 917 99 29', '+998 99 091 99 29'],
      email: 'ellycardin.tekstil@mail.ru',
      address: {
        uz: "O'zbekiston, Quvasoy shahri, Mustaqillik ko'chasi, 3-uy",
        ru: 'Узбекистан, г. Кувасай, ул. Мустакиллик, д. 3',
        en: 'Uzbekistan, Kuvasay city, Mustakillik street, house 3',
      },
      instagram: '@mashxura_zafarovna',
      telegram: '+998990919929',
      whatsapp: '998990919929',
    },
  },
  ru: {
    hero: {
      title: defaultTranslations.ru.hero.title,
      subtitle: defaultTranslations.ru.hero.subtitle,
      description: defaultTranslations.ru.hero.description,
    },
    about: {
      title: defaultTranslations.ru.about.title,
      description: defaultTranslations.ru.about.description,
    },
    contacts: {
      phones: ['+998 90 917 99 29', '+998 99 091 99 29'],
      email: 'ellycardin.tekstil@mail.ru',
      address: {
        uz: "O'zbekiston, Quvasoy shahri, Mustaqillik ko'chasi, 3-uy",
        ru: 'Узбекистан, г. Кувасай, ул. Мустакиллик, д. 3',
        en: 'Uzbekistan, Kuvasay city, Mustakillik street, house 3',
      },
      instagram: '@mashxura_zafarovna',
      telegram: '+998990919929',
      whatsapp: '998990919929',
    },
  },
  en: {
    hero: {
      title: defaultTranslations.en.hero.title,
      subtitle: defaultTranslations.en.hero.subtitle,
      description: defaultTranslations.en.hero.description,
    },
    about: {
      title: defaultTranslations.en.about.title,
      description: defaultTranslations.en.about.description,
    },
    contacts: {
      phones: ['+998 90 917 99 29', '+998 99 091 99 29'],
      email: 'ellycardin.tekstil@mail.ru',
      address: {
        uz: "O'zbekiston, Quvasoy shahri, Mustaqillik ko'chasi, 3-uy",
        ru: 'Узбекистан, г. Кувасай, ул. Мустакиллик, д. 3',
        en: 'Uzbekistan, Kuvasay city, Mustakillik street, house 3',
      },
      instagram: '@mashxura_zafarovna',
      telegram: '+998990919929',
      whatsapp: '998990919929',
    },
  },
};

function getDefaultData(): StoreData {
  const products: Record<Locale, Product[]> = { uz: [], ru: [], en: [] };
  const faq: Record<Locale, FAQItem[]> = { uz: [], ru: [], en: [] };
  const requisites: Record<Locale, Requisite[]> = { uz: [], ru: [], en: [] };

  (['uz', 'ru', 'en'] as Locale[]).forEach((locale) => {
    products[locale] = defaultProducts[locale].map((p: any, i: number) => ({
      ...p,
      featured: i < 3,
      published: true,
    }));
    faq[locale] = defaultFaq[locale].map((f: any, i: number) => ({ id: i + 1, ...f }));
    requisites[locale] = defaultRequisites[locale].map((r: any, i: number) => ({ id: i + 1, ...r }));
  });

  return {
    products,
    faq,
    requisites,
    inquiries: [],
    siteTexts: defaultSiteTexts,
    nextInquiryNumber: 1,
  };
}

function loadData(): StoreData {
  try {
    const saved = localStorage.getItem('ellycardin-store');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load store data:', e);
  }
  return getDefaultData();
}

function saveData(data: StoreData) {
  try {
    localStorage.setItem('ellycardin-store', JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save store data:', e);
  }
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<StoreData>(loadData);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const updateProducts = (locale: Locale, products: Product[]) => {
    setData(prev => ({ ...prev, products: { ...prev.products, [locale]: products } }));
  };

  const updateFaq = (locale: Locale, faq: FAQItem[]) => {
    setData(prev => ({ ...prev, faq: { ...prev.faq, [locale]: faq } }));
  };

  const updateRequisites = (locale: Locale, requisites: Requisite[]) => {
    setData(prev => ({ ...prev, requisites: { ...prev.requisites, [locale]: requisites } }));
  };

  const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'number' | 'status' | 'createdAt'>) => {
    setData(prev => ({
      ...prev,
      nextInquiryNumber: prev.nextInquiryNumber + 1,
      inquiries: [
        {
          ...inquiry,
          id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
          number: prev.nextInquiryNumber,
          status: 'new',
          createdAt: new Date().toISOString(),
        },
        ...prev.inquiries,
      ],
    }));
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status'], note?: string) => {
    setData(prev => ({
      ...prev,
      inquiries: prev.inquiries.map(inq =>
        inq.id === id ? { ...inq, status, note: note || inq.note } : inq
      ),
    }));
  };

  const updateSiteTexts = (locale: Locale, texts: Partial<SiteTexts>) => {
    setData(prev => ({
      ...prev,
      siteTexts: {
        ...prev.siteTexts,
        [locale]: { ...prev.siteTexts[locale], ...texts },
      },
    }));
  };

  const resetData = () => {
    setData(getDefaultData());
  };

  return (
    <StoreContext.Provider value={{ data, updateProducts, updateFaq, updateRequisites, addInquiry, updateInquiryStatus, updateSiteTexts, resetData }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
