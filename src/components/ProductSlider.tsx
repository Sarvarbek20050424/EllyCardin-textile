import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { type Locale } from '../i18n';
import { useStore, type Product } from '../store';

interface ProductSliderProps {
  locale: Locale;
}

const productImages: Record<number, string> = {
  1: 'https://image.qwenlm.ai/generated-images/0f918319-0577-4a86-bf5a-6ee7e54b958f/_result.png',
  2: 'https://image.qwenlm.ai/generated-images/d5dd7139-9e1f-4f4d-9fb7-fc9116a55a33/_result.png',
  4: 'https://image.qwenlm.ai/generated-images/31266b47-a2ee-41de-aeee-c3c47a74189f/_result.png',
};

const productColors: Record<string, string> = {
  Interlok: 'from-emerald-800 to-emerald-600',
  Rib: 'from-teal-800 to-teal-600',
  Kulirka: 'from-amber-700 to-amber-500',
  Fleece: 'from-slate-700 to-slate-500',
  Pique: 'from-indigo-800 to-indigo-600',
  Footer: 'from-stone-700 to-stone-500',
  'Интерлок': 'from-emerald-800 to-emerald-600',
  'Риб (Резинка)': 'from-teal-800 to-teal-600',
  'Кулирка': 'from-amber-700 to-amber-500',
  'Флис (Футер 3-нитка)': 'from-slate-700 to-slate-500',
  'Пике': 'from-indigo-800 to-indigo-600',
  'Футер 2-нитка': 'from-stone-700 to-stone-500',
  'Interlock': 'from-emerald-800 to-emerald-600',
  'Jersey (Kulirka)': 'from-amber-700 to-amber-500',
  'Fleece (Futer 3-thread)': 'from-slate-700 to-slate-500',
  'Footer (2-thread)': 'from-stone-700 to-stone-500',
};

const productPatterns: Record<string, string> = {
  knit: 'M0,0 L20,20 M10,0 L30,20 M20,0 L40,20',
  fabric: 'M0,10 Q10,0 20,10 T40,10 M0,20 Q10,10 20,20 T40,20',
  special: 'M0,0 L20,20 M20,0 L0,20 M10,0 L30,20 M30,0 L10,20',
};

export default function ProductSlider({ locale }: ProductSliderProps) {
  const { data } = useStore();
  const products = (data.products[locale] as Product[]).filter(p => p.published);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const filteredProducts = activeCategory === 'all' ? products : products.filter((p: Product) => p.category === activeCategory);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [activeCategory, locale, emblaApi]);

  const categories = [
    { key: 'all', label: locale === 'uz' ? 'Barchasi' : locale === 'ru' ? 'Все' : 'All' },
    { key: 'knit', label: locale === 'uz' ? 'Trikotaj' : locale === 'ru' ? 'Трикотаж' : 'Knitwear' },
    { key: 'fabric', label: locale === 'uz' ? 'Mato' : locale === 'ru' ? 'Ткань' : 'Fabric' },
    { key: 'special', label: locale === 'uz' ? 'Maxsus' : locale === 'ru' ? 'Специальное' : 'Special' },
  ];

  return (
    <div>
      {/* Category Filter */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
              activeCategory === cat.key
                ? 'bg-[var(--color-emerald-brand)] text-white'
                : 'bg-[var(--color-paper)] text-[var(--color-muted)] hover:text-[var(--color-ink)] border border-[var(--color-line)]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative">
        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container">
            {filteredProducts.map((product) => (
              <div key={product.id} className="embla__slide">
                <ProductCard
                  product={product}
                  onClick={() => setLightboxProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-[var(--color-paper)] rounded-full shadow-md flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-white transition-all z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-[var(--color-paper)] rounded-full shadow-md flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-white transition-all z-10"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[var(--color-paper)] rounded-sm max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Product Image Area */}
              <div className={`relative h-48 sm:h-64 bg-gradient-to-br ${productColors[lightboxProduct.name] || 'from-emerald-800 to-emerald-600'} rounded-t-sm overflow-hidden`}>
                {productImages[lightboxProduct.id] && (
                  <img 
                    src={productImages[lightboxProduct.id]} 
                    alt={lightboxProduct.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {!productImages[lightboxProduct.id] && (
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path d={productPatterns[lightboxProduct.category] || productPatterns.knit} fill="none" stroke="white" strokeWidth="0.5" />
                  </svg>
                )}
                <button
                  onClick={() => setLightboxProduct(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {lightboxProduct.name}
                  </h3>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <p className="text-[var(--color-muted)] mb-6 leading-relaxed">{lightboxProduct.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-[var(--color-ink)] text-sm uppercase tracking-wide">
                    {locale === 'uz' ? 'Xususiyatlar' : locale === 'ru' ? 'Характеристики' : 'Specifications'}
                  </h4>
                  {lightboxProduct.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                      {spec}
                    </div>
                  ))}
                </div>

                <a
                  href="#inquiry"
                  onClick={() => setLightboxProduct(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-emerald-brand)] text-white font-medium rounded-sm hover:bg-[var(--color-emerald-2)] transition-colors text-sm"
                >
                  {locale === 'uz' ? "So'rov yuborish" : locale === 'ru' ? 'Оставить заявку' : 'Send Inquiry'}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const imageUrl = productImages[product.id];
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${productColors[product.name] || 'from-emerald-800 to-emerald-600'} rounded-sm overflow-hidden`}>
        {/* Product image if available */}
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        
        {/* Pattern overlay (only if no image) */}
        {!imageUrl && (
          <svg className="absolute inset-0 w-full h-full opacity-15 group-hover:opacity-25 transition-opacity" viewBox="0 0 400 250" preserveAspectRatio="none">
            <path d={productPatterns[product.category] || productPatterns.knit} fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        )}
        
        {/* Hover overlay with caption */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
          <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs opacity-80">{product.description.slice(0, 60)}...</p>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-sm text-white text-xs">
          {product.category === 'knit' ? 'Trikotaj' : product.category === 'fabric' ? 'Mato' : 'Maxsus'}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-gold-dark)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-muted)] mt-1 line-clamp-2">{product.description}</p>
      </div>
    </motion.div>
  );
}
