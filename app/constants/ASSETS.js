import { Constants } from 'expo';

const { API_URL } = Constants.manifest.extra;

const FONTS = [
  { 'barlow-thin': require('../../assets/fonts/Barlow/Barlow-Thin.ttf') },
  { 'barlow-thin-italic': require('../../assets/fonts/Barlow/Barlow-ThinItalic.ttf') },
  { 'barlow-extra-light': require('../../assets/fonts/Barlow/Barlow-ExtraLight.ttf') },
  { 'barlow-extra-light-italic': require('../../assets/fonts/Barlow/Barlow-ExtraLightItalic.ttf') },
  { 'barlow-light': require('../../assets/fonts/Barlow/Barlow-Light.ttf') },
  { 'barlow-light-italic': require('../../assets/fonts/Barlow/Barlow-LightItalic.ttf') },
  { 'barlow-regular': require('../../assets/fonts/Barlow/Barlow-Regular.ttf') },
  { 'barlow-regular-italic': require('../../assets/fonts/Barlow/Barlow-Italic.ttf') },
  { 'barlow-medium': require('../../assets/fonts/Barlow/Barlow-Medium.ttf') },
  { 'barlow-medium-italic': require('../../assets/fonts/Barlow/Barlow-MediumItalic.ttf') },
  { 'barlow-semi-bold': require('../../assets/fonts/Barlow/Barlow-SemiBold.ttf') },
  { 'barlow-semi-bold-italic': require('../../assets/fonts/Barlow/Barlow-SemiBoldItalic.ttf') },
  { 'barlow-bold': require('../../assets/fonts/Barlow/Barlow-Bold.ttf') },
  { 'barlow-bold-italic': require('../../assets/fonts/Barlow/Barlow-BoldItalic.ttf') },
  { 'barlow-extra-bold': require('../../assets/fonts/Barlow/Barlow-ExtraBold.ttf') },
  { 'barlow-extra-bold-italic': require('../../assets/fonts/Barlow/Barlow-ExtraBoldItalic.ttf') },
  { 'barlow-black': require('../../assets/fonts/Barlow/Barlow-Black.ttf') },
  { 'barlow-black-italic': require('../../assets/fonts/Barlow/Barlow-BlackItalic.ttf') },
];

const WEIGHT = {
  '100': '-thin',
  '200': '-extra-light',
  '300': '-light',
  '400': '-regular',
  '500': '-medium',
  '600': '-semi-bold',
  '700': '-bold',
  '900': '-black',
  'thin': '-thin',
  'extra-light': '-extra-light',
  'light': '-light',
  'regular': '-regular',
  'medium': '-medium',
  'semi-bold': '-semi-bold',
  'bold': '-bold',
  'black': '-black',
};

const CACHE_IMAGES = [
  require('../../assets/images/illustrations-v3/PolarBearFistUp3x.png'),
  require('../../assets/images/illustrations-v3/PolarBearHODL3x.png'),
  require('../../assets/images/illustrations-v3/PolarBearSad3x.png'),
  require('../../assets/images/illustrations-v3/stamp3x.png'),
  require('../../assets/images/bear-happyKYC3x.png'),
  require('../../assets/images/deerTransactionHistory.png'),
  require('../../assets/images/illuNoKYC3x.png'),
  require('../../assets/images/OfflineMode/deer-tangled3x.png'),
  require('../../assets/images/diane-sad.png'),
  require('../../assets/images/empty-profile/empty-profile.png'),
  require('../../assets/images/icons/contacts-circle/contacts-circle.png'),
  require('../../assets/images/icons/fb-circle/fb-circle.png'),
  require('../../assets/images/icons/tw-circle/tw-circle.png'),
  require('../../assets/images/frenchy.png'),
  require('../../assets/images/mask/card-mask-transparent.png'),
  require('../../assets/images/mask/circle-mask.png'),
  require('../../assets/images/mask/square-mask-01.png'),
  require('../../assets/images/authSuccess3x.png'),
  require('../../assets/images/illustrations-v3/Dog/profile-dog.png'),
  require('../../assets/images/emptyStates/KYC-Failed.png'),
  require('../../assets/images/emptyStates/KYC-Pending.png'),
  require('../../assets/images/splashScreen-celsius.png'),
  require('../../assets/images/money-bear3x.png'),
  require('../../assets/images/victory-bear3x.png'),
  require('../../assets/images/loyaltyIcons/hodl-ratiox.png'),
  require('../../assets/images/loyaltyIcons/level-upx.png'),
  require('../../assets/images/loyaltyIcons/membershipx.png'),
  require('../../assets/images/loyaltyIcons/withdrawx.png'),
  require('../../assets/images/loyaltyIcons/HODL-ratio.png'),
  require('../../assets/images/loyaltyIcons/star-bg3x.png'),
  require('../../assets/images/loyaltyIcons/star-icon3x.png'),
  require('../../assets/images/loyaltyIcons/reward-icon3x.png'),
  require('../../assets/images/HODL-loyalty3x.png'),
  require('../../assets/images/Onboarding-Welcome3x.png'),
  require("../../assets/images/PartnerLogos/DP.png"),
  require("../../assets/images/PartnerLogos/BitGo.png"),
  require("../../assets/images/PartnerLogos/EY.png"),
  require("../../assets/images/PartnerLogos/mvp_workshop.png"),
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/bear/profile-bear.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/cat/profile-cat.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/deer/profile-deer.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/diane/profile-diane.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/dog/profile-dog.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/fox/profile-fox.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/hyppo/profile-hyppo.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/monkeyboy/profile-monkeyboy.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/monkeygirl/profile-monkeygirl.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/shark/profile-shark.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/sheep/profile-sheep.png`,
  `${API_URL.replace('/api/v3', '')}/profile-images/avatar/unicorn/profile-unicorn.png`,
  require('../../assets/images/deer-sad.png'),
];

export default {
  FONTS,
  CACHE_IMAGES,
  WEIGHT,
}
