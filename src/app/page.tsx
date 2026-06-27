"use client";
import React, { useState } from 'react';
import { menuItems } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Phone, MapPin, Clock, Star, Trash2, Check, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LuxuryRestaurantHome() {
  const { cart, addToCart, removeFromCart, cartTotal, sendToWhatsApp } = useCart();
  const [activeCategory, setActiveCategory] = useState<'all' | 'bbq' | 'appetizers' | 'pastries'>('all');
  const [notes, setNotes] = useState('');
  const [deliveryType, setDeliveryType] = useState('delivery');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredMenu = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen font-sans">
      
      {/* --- HEADER NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#D4AF37]/20 px-4 py-3 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wide text-[#D4AF37]">مشويات دمشق القديمة</span>
          <span className="text-[10px] text-gray-400 font-mono tracking-widest">MASHWIYAT DAMASCUS OLD</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 bg-[#A40000] rounded-full hover:scale-105 transition-transform"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#D4AF37] text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200')] bg-cover bg-center opacity-20 scale-105 transition-transform duration-10000 ease-out animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A40000]/20 border border-[#A40000] rounded-full mb-4 text-[#D4AF37] text-sm font-semibold">
            <Flame className="w-4 h-4 animate-spin" /> أصالة المشويات الشامية في قلب الرياض
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
            تذوّق الفخامة على <span className="text-[#A40000]">أصولها الدمشقية</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-8 font-medium">
            نختار لحومنا الطازجة يومياً لنقدم لكم أرقى تشكيلة من الكباب، الأوصال، والريش المشوية على الفحم الملكي.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#menu" className="px-6 py-3 bg-[#A40000] hover:bg-[#A40000]/80 text-white font-bold rounded-lg transition-all shadow-lg shadow-[#A40000]/30">عرض المنيو</a>
            <a href="tel:+966508090118" className="px-6 py-3 bg-[#0F0F0F] border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all">اتصل بنا فوراً</a>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-[#141414] py-8 border-y border-[#D4AF37]/5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-2xl font-bold text-[#D4AF37]">+15,000</div><div className="text-xs text-gray-400">عميل سعيد</div></div>
          <div><div className="text-2xl font-bold text-[#A40000]">+25</div><div className="text-xs text-gray-400">صنف فاخر</div></div>
          <div><div className="text-2xl font-bold text-[#D4AF37]">100%</div><div className="text-xs text-gray-400">لحوم بلدية طازجة</div></div>
          <div><div className="text-2xl font-bold text-[#A40000]">3:30 AM</div><div className="text-xs text-gray-400">نخدمكم حتى الفجر</div></div>
        </div>
      </section>

      {/* --- DYNAMIC MENU SECTION --- */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-2 text-[#D4AF37]">قائمة الطعام الملكية</h2>
          <p className="text-gray-400 text-sm">استمتع باختيار وجبتك المفضلة وأكمل طلبك مباشرة عبر الواتساب</p>
        </div>

        {/* Categories Tab Filters */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {['all', 'bbq', 'appetizers', 'pastries'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-[#A40000] text-white border border-[#D4AF37]' 
                  : 'bg-[#141414] text-gray-400 hover:text-white'
              }`}
            >
              {cat === 'all' && 'كل الأصناف'}
              {cat === 'bbq' && '🔥 المشويات'}
              {cat === 'appetizers' && '🥣 المقبلات'}
              {cat === 'pastries' && '🍕 المعجنات الشامية'}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div 
              key={item.id}
              className="bg-[#141414] rounded-xl overflow-hidden border border-[#D4AF37]/10 p-5 flex flex-col justify-between hover:border-[#A40000] transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-4xl bg-[#0F0F0F] p-3 rounded-xl border border-gray-800 group-hover:scale-110 transition-transform">{item.image}</span>
                  <div className="flex items-center text-[#D4AF37] gap-1 text-sm bg-[#0F0F0F] px-2 py-1 rounded">
                    <Star className="w-3 h-3 fill-[#D4AF37]" /> {item.rating}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-[#D4AF37] transition-colors">{item.name_ar}</h3>
                <p className="text-xs text-gray-500 font-mono mb-2">{item.name_en}</p>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">{item.description_ar}</p>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                <div>
                  <span className="text-xl font-black text-[#D4AF37]">{item.price}</span>
                  <span className="text-[10px] text-gray-400 mr-1">ر.س</span>
                  <span className="block text-[10px] text-gray-500">{item.calories} كالوري</span>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-[#A40000] hover:bg-[#A40000]/80 text-white font-bold text-xs rounded-lg transition-transform active:scale-95"
                >
                  إضافة للسلة +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SIDEBAR LUXURY CART --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <div onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm" />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 right-0 md:left-auto md:w-[400px] h-full bg-[#111111] z-50 p-6 flex flex-col justify-between shadow-2xl border-r md:border-l border-[#D4AF37]/20"
            >
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
                  <h2 className="text-xl font-black text-[#D4AF37] flex items-center gap-2">
                    <ShoppingBag /> سلة المشتريات الفاخرة
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white font-bold">X اغلاق</button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">السلة فارغة حالياً، أضف بعض المشاوي الفاخرة! 🍢</div>
                ) : (
                  <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center bg-[#0F0F0F] p-3 rounded-lg border border-gray-800">
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.product.name_ar}</h4>
                          <span className="text-xs text-[#D4AF37]">{item.product.price} ر.س × {item.quantity}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-gray-800 pt-4 space-y-4">
                  {/* Delivery type options */}
                  <div className="grid grid-cols-2 gap-2 bg-[#0F0F0F] p-1 rounded-lg">
                    <button 
                      onClick={() => setDeliveryType('delivery')}
                      className={`py-2 text-xs font-bold rounded transition-all ${deliveryType === 'delivery' ? 'bg-[#A40000] text-white' : 'text-gray-400'}`}
                    >التوصيل للموقع</button>
                    <button 
                      onClick={() => setDeliveryType('pickup')}
                      className={`py-2 text-xs font-bold rounded transition-all ${deliveryType === 'pickup' ? 'bg-[#A40000] text-white' : 'text-gray-400'}`}
                    >استلام من الفرع</button>
                  </div>

                  {/* Order Notes */}
                  <textarea 
                    placeholder="ملاحظات إضافية (مثال: زيادة ثوم، بدون بصل، موقع التوصيل...)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2 bg-[#0F0F0F] border border-gray-800 rounded text-xs text-white focus:border-[#D4AF37] outline-none h-16 resize-none"
                  />

                  {/* Total and Send Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">المجموع الإجمالي:</span>
                    <span className="text-xl font-black text-[#D4AF37]">{cartTotal} ر.س</span>
                  </div>

                  <button
                    onClick={() => sendToWhatsApp(notes, deliveryType)}
                    className="w-full py-3 bg-[#A40000] hover:bg-[#A40000]/90 text-white font-bold rounded-lg text-center shadow-lg transition-transform active:scale-95 flex justify-center items-center gap-2"
                  >
                    تأكيد الطلب عبر الـ WhatsApp 🚀
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- LOCATION & INFO SECTION --- */}
      <section className="bg-[#141414] py-16 px-4 border-t border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">تشرفنا بزيارتكم في الرياض</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              موقعنا مجهز بأرقى الجلسات العائلية والشبابية لنقدم لكم تجربة دمشقية متكاملة. تفضلوا بزيارتنا أو اطلبوا مباشرة لصلتكم الوجبات ساخنة وطازجة.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300"><MapPin className="text-[#A40000] w-5 h-5" /> حي سلطانة – شارع السويدي العام – الرياض</div>
              <div className="flex items-center gap-3 text-sm text-gray-300"><Phone className="text-[#A40000] w-5 h-5" /> +966 50 809 0118</div>
              <div className="flex items-center gap-3 text-sm text-gray-300"><Clock className="text-[#A40000] w-5 h-5" /> يومياً من الظهر حتى الساعة 3:30 بعد منتصف الليل</div>
            </div>
          </div>
          <div className="h-64 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative flex items-center justify-center">
            <span className="text-gray-600 text-xs text-center p-4">الخريطة التفاعلية الفاخرة للفرع<br />[حي سلطانة - شارع السويدي العام]</span>
            <div className="absolute bottom-4 right-4 bg-[#A40000] text-white font-bold text-xs px-3 py-2 rounded shadow-lg cursor-pointer">خرائط Google</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center py-8 text-gray-600 text-xs border-t border-gray-900 max-w-6xl mx-auto">
        <p>© 2026 مشويات دمشق القديمة (Mashwiyat Damascus Old). جميع الحقوق محفوظة.</p>
        <p className="mt-1 text-[#D4AF37]/50 font-mono">Premium Arabic Grill Platform Built via Termux & Next.js 15</p>
      </footer>

    </div>
  );
}

