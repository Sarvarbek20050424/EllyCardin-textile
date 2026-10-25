import { useState, useEffect } from 'react';
import { useStore, type Locale, type Product, type FAQItem, type Requisite, type Inquiry } from '../store';
import {
  LayoutDashboard, Package, HelpCircle, FileText, MessageSquare, Settings,
  LogOut, Plus, Trash2, Edit3, Save, X, Check, Eye, EyeOff, Search,
  ChevronDown, BarChart3, Users, Globe, RefreshCw
} from 'lucide-react';

const ADMIN_PASSWORD = 'admin2026';

type AdminPage = 'dashboard' | 'products' | 'faq' | 'requisites' | 'inquiries' | 'texts' | 'settings';

export default function AdminPanel({ onExit }: { onExit: () => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [currentPage, setCurrentPage] = useState<AdminPage>('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError("Noto'g'ri parol");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-emerald-brand)] flex items-center justify-center p-4">
        <div className="bg-[var(--color-paper)] rounded-sm p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[var(--color-emerald-brand)] flex items-center justify-center mx-auto mb-4">
              <span className="text-[var(--color-gold)] font-bold text-xl" style={{ fontFamily: 'var(--font-heading)' }}>E</span>
            </div>
            <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Admin Panel
            </h1>
            <p className="text-sm text-[var(--color-muted)] mt-2">ELLYCARDIN TEKSTIL boshqaruv tizimi</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Parol</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[var(--color-line)] focus:border-[var(--color-gold)] pb-2 pt-1 text-[var(--color-ink)] outline-none transition-colors"
                placeholder="Parolni kiriting..."
                autoFocus
              />
              {loginError && (
                <p className="text-xs text-red-500 mt-1">{loginError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[var(--color-emerald-brand)] text-white font-medium rounded-sm hover:bg-[var(--color-emerald-2)] transition-colors"
            >
              Kirish
            </button>
          </form>

          <div className="mt-6 p-3 bg-[var(--color-ivory)] rounded-sm">
            <p className="text-xs text-[var(--color-muted)]">
              <strong>Demo parol:</strong> admin2026
            </p>
          </div>

          <button
            onClick={onExit}
            className="mt-4 w-full text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            ← Saytga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-emerald-brand)] text-white flex flex-col shrink-0">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
              <span className="text-[var(--color-gold)] font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>E</span>
            </div>
            <div>
              <div className="font-semibold text-sm">ELLYCARDIN</div>
              <div className="text-xs text-white/50">Admin Panel</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {[
            { id: 'dashboard' as const, icon: LayoutDashboard, label: 'Boshqaruv paneli' },
            { id: 'inquiries' as const, icon: MessageSquare, label: "So'rovlar" },
            { id: 'products' as const, icon: Package, label: 'Mahsulotlar' },
            { id: 'faq' as const, icon: HelpCircle, label: 'FAQ' },
            { id: 'requisites' as const, icon: FileText, label: 'Rekvizitlar' },
            { id: 'texts' as const, icon: Globe, label: 'Sayt matnlari' },
            { id: 'settings' as const, icon: Settings, label: 'Sozlamalar' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors ${
                currentPage === item.id
                  ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)]'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <button
            onClick={onExit}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Eye size={18} />
            Saytni ko'rish
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-white/70 hover:text-red-300 hover:bg-white/5 transition-colors"
          >
            <LogOut size={18} />
            Chiqish
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'inquiries' && <InquiriesPage />}
          {currentPage === 'products' && <ProductsPage />}
          {currentPage === 'faq' && <FAQPage />}
          {currentPage === 'requisites' && <RequisitesPage />}
          {currentPage === 'texts' && <TextsPage />}
          {currentPage === 'settings' && <SettingsPage />}
        </div>
      </main>
    </div>
  );
}

// Dashboard
function DashboardPage() {
  const { data } = useStore();
  const newInquiries = data.inquiries.filter(i => i.status === 'new').length;
  const totalInquiries = data.inquiries.length;
  const totalProducts = data.products.uz.length;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Boshqaruv paneli
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={MessageSquare} label="Yangi so'rovlar" value={newInquiries} color="gold" />
        <StatCard icon={Users} label="Jami so'rovlar" value={totalInquiries} color="emerald" />
        <StatCard icon={Package} label="Mahsulotlar" value={totalProducts} color="blue" />
        <StatCard icon={BarChart3} label="Faol mahsulotlar" value={data.products.uz.filter(p => p.published).length} color="green" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-4">So'nggi so'rovlar</h2>
          {data.inquiries.length === 0 ? (
            <p className="text-sm text-[var(--color-muted)]">Hali so'rovlar yo'q</p>
          ) : (
            <div className="space-y-3">
              {data.inquiries.slice(0, 5).map(inq => (
                <div key={inq.id} className="flex items-center justify-between p-3 bg-[var(--color-ivory)] rounded-sm">
                  <div>
                    <div className="text-sm font-medium text-[var(--color-ink)]">#{inq.number} {inq.name}</div>
                    <div className="text-xs text-[var(--color-muted)]">{inq.product || 'Mahsulot tanlanmagan'}</div>
                  </div>
                  <StatusBadge status={inq.status} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-4">Tezkor ma'lumot</h2>
          <div className="space-y-3">
            <InfoRow label="Tillar" value="UZ / RU / EN" />
            <InfoRow label="Kategoriyalar" value="3 ta" />
            <InfoRow label="Oxirgi yangilanish" value={new Date().toLocaleDateString('uz-UZ')} />
            <InfoRow label="Server holati" value="Ishlayapti ✓" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: number; color: string }) {
  const colorClasses: Record<string, string> = {
    gold: 'bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)]',
    emerald: 'bg-[var(--color-emerald-brand)]/10 text-[var(--color-emerald-brand)]',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
  };

  return (
    <div className="bg-[var(--color-paper)] rounded-sm p-5">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
          <Icon size={20} />
        </div>
        <div>
          <div className="text-2xl font-semibold text-[var(--color-ink)]">{value}</div>
          <div className="text-xs text-[var(--color-muted)]">{label}</div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Inquiry['status'] }) {
  const config: Record<string, { label: string; className: string }> = {
    new: { label: 'Yangi', className: 'bg-blue-100 text-blue-700' },
    accepted: { label: 'Qabul qilingan', className: 'bg-yellow-100 text-yellow-700' },
    contacted: { label: "Bog'lanilgan", className: 'bg-purple-100 text-purple-700' },
    closed: { label: 'Yopiq', className: 'bg-green-100 text-green-700' },
    cancelled: { label: 'Bekor qilingan', className: 'bg-red-100 text-red-700' },
  };
  const c = config[status];
  return <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${c.className}`}>{c.label}</span>;
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--color-line)] last:border-0">
      <span className="text-sm text-[var(--color-muted)]">{label}</span>
      <span className="text-sm font-medium text-[var(--color-ink)]">{value}</span>
    </div>
  );
}

// Inquiries Page
function InquiriesPage() {
  const { data, updateInquiryStatus } = useStore();
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = data.inquiries.filter(inq => {
    if (filter !== 'all' && inq.status !== filter) return false;
    if (search && !inq.name.toLowerCase().includes(search.toLowerCase()) && !inq.phone.includes(search)) return false;
    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)]" style={{ fontFamily: 'var(--font-heading)' }}>
          So'rovlar
        </h1>
        <span className="text-sm text-[var(--color-muted)]">{filtered.length} ta so'rov</span>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ism yoki telefon bo'yicha qidirish..."
            className="w-full pl-9 pr-4 py-2 bg-[var(--color-paper)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-[var(--color-paper)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
        >
          <option value="all">Barcha holatlar</option>
          <option value="new">Yangi</option>
          <option value="accepted">Qabul qilingan</option>
          <option value="contacted">Bog'lanilgan</option>
          <option value="closed">Yopiq</option>
          <option value="cancelled">Bekor qilingan</option>
        </select>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="bg-[var(--color-paper)] rounded-sm p-12 text-center">
          <MessageSquare size={40} className="mx-auto text-[var(--color-muted)] mb-3" />
          <p className="text-[var(--color-muted)]">So'rovlar topilmadi</p>
        </div>
      ) : (
        <div className="bg-[var(--color-paper)] rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-ivory)]">
                <tr>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">№</th>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">Ism</th>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">Telefon</th>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">Mahsulot</th>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">Holat</th>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">Sana</th>
                  <th className="text-left p-3 font-medium text-[var(--color-muted)]">Amallar</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(inq => (
                  <tr key={inq.id} className="border-t border-[var(--color-line)]">
                    <td className="p-3 font-medium">#{inq.number}</td>
                    <td className="p-3">{inq.name}</td>
                    <td className="p-3 text-[var(--color-muted)]">{inq.phone}</td>
                    <td className="p-3">{inq.product || '—'}</td>
                    <td className="p-3"><StatusBadge status={inq.status} /></td>
                    <td className="p-3 text-[var(--color-muted)] text-xs">{new Date(inq.createdAt).toLocaleString('uz-UZ')}</td>
                    <td className="p-3">
                      <select
                        value={inq.status}
                        onChange={(e) => updateInquiryStatus(inq.id, e.target.value as Inquiry['status'])}
                        className="px-2 py-1 text-xs border border-[var(--color-line)] rounded-sm bg-transparent"
                      >
                        <option value="new">Yangi</option>
                        <option value="accepted">Qabul qilish</option>
                        <option value="contacted">Bog'lanish</option>
                        <option value="closed">Yopish</option>
                        <option value="cancelled">Bekor qilish</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// Products Page
function ProductsPage() {
  const { data, updateProducts } = useStore();
  const [activeLocale, setActiveLocale] = useState<Locale>('uz');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  const products = data.products[activeLocale] as Product[];

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm(product);
  };

  const saveEdit = () => {
    if (editingId === null) return;
    const updated = products.map((p: Product) => p.id === editingId ? { ...p, ...editForm } as Product : p);
    updateProducts(activeLocale, updated);
    setEditingId(null);
  };

  const addProduct = () => {
    const newId = Math.max(0, ...products.map((p: Product) => p.id)) + 1;
    const newProduct: Product = {
      id: newId,
      name: 'Yangi mahsulot',
      description: '',
      category: 'knit',
      specs: [''],
      featured: false,
      published: true,
    };
    updateProducts(activeLocale, [...products, newProduct]);
    startEdit(newProduct);
  };

  const deleteProduct = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) {
      updateProducts(activeLocale, products.filter((p: Product) => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Mahsulotlar
        </h1>
        <button
          onClick={addProduct}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-emerald-brand)] text-white rounded-sm text-sm hover:bg-[var(--color-emerald-2)] transition-colors"
        >
          <Plus size={16} /> Qo'shish
        </button>
      </div>

      {/* Locale Tabs */}
      <div className="flex gap-2 mb-6">
        {(['uz', 'ru', 'en'] as Locale[]).map(l => (
          <button
            key={l}
            onClick={() => setActiveLocale(l)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeLocale === l
                ? 'bg-[var(--color-emerald-brand)] text-white'
                : 'bg-[var(--color-paper)] text-[var(--color-muted)] border border-[var(--color-line)] hover:text-[var(--color-ink)]'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Products List */}
      <div className="space-y-3">
        {products.map(product => (
          <div key={product.id} className="bg-[var(--color-paper)] rounded-sm p-4">
            {editingId === product.id ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[var(--color-muted)] mb-1">Nomi</label>
                    <input
                      value={editForm.name || ''}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--color-muted)] mb-1">Kategoriya</label>
                    <select
                      value={editForm.category || 'knit'}
                      onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                      className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
                    >
                      <option value="knit">Trikotaj</option>
                      <option value="fabric">Mato</option>
                      <option value="special">Maxsus</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-muted)] mb-1">Tavsif</label>
                  <textarea
                    value={editForm.description || ''}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-muted)] mb-1">Xususiyatlar (har qator bittadan)</label>
                  <textarea
                    value={(editForm.specs || []).join('\n')}
                    onChange={(e) => setEditForm({ ...editForm, specs: e.target.value.split('\n') })}
                    rows={3}
                    className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)] resize-none"
                    placeholder="Tarkibi: 100% paxta&#10;Zichlik: 180 g/m²"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={editForm.published || false}
                      onChange={(e) => setEditForm({ ...editForm, published: e.target.checked })}
                      className="accent-[var(--color-gold)]"
                    />
                    Nashr qilingan
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={editForm.featured || false}
                      onChange={(e) => setEditForm({ ...editForm, featured: e.target.checked })}
                      className="accent-[var(--color-gold)]"
                    />
                    Bosh sahifada
                  </label>
                </div>
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-sm text-xs hover:bg-green-700">
                    <Save size={14} /> Saqlash
                  </button>
                  <button onClick={() => setEditingId(null)} className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-ivory)] text-[var(--color-muted)] rounded-sm text-xs hover:text-[var(--color-ink)]">
                    <X size={14} /> Bekor qilish
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--color-ink)]">{product.name}</span>
                    {product.published ? (
                      <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-700 rounded">Faol</span>
                    ) : (
                      <span className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-500 rounded">Qoralama</span>
                    )}
                    {product.featured && (
                      <span className="px-1.5 py-0.5 text-xs bg-[var(--color-gold)]/20 text-[var(--color-gold-dark)] rounded">★</span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-muted)] mt-1 line-clamp-1">{product.description}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(product)} className="p-2 text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">
                    <Edit3 size={16} />
                  </button>
                  <button onClick={() => deleteProduct(product.id)} className="p-2 text-[var(--color-muted)] hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// FAQ Page
function FAQPage() {
  const { data, updateFaq } = useStore();
  const [activeLocale, setActiveLocale] = useState<Locale>('uz');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<{ q: string; a: string }>({ q: '', a: '' });

  const items = data.faq[activeLocale] as FAQItem[];

  const startEdit = (item: FAQItem) => {
    setEditingId(item.id);
    setEditForm({ q: item.q, a: item.a });
  };

  const saveEdit = () => {
    if (editingId === null) return;
    const updated = items.map((f: FAQItem) => f.id === editingId ? { ...f, ...editForm } : f);
    updateFaq(activeLocale, updated);
    setEditingId(null);
  };

  const addItem = () => {
    const newId = Math.max(0, ...items.map((f: FAQItem) => f.id)) + 1;
    const newItem: FAQItem = { id: newId, q: 'Yangi savol', a: 'Javob...' };
    updateFaq(activeLocale, [...items, newItem]);
    startEdit(newItem);
  };

  const deleteItem = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) {
      updateFaq(activeLocale, items.filter((f: FAQItem) => f.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)]" style={{ fontFamily: 'var(--font-heading)' }}>
          FAQ (Ko'p beriladigan savollar)
        </h1>
        <button
          onClick={addItem}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-emerald-brand)] text-white rounded-sm text-sm hover:bg-[var(--color-emerald-2)] transition-colors"
        >
          <Plus size={16} /> Qo'shish
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {(['uz', 'ru', 'en'] as Locale[]).map(l => (
          <button
            key={l}
            onClick={() => setActiveLocale(l)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeLocale === l
                ? 'bg-[var(--color-emerald-brand)] text-white'
                : 'bg-[var(--color-paper)] text-[var(--color-muted)] border border-[var(--color-line)] hover:text-[var(--color-ink)]'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="bg-[var(--color-paper)] rounded-sm p-4">
            {editingId === item.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-[var(--color-muted)] mb-1">Savol</label>
                  <input
                    value={editForm.q}
                    onChange={(e) => setEditForm({ ...editForm, q: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-muted)] mb-1">Javob</label>
                  <textarea
                    value={editForm.a}
                    onChange={(e) => setEditForm({ ...editForm, a: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)] resize-none"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-sm text-xs hover:bg-green-700">
                    <Save size={14} /> Saqlash
                  </button>
                  <button onClick={() => setEditingId(null)} className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-ivory)] text-[var(--color-muted)] rounded-sm text-xs">
                    <X size={14} /> Bekor qilish
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-medium text-[var(--color-ink)]">{item.q}</div>
                  <p className="text-sm text-[var(--color-muted)] mt-1">{item.a}</p>
                </div>
                <div className="flex gap-2 ml-3">
                  <button onClick={() => startEdit(item)} className="p-2 text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">
                    <Edit3 size={16} />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="p-2 text-[var(--color-muted)] hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Requisites Page
function RequisitesPage() {
  const { data, updateRequisites } = useStore();
  const [activeLocale, setActiveLocale] = useState<Locale>('uz');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<{ label: string; value: string }>({ label: '', value: '' });

  const items = data.requisites[activeLocale] as Requisite[];

  const startEdit = (item: Requisite) => {
    setEditingId(item.id);
    setEditForm({ label: item.label, value: item.value });
  };

  const saveEdit = () => {
    if (editingId === null) return;
    const updated = items.map((r: Requisite) => r.id === editingId ? { ...r, ...editForm } : r);
    updateRequisites(activeLocale, updated);
    setEditingId(null);
  };

  const addItem = () => {
    const newId = Math.max(0, ...items.map((r: Requisite) => r.id)) + 1;
    const newItem: Requisite = { id: newId, label: 'Yangi maydon', value: '' };
    updateRequisites(activeLocale, [...items, newItem]);
    startEdit(newItem);
  };

  const deleteItem = (id: number) => {
    if (confirm("O'chirishni tasdiqlaysizmi?")) {
      updateRequisites(activeLocale, items.filter((r: Requisite) => r.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Rekvizitlar
        </h1>
        <button
          onClick={addItem}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-emerald-brand)] text-white rounded-sm text-sm hover:bg-[var(--color-emerald-2)] transition-colors"
        >
          <Plus size={16} /> Qo'shish
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {(['uz', 'ru', 'en'] as Locale[]).map(l => (
          <button
            key={l}
            onClick={() => setActiveLocale(l)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeLocale === l
                ? 'bg-[var(--color-emerald-brand)] text-white'
                : 'bg-[var(--color-paper)] text-[var(--color-muted)] border border-[var(--color-line)] hover:text-[var(--color-ink)]'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="bg-[var(--color-paper)] rounded-sm p-4">
            {editingId === item.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-[var(--color-muted)] mb-1">Nom</label>
                  <input
                    value={editForm.label}
                    onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-muted)] mb-1">Qiymat</label>
                  <input
                    value={editForm.value}
                    onChange={(e) => setEditForm({ ...editForm, value: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-sm text-xs hover:bg-green-700">
                    <Save size={14} /> Saqlash
                  </button>
                  <button onClick={() => setEditingId(null)} className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-ivory)] text-[var(--color-muted)] rounded-sm text-xs">
                    <X size={14} /> Bekor qilish
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[var(--color-muted)]">{item.label}</div>
                  <div className="font-medium text-[var(--color-ink)]">{item.value}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(item)} className="p-2 text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">
                    <Edit3 size={16} />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="p-2 text-[var(--color-muted)] hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Texts Page
function TextsPage() {
  const { data, updateSiteTexts } = useStore();
  const [activeLocale, setActiveLocale] = useState<Locale>('uz');
  const texts = data.siteTexts[activeLocale] as any;
  const [form, setForm] = useState(texts);

  useEffect(() => {
    setForm(data.siteTexts[activeLocale] as any);
  }, [activeLocale, data.siteTexts]);

  const save = () => {
    updateSiteTexts(activeLocale, form);
    alert('Saqlandi!');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)]" style={{ fontFamily: 'var(--font-heading)' }}>
          Sayt matnlari
        </h1>
        <button
          onClick={save}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-sm text-sm hover:bg-green-700 transition-colors"
        >
          <Save size={16} /> Saqlash
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {(['uz', 'ru', 'en'] as Locale[]).map(l => (
          <button
            key={l}
            onClick={() => setActiveLocale(l)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeLocale === l
                ? 'bg-[var(--color-emerald-brand)] text-white'
                : 'bg-[var(--color-paper)] text-[var(--color-muted)] border border-[var(--color-line)] hover:text-[var(--color-ink)]'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {/* Hero texts */}
        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-4">Hero bo'lim</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Sarlavha</label>
              <input
                value={form.hero.title}
                onChange={(e) => setForm({ ...form, hero: { ...form.hero, title: e.target.value } })}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Qo'shimcha sarlavha</label>
              <input
                value={form.hero.subtitle}
                onChange={(e) => setForm({ ...form, hero: { ...form.hero, subtitle: e.target.value } })}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Tavsif</label>
              <textarea
                value={form.hero.description}
                onChange={(e) => setForm({ ...form, hero: { ...form.hero, description: e.target.value } })}
                rows={3}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)] resize-none"
              />
            </div>
          </div>
        </div>

        {/* About texts */}
        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-4">Korxona haqida</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Sarlavha</label>
              <input
                value={form.about.title}
                onChange={(e) => setForm({ ...form, about: { ...form.about, title: e.target.value } })}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Tavsif</label>
              <textarea
                value={form.about.description}
                onChange={(e) => setForm({ ...form, about: { ...form.about, description: e.target.value } })}
                rows={4}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-4">Aloqa ma'lumotlari</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Telefonlar (har qator bittadan)</label>
              <textarea
                value={form.contacts.phones.join('\n')}
                onChange={(e) => setForm({ ...form, contacts: { ...form.contacts, phones: e.target.value.split('\n') } })}
                rows={3}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)] resize-none"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">E-mail</label>
              <input
                value={form.contacts.email}
                onChange={(e) => setForm({ ...form, contacts: { ...form.contacts, email: e.target.value } })}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--color-muted)] mb-1">Instagram</label>
              <input
                value={form.contacts.instagram}
                onChange={(e) => setForm({ ...form, contacts: { ...form.contacts, instagram: e.target.value } })}
                className="w-full px-3 py-2 bg-[var(--color-ivory)] border border-[var(--color-line)] rounded-sm text-sm outline-none focus:border-[var(--color-gold)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Page
function SettingsPage() {
  const { resetData } = useStore();

  const handleReset = () => {
    if (confirm("Barcha ma'lumotlar asl holatiga qaytariladi. Davom etasizmi?")) {
      resetData();
      alert("Ma'lumotlar qayta tiklandi!");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[var(--color-emerald-brand)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Sozlamalar
      </h1>

      <div className="space-y-6">
        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-3">Tizim haqida</h2>
          <div className="space-y-2 text-sm">
            <InfoRow label="Versiya" value="1.0.0" />
            <InfoRow label="Qurilgan sana" value={new Date().toLocaleDateString('uz-UZ')} />
            <InfoRow label="Ma'lumotlar bazasi" value="LocalStorage (demo)" />
            <InfoRow label="Tillar" value="UZ / RU / EN" />
          </div>
        </div>

        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-[var(--color-ink)] mb-3">Xavfsizlik</h2>
          <div className="space-y-2 text-sm">
            <InfoRow label="Admin parol" value="admin2026" />
            <InfoRow label="2FA" value="Yoqilmagan (demo)" />
          </div>
        </div>

        <div className="bg-[var(--color-paper)] rounded-sm p-5">
          <h2 className="font-semibold text-red-600 mb-3">Xavfli zona</h2>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Barcha ma'lumotlarni asl holatiga qaytarish. Bu amalni bekor qilib bo'lmaydi.
          </p>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-sm text-sm hover:bg-red-700 transition-colors"
          >
            <RefreshCw size={16} /> Ma'lumotlarni qayta tiklash
          </button>
        </div>
      </div>
    </div>
  );
}
