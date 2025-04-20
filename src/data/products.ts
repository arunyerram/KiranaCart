export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
  subCategory?: string;
  description: string;
  unit: string;
  stock: number;
  isFeatured?: boolean;
  isOnSale?: boolean;
  nameHi?: string;
  nameTe?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  parentCategory: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Existing products
  {
    id: '1',
    name: 'Fresh Tomatoes',
    nameHi: 'ताजा टमाटर',
    nameTe: 'తాజా టమాటాలు',
    price: 40,
    salePrice: 35,
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337',
    category: 'vegetables',
    description: 'Fresh, ripe tomatoes sourced from local farms. Perfect for salads, curries and more.',
    unit: '500g',
    stock: 50,
    isFeatured: true,
    isOnSale: true,
  },
  {
    id: '2',
    name: 'Basmati Rice',
    nameHi: 'बासमती चावल',
    nameTe: 'బాస్మతి బియ్యం',
    price: 120,
    image: 'https://images.unsplash.com/photo-1568347877321-d8fdd88d6e76',
    category: 'staples',
    description: 'Premium quality aged basmati rice, perfect for biryanis and pulao.',
    unit: '1kg',
    stock: 100,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Toor Dal',
    nameHi: 'तूर दाल',
    nameTe: 'కందిపప్పు',
    price: 90,
    salePrice: 75,
    image: 'https://images.unsplash.com/photo-1631898039984-fd5322b5587c',
    category: 'pulses',
    subCategory: 'toor',
    description: 'High protein toor dal, essential for everyday cooking.',
    unit: '500g',
    stock: 75,
    isOnSale: true,
  },
  {
    id: '4',
    name: 'Cold-Pressed Coconut Oil',
    nameHi: 'कोल्ड-प्रेस्ड नारियल तेल',
    nameTe: 'కోల్డ్-ప్రెస్డ్ కొబ్బరి నూనె',
    price: 250,
    image: 'https://images.unsplash.com/photo-1601315379934-2d2c0e7c56ba',
    category: 'oils',
    description: 'Organic, cold-pressed coconut oil for cooking and skincare.',
    unit: '500ml',
    stock: 30,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Organic Brown Sugar',
    nameHi: 'ऑर्गेनिक ब्राउन शुगर',
    nameTe: 'సేంద్రీయ బ్రౌన్ షుగర్',
    price: 75,
    image: 'https://images.unsplash.com/photo-1596271075934-0b0df15ae399',
    category: 'staples',
    description: 'Unprocessed brown sugar with natural molasses.',
    unit: '500g',
    stock: 60,
  },
  {
    id: '6',
    name: 'Fresh Green Peas',
    nameHi: 'ताजा हरी मटर',
    nameTe: 'తాజా ఆకుపచ్చ బఠానీలు',
    price: 60,
    salePrice: 50,
    image: 'https://images.unsplash.com/photo-1587049693170-9a8c5690dc7e',
    category: 'vegetables',
    description: 'Tender green peas freshly shelled.',
    unit: '250g',
    stock: 40,
    isOnSale: true,
  },
  {
    id: '7',
    name: 'Turmeric Powder',
    nameHi: 'हल्दी पाउडर',
    nameTe: 'పసుపు పొడి',
    price: 65,
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9921ac',
    category: 'spices',
    description: 'Pure turmeric powder for vibrant and flavorful cooking.',
    unit: '100g',
    stock: 80,
  },
  {
    id: '8',
    name: 'Mustard Oil',
    nameHi: 'सरसों का तेल',
    nameTe: 'ఆవ నూనె',
    price: 180,
    image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1',
    category: 'oils',
    description: 'Traditional mustard oil with a strong flavor.',
    unit: '1L',
    stock: 45,
  },
  {
    id: '9',
    name: 'Red Chili Powder',
    nameHi: 'लाल मिर्च पाउडर',
    nameTe: 'ఎర్ర మిరప పొడి',
    price: 70,
    image: 'https://images.unsplash.com/photo-1631868254682-56afc32e3f2c',
    category: 'spices',
    description: 'Spicy red chili powder to add heat to your dishes.',
    unit: '100g',
    stock: 65,
    isFeatured: true,
  },
  {
    id: '10',
    name: 'Fresh Potatoes',
    nameHi: 'ताजा आलू',
    nameTe: 'తాజా బంగాళాదుంపలు',
    price: 30,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    category: 'vegetables',
    description: 'Farm-fresh potatoes, perfect for curries, fries, and more.',
    unit: '1kg',
    stock: 150,
  },
  {
    id: '11',
    name: 'Whole Wheat Atta',
    nameHi: 'साबुत गेहूं का आटा',
    nameTe: 'పూర్తి గోధుమ పిండి',
    price: 60,
    salePrice: 55,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    category: 'staples',
    description: 'Stone-ground whole wheat flour for soft rotis and chapatis.',
    unit: '1kg',
    stock: 120,
    isOnSale: true,
  },
  {
    id: '12',
    name: 'Garam Masala',
    nameHi: 'गरम मसाला',
    nameTe: 'గరం మసాలా',
    price: 95,
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757',
    category: 'spices',
    description: 'Aromatic blend of spices for authentic Indian cooking.',
    unit: '100g',
    stock: 55,
  },
  
  // Adding new subcategory products: Pulses
  {
    id: '13',
    name: 'Moong Dal',
    nameHi: 'मूंग दाल',
    nameTe: 'పెసరపప్పు',
    price: 85,
    image: 'https://images.unsplash.com/photo-1643152460782-e7aa0df5544b',
    category: 'pulses',
    subCategory: 'moong',
    description: 'Split yellow mung beans, perfect for khichdi and dal dishes.',
    unit: '500g',
    stock: 60,
  },
  {
    id: '14',
    name: 'Urad Dal',
    nameHi: 'उड़द दाल',
    nameTe: 'మినుములు',
    price: 95,
    image: 'https://images.unsplash.com/photo-1611575330633-551252bafff6',
    category: 'pulses',
    subCategory: 'urad',
    description: 'Split black gram, essential for South Indian dishes.',
    unit: '500g',
    stock: 45,
  },
  {
    id: '15',
    name: 'Chana Dal',
    nameHi: 'चना दाल',
    nameTe: 'శనగపప్పు',
    price: 70,
    salePrice: 65,
    image: 'https://images.unsplash.com/photo-1612257999276-ace27ff998fd',
    category: 'pulses',
    subCategory: 'chana',
    description: 'Split chickpeas with a nutty flavor, ideal for curries and soups.',
    unit: '500g',
    stock: 55,
    isOnSale: true,
  },
  
  // Cool Drinks
  {
    id: '16',
    name: 'Thums Up',
    nameHi: 'थम्स अप',
    nameTe: 'థమ్స్ అప్',
    price: 35,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
    category: 'beverages',
    subCategory: 'cool_drinks',
    description: 'Strong, carbonated cola drink with a distinct spicy flavor.',
    unit: '500ml',
    stock: 120,
  },
  {
    id: '17',
    name: 'Sprite',
    nameHi: 'स्प्राइट',
    nameTe: 'స్ప్రైట్',
    price: 35,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3',
    category: 'beverages',
    subCategory: 'cool_drinks',
    description: 'Crisp, refreshing lemon-lime flavored soft drink.',
    unit: '500ml',
    stock: 110,
  },
  {
    id: '18',
    name: 'Maaza',
    nameHi: 'माज़ा',
    nameTe: 'మజా',
    price: 30,
    salePrice: 28,
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467',
    category: 'beverages',
    subCategory: 'cool_drinks',
    description: 'Rich mango-flavored fruit drink.',
    unit: '500ml',
    stock: 90,
    isOnSale: true,
  },
  
  // Chocolates
  {
    id: '19',
    name: 'Dairy Milk',
    nameHi: 'डेयरी मिल्क',
    nameTe: 'డెయిరీ మిల్క్',
    price: 50,
    image: 'https://images.unsplash.com/photo-1623334044183-21e26fd10a22',
    category: 'snacks',
    subCategory: 'chocolates',
    description: 'Creamy milk chocolate bar.',
    unit: '50g',
    stock: 75,
    isFeatured: true,
  },
  {
    id: '20',
    name: 'KitKat',
    nameHi: 'किटकैट',
    nameTe: 'కిట్ కాట్',
    price: 40,
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f',
    category: 'snacks',
    subCategory: 'chocolates',
    description: 'Crispy wafer fingers covered in milk chocolate.',
    unit: '45g',
    stock: 65,
  },
  
  // Biscuits
  {
    id: '21',
    name: 'Parle-G',
    nameHi: 'पार्ले-जी',
    nameTe: 'పార్లే-జి',
    price: 10,
    image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de',
    category: 'snacks',
    subCategory: 'biscuits',
    description: 'Popular glucose biscuits with a sweet taste.',
    unit: '70g',
    stock: 150,
  },
  {
    id: '22',
    name: 'Marie Gold',
    nameHi: 'मैरी गोल्ड',
    nameTe: 'మేరీ గోల్డ్',
    price: 20,
    image: 'https://images.unsplash.com/photo-1574919692228-b15365a8ffe7',
    category: 'snacks',
    subCategory: 'biscuits',
    description: 'Light, crispy tea biscuits.',
    unit: '120g',
    stock: 85,
  },
  
  // Dairy Products
  {
    id: '23',
    name: 'Fresh Milk',
    nameHi: 'ताज़ा दूध',
    nameTe: 'తాజా పాలు',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    category: 'dairy',
    subCategory: 'milk',
    description: 'Farm-fresh pasteurized milk.',
    unit: '500ml',
    stock: 40,
    isFeatured: true,
  },
  {
    id: '24',
    name: 'Natural Curd',
    nameHi: 'प्राकृतिक दही',
    nameTe: 'సహజ పెరుగు',
    price: 45,
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5',
    category: 'dairy',
    subCategory: 'curd',
    description: 'Creamy, naturally set curd/yogurt.',
    unit: '400g',
    stock: 30,
  }
];

