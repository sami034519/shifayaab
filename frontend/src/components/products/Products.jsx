import diafix1 from '../../images/diafixsingle.png';
import diafix2 from '../../images/Diafixdouble-removebg-preview.png';
import uricare from '../../images/uricaresingle1.png';
import uricare2 from '../../images/Uricaredouble-removebg-preview.png';
import slim1 from '../../images/slimsingle.png';
import slim2 from '../../images/Slimdouble-removebg-preview.png';
import hercare1 from '../../images/herbalancesingle.png';
import hercare2 from '../../images/HerBalance2-removebg-preview.png';
 export const products = [
  {
    id: 'diafix',
    title: 'Diafix',
    price: 1250,
    image: diafix1,
    hoverImage: diafix2,
    category: 'Diabetic Support',
    bgColor: '#043f64',
    description: 'Diafix is a natural formulation designed to support healthy blood sugar levels and insulin function.',
    features: [
      'Helps maintain normal blood glucose',
      'Supports insulin sensitivity',
      'Natural herbal formulation'
    ],
    ingredients: 'Gymnema Sylvestre, Cinnamon Extract, Fenugreek Seed, Bitter Melon',
    usage: 'Take 1–2 tablets daily after meals or as advised by your physician.',
    form: 'Tablets',
    quantity: '60 Tablets',
    benefits: [
      'Supports healthy blood sugar metabolism',
      'Helps reduce sugar cravings',
      'Aids in insulin function'
    ]
  },
  {
    id: 'uricare',
    title: 'Uricare',
    price: 1450,
    image: uricare,
    hoverImage: uricare2,
    category: 'Kidney Health',
    bgColor: '#4d052e',
    description: 'Uricare supports urinary tract and kidney health with potent natural ingredients.',
    features: [
      'Promotes urinary tract health',
      'Flushes out toxins naturally',
      'Supports healthy kidney function'
    ],
    ingredients: 'Punarnava, Varuna, Gokshura, Shilajit',
    usage: 'Take 1 capsule twice a day with water or as directed by your physician.',
    form: 'Capsules',
    quantity: '60 Capsules',
    benefits: [
      'Helps detoxify kidneys and urinary system',
      'Reduces inflammation and supports fluid balance',
      'Improves overall kidney function'
    ]
  },
  {
    id: 'slimfit',
    title: 'Slim Fit',
    price: 1150,
    image: slim1,
    hoverImage: slim2,
    category: 'Weight Management',
    bgColor: '#59612e',
    description: 'Slim Fit helps in managing weight naturally by boosting metabolism and curbing appetite.',
    features: [
      'Supports healthy weight loss',
      'Boosts metabolism',
      'Reduces appetite naturally'
    ],
    ingredients: 'Garcinia Cambogia, Green Tea Extract, Black Pepper, Apple Cider Vinegar',
    usage: 'Take 1 tablet 30 minutes before meals twice a day.',
    form: 'Tablets',
    quantity: '60 Tablets',
    benefits: [
      'Helps in fat burning and appetite control',
      'Improves energy levels during weight loss',
      'Natural metabolism enhancer'
    ]
  },
  {
    id: 'herbalance',
    title: 'HerBalance',
    price: 1350,
    image: hercare1,
    hoverImage: hercare2,
    category: "Women's Health",
    bgColor: '#5d0f41',
    description: 'HerBalance is formulated to support hormonal balance, menstrual health, and reproductive well-being in women.',
    features: [
      'Balances female hormones',
      'Eases PMS and menstrual discomfort',
      'Supports reproductive health'
    ],
    ingredients: 'Shatavari, Ashwagandha, Vitex, Evening Primrose Oil',
    usage: 'Take 1–2 capsules daily with meals or as directed by a physician.',
    form: 'Capsules',
    quantity: '60 Capsules',
    benefits: [
      'Promotes hormonal balance',
      'Improves mood and energy levels',
      'Supports menstrual cycle regulation'
    ]
  }
];

 export const categories = [
  "Womens Health",
  "Beauty Health",
  "Weight Management",
  "Kids Health",
  "Bones and Joints",
  "Diabetic Support",
  "Mens Health",
  "Heart Health",
  "Immune Health",
  "Fertility Support",
  "Vitamins and Minerals",
  "Brain and Vision",
  "Stress and Sleep",
  "Syrups"
];
