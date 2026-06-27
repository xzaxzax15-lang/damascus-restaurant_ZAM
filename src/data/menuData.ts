export interface MenuItem {
  id: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  price: number;
  category: 'bbq' | 'appetizers' | 'oven' | 'pastries' | 'pizza' | 'drinks';
  calories: number;
  rating: number;
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'bbq-1',
    name_ar: 'مشكل دمشق القديمة الفاخر',
    name_en: 'Damascus Old Luxury Mix',
    description_ar: 'تشكيلة ملكية من كباب اللحم، الأوصال، شيش الطاووق، وريش الغنم المشوية على الفحم الطبيعي.',
    description_en: 'A royal selection of meat kebab, awsal, shish tawook, and lamb chops grilled over natural charcoal.',
    price: 85,
    category: 'bbq',
    calories: 820,
    rating: 5.0,
    image: '🍢',
    featured: true
  },
  {
    id: 'bbq-2',
    name_ar: 'كباب لحم شامي',
    name_en: 'Shami Meat Kebab',
    description_ar: 'لحم غنم بلدي مفروم مع التتبيلة الدمشقية السرية والبقدونس والبصل.',
    description_en: 'Local lamb minced with secret Damascus seasoning, parsley, and onions.',
    price: 45,
    category: 'bbq',
    calories: 540,
    rating: 4.9,
    image: '🥩',
    featured: true
  },
  {
    id: 'bbq-3',
    name_ar: 'شيش طاووق اسبيشل',
    name_en: 'Special Shish Tawook',
    description_ar: 'قطع دجاج متبلة بالثوم، الليمون، وزيت الزيتون البكر مشوية بعناية.',
    description_en: 'Chicken cubes marinated in garlic, lemon, and virgin olive oil perfectly grilled.',
    price: 40,
    category: 'bbq',
    calories: 460,
    rating: 4.8,
    image: '🍗'
  },
  {
    id: 'app-1',
    name_ar: 'حمص دمشقي باللحم والبرنس',
    name_en: 'Damascus Hummus with Meat',
    description_ar: 'حمص ناعم مغطى بقطع لحم الغنم المحمرة والمكسرات المحمصة وزيت الزيتون.',
    description_en: 'Smooth hummus topped with sautéed lamb pieces, toasted nuts, and olive oil.',
    price: 28,
    category: 'appetizers',
    calories: 420,
    rating: 4.9,
    image: '🥣',
    featured: true
  },
  {
    id: 'app-2',
    name_ar: 'متبل باذنجان مشوي',
    name_en: 'Mutabbal Grilled Eggplant',
    description_ar: 'باذنجان مشوي على الفحم مخلوط مع الطحينة الفاخرة والليمون.',
    description_en: 'Charcoal-grilled eggplant mashed with premium tahini and fresh lemon.',
    price: 18,
    category: 'appetizers',
    calories: 180,
    rating: 4.7,
    image: '🍆'
  },
  {
    id: 'past-1',
    name_ar: 'صفيحة شامية بدبس الرمان',
    name_en: 'Shami Sfiha with Pomegranate Molasses',
    description_ar: 'عجين مقرمش مغطى باللحم المفروم المتبل بدبس الرمان الشامي الأصيل.',
    description_en: 'Crispy dough topped with minced meat seasoned with authentic Shami pomegranate molasses.',
    price: 32,
    category: 'pastries',
    calories: 390,
    rating: 4.9,
    image: '🍕'
  }
];

