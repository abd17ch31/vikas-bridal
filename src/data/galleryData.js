import galleryTurquoiseBridal from '../assets/images/gallery_turquoise_bridal_1791803820256.jpg';
import galleryTraditionalIntricate from '../assets/images/gallery_traditional_intricate_1791803832929.jpg';
import galleryRedBridal from '../assets/images/gallery_red_bridal_1791803843238.jpg';
import galleryOpenPalms from '../assets/images/gallery_open_palms_1791803856555.jpg';
import galleryArmDesign from '../assets/images/gallery_arm_design_1791803875379.jpg';
import gallerySymmetricalPalms from '../assets/images/gallery_symmetrical_palms_1791803890159.jpg';

const whatsappBase = 'https://wa.me/919351260318?text=';
const instagramProfile = 'https://www.instagram.com/vikashmehandiart01';

export const galleryData = [
  {
    id: 'gallery-1-turquoise-bridal',
    title: 'Turquoise Bridal Styling',
    image: galleryTurquoiseBridal,
    alt: 'Intricate bridal mehndi on both arms and palms against a royal turquoise wedding lehenga with golden jewelry',
    category: 'Bridal Mehndi',
    instagramUrl: instagramProfile,
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in this Turquoise Bridal mehndi design.',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in this Turquoise Bridal mehndi design.')}`,
    detailsUrl: '/gallery/turquoise-bridal',
    objectPosition: 'center 30%',
  },
  {
    id: 'gallery-2-traditional-intricate',
    title: 'Traditional Intricate Mehndi',
    image: galleryTraditionalIntricate,
    alt: 'Graceful hands adorned with traditional Rajasthani bridal henna patterns and golden hathphool ornaments',
    category: 'Traditional Mehndi',
    instagramUrl: instagramProfile,
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in this Traditional Intricate mehndi design.',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in this Traditional Intricate mehndi design.')}`,
    detailsUrl: '/gallery/traditional-intricate',
    objectPosition: 'center center',
  },
  {
    id: 'gallery-3-red-bridal',
    title: 'Crimson Velvet Bridal Styling',
    image: galleryRedBridal,
    alt: 'Close-up of bridal hands covered in dense fine-line henna artwork with traditional red chooda bangles',
    category: 'Bridal Mehndi',
    instagramUrl: instagramProfile,
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in this Crimson Velvet Bridal mehndi design.',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in this Crimson Velvet Bridal mehndi design.')}`,
    detailsUrl: '/gallery/crimson-bridal',
    objectPosition: 'center 40%',
  },
  {
    id: 'gallery-4-open-palms',
    title: 'Open-Palm Mandala Designs',
    image: galleryOpenPalms,
    alt: 'Both palms raised showing intricate mandala and paisley henna motifs against deep burgundy velvet',
    category: 'Mandala Mehndi',
    instagramUrl: instagramProfile,
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in this Open-Palm Mandala mehndi design.',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in this Open-Palm Mandala mehndi design.')}`,
    detailsUrl: '/gallery/open-palms-mandala',
    objectPosition: 'center center',
  },
  {
    id: 'gallery-5-arm-design',
    title: 'Fine Peacock Arm Motif',
    image: galleryArmDesign,
    alt: 'Detailed mehndi motif on bridal forearm featuring delicate peacock feather and floral jali detailing',
    category: 'Bridal Forearm',
    instagramUrl: instagramProfile,
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in this Fine Peacock Arm mehndi design.',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in this Fine Peacock Arm mehndi design.')}`,
    detailsUrl: '/gallery/peacock-arm-motif',
    objectPosition: 'center center',
  },
  {
    id: 'gallery-6-symmetrical-palms',
    title: 'Symmetrical Lotus Palms',
    image: gallerySymmetricalPalms,
    alt: 'Both hands displaying coordinated circular mehndi patterns on palms with lotus fingertips on raw silk',
    category: 'Bridal Palms',
    instagramUrl: instagramProfile,
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in this Symmetrical Lotus Palms mehndi design.',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in this Symmetrical Lotus Palms mehndi design.')}`,
    detailsUrl: '/gallery/symmetrical-lotus-palms',
    objectPosition: 'center 35%',
  },
];

export default galleryData;