export const categories: Category[] = [
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6',
    description: 'Farm-fresh vegetables delivered to your doorstep'
  },
  {
    id: 'fruits',
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b',
    description: 'Juicy and nutritious fruits for a healthy diet'
  },
  {
    id: 'staples',
    name: 'Staples',
    image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1',
    description: 'Everyday essentials for your kitchen'
  },
  {
    id: 'pulses',
    name: 'Pulses & Lentils',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe65ed',
    description: 'Protein-rich pulses and lentils for daily meals',
    subCategories: [
      {
        id: 'toor',
        name: 'Toor Dal',
        parentCategory: 'pulses',
        image: 'https://images.unsplash.com/photo-1631898039984-fd5322b5587c',
        description: 'Yellow split pigeon peas'
      },
      {
        id: 'moong',
        name: 'Moong Dal',
        parentCategory: 'pulses',
        image: 'https://images.unsplash.com/photo-1643152460782-e7aa0df5544b',
        description: 'Split yellow mung beans'
      },
      {
        id: 'urad',
        name: 'Urad Dal',
        parentCategory: 'pulses',
        image: 'https://images.unsplash.com/photo-1611575330633-551252bafff6',
        description: 'Split black gram'
      },
      {
        id: 'chana',
        name: 'Chana Dal',
        parentCategory: 'pulses',
        image: 'https://images.unsplash.com/photo-1612257999276-ace27ff998fd',
        description: 'Split chickpeas'
      }
    ]
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757',
    description: 'Aromatic spices to elevate your cooking'
  },
  {
    id: 'oils',
    name: 'Oils & Ghee',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5',
    description: 'Pure cooking oils and ghee for healthy cooking'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    image: 'https://images.unsplash.com/photo-1544252890-c3e95e760772',
    description: 'Refreshing drinks for every occasion',
    subCategories: [
      {
        id: 'cool_drinks',
        name: 'Cool Drinks',
        parentCategory: 'beverages',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
        description: 'Refreshing carbonated beverages'
      },
      {
        id: 'juices',
        name: 'Fruit Juices',
        parentCategory: 'beverages',
        image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd',
        description: 'Natural and packaged fruit juices'
      }
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks & Sweets',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087',
    description: 'Delicious treats for anytime cravings',
    subCategories: [
      {
        id: 'chocolates',
        name: 'Chocolates',
        parentCategory: 'snacks',
        image: 'https://images.unsplash.com/photo-1623334044183-21e26fd10a22',
        description: 'Delightful chocolate treats'
      },
      {
        id: 'biscuits',
        name: 'Biscuits & Cookies',
        parentCategory: 'snacks',
        image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de',
        description: 'Crunchy biscuits for tea time'
      }
    ]
  },
  {
    id: 'dairy',
    name: 'Dairy Products',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    description: 'Fresh dairy products for your daily needs',
    subCategories: [
      {
        id: 'milk',
        name: 'Milk',
        parentCategory: 'dairy',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
        description: 'Fresh milk varieties'
      },
      {
        id: 'curd',
        name: 'Curd & Yogurt',
        parentCategory: 'dairy',
        image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5',
        description: 'Fresh curd and yogurt products'
      }
    ]
  }
];

export const getSubCategories = (): SubCategory[] => {
  return categories
    .filter(category => category.subCategories)
    .flatMap(category => category.subCategories || []);
};

export const getAllCategories = (): (Category | SubCategory)[] => {
  const mainCategories = categories.map(({ subCategories, ...rest }) => rest);
  const subCategories = getSubCategories();
  return [...mainCategories, ...subCategories];
};
