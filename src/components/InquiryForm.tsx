import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { productData, translations, type Locale } from '../i18n';
import { useStore } from '../store';

interface InquiryFormProps {
  locale: Locale;
  t: typeof translations.uz;
}

interface FormErrors {
  name?: string;
  phone?: string;
  consent?: string;
}

export default function InquiryForm({ locale, t }: InquiryFormProps) {
  const { data, addInquiry } = useStore();
  const products = data.products[locale] as Array<{ id: number; name: string; description: string; category: string; specs: string[] }>;
  const ti = t.inquiry;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = ti.required;
    }

    const phoneClean = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneClean || phoneClean.length < 9) {
      newErrors.phone = ti.phoneInvalid;
    }

    if (!formData.consent) {
      newErrors.consent = ti.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Save inquiry to store (simulates API call)
    setTimeout(() => {
      addInquiry({
        name: formData.name,
        phone: formData.phone,
        product: formData.product,
        quantity: formData.quantity,
        message: formData.message,
        locale: locale,
      });
      setStatus('success');
      setFormData({ name: '', phone: '', product: '', quantity: '', message: '', consent: false });
    }, 800);
  };

  const formatPhone = (value: string) => {
    let digits = value.replace(/[^\d+]/g, '');

    if (digits.startsWith('+998')) {
      digits = digits;
    } else if (digits.startsWith('998')) {
      digits = '+' + digits;
    } else if (digits.startsWith('8')) {
      digits = '+998' + digits.slice(1);
    } else {
      digits = '+998' + digits;
    }

    const cleaned = digits.replace('+', '');
    if (cleaned.length <= 3) return '+' + cleaned;
    if (cleaned.length <= 5) return `+${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    if (cleaned.length <= 8) return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5)}`;
    if (cleaned.length <= 10) return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[var(--color-ivory)] rounded-sm p-6 sm:p-8 lg:p-10"
    >
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
            <p className="text-lg font-medium text-[var(--color-ink)] mb-2">{ti.success}</p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm text-[var(--color-gold-dark)] hover:text-[var(--color-gold)] underline"
            >
              {locale === 'uz' ? "Yana so'rov" : locale === 'ru' ? 'Ещё заявка' : 'Another inquiry'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">{ti.name}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                className={`w-full bg-transparent border-b-2 pb-2 pt-1 text-[var(--color-ink)] outline-none transition-colors ${
                  errors.name ? 'border-red-400' : 'border-[var(--color-line)] focus:border-[var(--color-gold)]'
                }`}
                placeholder={ti.name}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">{ti.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  const formatted = formatPhone(e.target.value);
                  setFormData({ ...formData, phone: formatted });
                  setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full bg-transparent border-b-2 pb-2 pt-1 text-[var(--color-ink)] outline-none transition-colors ${
                  errors.phone ? 'border-red-400' : 'border-[var(--color-line)] focus:border-[var(--color-gold)]'
                }`}
                placeholder="+998 __ ___ __ __"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.phone}
                </p>
              )}
            </div>

            {/* Product Select */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">{ti.product}</label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-transparent border-b-2 border-[var(--color-line)] focus:border-[var(--color-gold)] pb-2 pt-1 text-[var(--color-ink)] outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">{ti.productPlaceholder}</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">{ti.quantity}</label>
              <input
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-transparent border-b-2 border-[var(--color-line)] focus:border-[var(--color-gold)] pb-2 pt-1 text-[var(--color-ink)] outline-none transition-colors"
                placeholder={locale === 'uz' ? 'Masalan: 500 kg' : locale === 'ru' ? 'Например: 500 кг' : 'Example: 500 kg'}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">{ti.message}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full bg-transparent border-b-2 border-[var(--color-line)] focus:border-[var(--color-gold)] pb-2 pt-1 text-[var(--color-ink)] outline-none transition-colors resize-none"
                placeholder={locale === 'uz' ? "Qo'shimcha ma'lumot..." : locale === 'ru' ? 'Дополнительная информация...' : 'Additional information...'}
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => { setFormData({ ...formData, consent: e.target.checked }); setErrors({ ...errors, consent: undefined }); }}
                className="mt-1 w-4 h-4 rounded border-[var(--color-line)] text-[var(--color-gold)] focus:ring-[var(--color-gold)] accent-[var(--color-gold)]"
              />
              <label htmlFor="consent" className="text-sm text-[var(--color-muted)] cursor-pointer">
                {ti.consent}
              </label>
            </div>
            {errors.consent && (
              <p className="text-xs text-red-500 flex items-center gap-1 -mt-4">
                <AlertCircle size={12} /> {errors.consent}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[var(--color-emerald-brand)] text-white font-medium rounded-sm hover:bg-[var(--color-emerald-2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {ti.sending}
                </>
              ) : (
                <>
                  <Send size={16} />
                  {ti.submit}
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
