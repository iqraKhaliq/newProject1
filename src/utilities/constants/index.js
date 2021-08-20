// import React from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
import {appImages} from '../assets';

export const arrayData = {
  brands: [
    {
      title: 'KUSHAGRAM',
      image: appImages.brandImage,
      subtitle: '1 k followers',
    },
    {
      title: 'KUSHAGRAM',
      image: appImages.brandImage,
      subtitle: '1 k followers',
    },
    {
      title: 'KUSHAGRAM',
      image: appImages.brandImage,
      subtitle: '1 k followers',
    },
    {
      title: 'KUSHAGRAM',
      image: appImages.brandImage,
      subtitle: '1 k followers',
    },
  ],
  pickups: [
    {
      title: 'HAZE-All Taxes Included',
      image: appImages.brandImage,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'HAZE-All Taxes Included',
      image: appImages.brandImage,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'HAZE-All Taxes Included',
      image: appImages.brandImage,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'HAZE-All Taxes Included',
      image: appImages.brandImage,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
  ],
  featured: [
    {
      name: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'KHUSHAGRAM',
      image: appImages.feature2,
    },
    {
      name: 'KHUSHAGRAM',
      image: appImages.feature3,
    },
    {
      name: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'KHUSHAGRAM',
      image: appImages.feature2,
    },
    {
      name: 'KHUSHAGRAM',
      image: appImages.feature3,
    },
  ],
  flowers: [
    {
      title: 'Smoakland',
      name: 'Smoakland',
      image: appImages.flower1,
    },
    {
      title: 'KHUSHAGRAM',
      name: 'KHUSHAGRAM',
      image: appImages.flower2,
    },
    {
      title: 'KHUSHAGRAM',
      name: 'KHUSHAGRAM',
      image: appImages.feature2,
    },
    {
      title: 'Smoakland',
      name: 'Smoakland',
      image: appImages.flower1,
    },
    {
      title: 'KHUSHAGRAM',
      name: 'KHUSHAGRAM',
      image: appImages.flower2,
    },
    {
      title: 'KHUSHAGRAM',
      name: 'KHUSHAGRAM',
      image: appImages.feature2,
    },
  ],
  concentrates: [
    {
      title: 'Bloom Drop\nking louis XIII',
      name: 'Bloom Drop\nking louis XIII',
      image: appImages.concentrates1,
    },
    {
      title: 'Bloom Drop\nking louis XIII',
      name: 'Bloom Drop\nking louis XIII',
      image: appImages.concentrates2,
    },
    {
      title: 'Bloom Drop\nking louis XIII',
      name: 'Bloom Drop\nking louis XIII',
      image: appImages.concentrates3,
    },
    {
      title: 'Bloom Drop\nking louis XIII',
      name: 'Bloom Drop\nking louis XIII',
      image: appImages.concentrates1,
    },
    {
      title: 'Bloom Drop\nking louis XIII',
      name: 'Bloom Drop\nking louis XIII',
      image: appImages.concentrates2,
    },
    {
      title: 'Bloom Drop\nking louis XIII',
      name: 'Bloom Drop\nking louis XIII',
      image: appImages.concentrates3,
    },
  ],
  vapePens: [
    {
      title: 'Cookies Cartridge\n0.525g -CA',
      name: 'Cookies Cartridge\n0.525g -CA',
      image: appImages.vapePens1,
    },
    {
      title: 'Cookies Cartridge\n0.525g -CA',
      name: 'Cookies Cartridge\n0.525g -CA',
      image: appImages.vapePens2,
    },
    {
      title: 'Cookies Cartridge\n0.525g -CA',
      name: 'Cookies Cartridge\n0.525g -CA',
      image: appImages.vapePens3,
    },
    {
      title: 'Cookies Cartridge\n0.525g -CA',
      name: 'Cookies Cartridge\n0.525g -CA',
      image: appImages.vapePens1,
    },
    {
      title: 'Cookies Cartridge\n0.525g -CA',
      name: 'Cookies Cartridge\n0.525g -CA',
      image: appImages.vapePens2,
    },
    {
      title: 'Cookies Cartridge\n0.525g -CA',
      name: 'Cookies Cartridge\n0.525g -CA',
      image: appImages.vapePens3,
    },
  ],
  edibles: [
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles1,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles2,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles1,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles2,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
  ],
  medical: [
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
    {
      name: 'REST DROPS, 15ML\n ',
      image: appImages.edibles3,
    },
  ],
  allBrands: [
    {
      name: 'Vallejo, California',
      name1: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'Vallejo, California',
      name1: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'Vallejo, California',
      name1: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'Vallejo, California',
      name1: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'Vallejo, California',
      name1: 'Smoakland',
      image: appImages.feature1,
    },
    {
      name: 'Vallejo, California',
      name1: 'Smoakland',
      image: appImages.feature1,
    },
  ],
  featuredDeals: [
    {
      title: 'Indica',
      desc: '7g/$50 Private Reserve',
      name: 'KHUSHAGRAM',
      image: appImages.edibles3,
    },
    {
      title: 'Indica',
      desc: '7g/$50 Private Reserve',
      name: 'KHUSHAGRAM',
      image: appImages.edibles3,
    },
    {
      title: 'Indica',
      desc: '7g/$50 Private Reserve',
      name: 'KHUSHAGRAM',
      image: appImages.edibles3,
    },
    {
      title: 'Indica',
      desc: '7g/$50 Private Reserve',
      name: 'KHUSHAGRAM',
      image: appImages.edibles3,
    },
    {
      title: 'Indica',
      desc: '7g/$50 Private Reserve',
      name: 'KHUSHAGRAM',
      image: appImages.edibles3,
    },
    {
      title: 'Indica',
      desc: '7g/$50 Private Reserve',
      name: 'KHUSHAGRAM',
      image: appImages.edibles3,
    },
  ],
  nearbyDeals: [
    {
      title: '',
      desc: '$100-125 0Z',
      name: 'Smoke On the Water',
      image: appImages.nearby1,
    },
    {
      title: '',
      desc: '$100-125 0Z',
      name: 'Smoke On the Water',
      image: appImages.nearby2,
    },
    {
      title: '',
      desc: '$100-125 0Z',
      name: 'Smoke On the Water',
      image: appImages.edibles2,
    },
    {
      title: '',
      desc: '$100-125 0Z',
      name: 'Smoke On the Water',
      image: appImages.nearby1,
    },
    {
      title: '',
      desc: '$100-125 0Z',
      name: 'Smoke On the Water',
      image: appImages.nearby2,
    },
    {
      title: '',
      desc: '$100-125 0Z',
      name: 'Smoke On the Water',
      image: appImages.edibles2,
    },
  ],
  productsOnSale: [
    {
      title: 'Gummies',
      quantity: '2.4 ml',
      desc: '7g/$50 Private Reserve',
      name: 'WYLD',
      oldPrice: '$25.45',
      newPrice: '$22.45',
      image: appImages.sale1,
    },
    {
      title: 'Gummies',
      quantity: '2.4 ml',
      desc: '7g/$50 Private Reserve',
      name: 'WYLD',
      oldPrice: '$25.45',
      newPrice: '$22.45',
      image: appImages.catImage6,
    },
    {
      title: 'Gummies',
      quantity: '2.4 ml',
      desc: '7g/$50 Private Reserve',
      name: 'WYLD',
      oldPrice: '$25.45',
      newPrice: '$22.45',
      image: appImages.edibles3,
    },
    {
      title: 'Gummies',
      quantity: '2.4 ml',
      desc: '7g/$50 Private Reserve',
      name: 'WYLD',
      oldPrice: '$25.45',
      newPrice: '$22.45',
      image: appImages.sale1,
    },
    {
      title: 'Gummies',
      quantity: '2.4 ml',
      desc: '7g/$50 Private Reserve',
      name: 'WYLD',
      oldPrice: '$25.45',
      newPrice: '$22.45',
      image: appImages.catImage6,
    },
    {
      title: 'Gummies',
      quantity: '2.4 ml',
      desc: '7g/$50 Private Reserve',
      name: 'WYLD',
      oldPrice: '$25.45',
      newPrice: '$22.45',
      image: appImages.edibles3,
    },
  ],
  searchResult: [
    {
      title: 'Marijuana Center',
      image: appImages.searchImage,
      subtitle: 'Dispensary . Medica & Recreation Store',
      rating: '4.5 (312)',
    },
    {
      title: 'Marijuana Center',
      image: appImages.searchImage,
      subtitle: 'Dispensary . Medica & Recreation Store',
      rating: '4.5 (312)',
    },
  ],
  categoryData: [
    {
      title: 'Battries',
      image: appImages.catImage1,
      isOpen: true,
    },
    {
      title: 'Cartridge',
      image: appImages.catImage2,
      isOpen: false,
    },
    {
      title: 'Battries',
      image: appImages.catImage3,
      isOpen: true,
    },
    {
      title: 'Cartridge',
      image: appImages.catImage1,
      isOpen: false,
    },
    {
      title: 'Battries',
      image: appImages.catImage2,
      isOpen: true,
    },
    {
      title: 'Battries',
      image: appImages.catImage3,
      isOpen: true,
    },
    {
      title: 'Battries',
      image: appImages.catImage4,
      isOpen: true,
    },
    {
      title: 'Battries',
      image: appImages.catImage5,
      isOpen: true,
    },
    {
      title: 'Battries',
      image: appImages.catImage6,
      isOpen: true,
    },
  ],
  savingByCategory: [
    {
      title: 'Vape pens',
      image: appImages.save1,
      isOpen: true,
    },
    {
      title: 'Flower',
      image: appImages.save2,
      isOpen: false,
    },
    {
      title: 'Concentrates',
      image: appImages.save3,
      isOpen: true,
    },
    {
      title: 'Vape pens',
      image: appImages.save1,
      isOpen: true,
    },
    {
      title: 'Flower',
      image: appImages.save2,
      isOpen: false,
    },
    {
      title: 'Concentrates',
      image: appImages.save3,
      isOpen: true,
    },
  ],
  mediaData: [
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
    {
      image: appImages.mediaImage1,
    },
  ],
  viewAllData: [
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage1,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage2,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage3,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage1,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage2,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage3,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage1,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage2,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage3,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage1,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage2,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
    {
      title: 'Bloom Drop king louis XIII',
      image: appImages.viewAllImage3,
      subtitle: 'Medical & Recreational',
      location: 'vallejo, california',
      brandIcon: appImages.brandImage,
      distance: '4.7ml',
      rating: '4.7 (10)',
      pickupImage: appImages.mapImage,
    },
  ],
};

//Permission
export const requestPermission = async (
  permissions,
  title,
  message,
  isMultiple = false,
) => {
  let config = {
    title: `Smokey Maps App ${title} Permission`,
    message: `Smokey Maps App want to access ${title}` + message,
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  };
  try {
    if (Platform.OS === 'android') {
      let granted;
      if (isMultiple) {
        granted = PermissionsAndroid.requestMultiple(permissions, config);
      } else {
        granted = PermissionsAndroid.request(permissions, config);
      }
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } else {
    }
  } catch (err) {
    console.warn(err);
  }
};

//Validations

const signUpValdation = (username, email, password) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (username === '' || email === '' || password === '') {
    return {
      success: false,
      message: 'Please Enter All Fields to Proceed',
    };
  } else if (password?.length < 6) {
    return {
      success: false,
      message: 'Please enter at least 6 digits password',
    };
  } else if (!reg.test(email)) {
    return {
      success: false,
      message: 'Please enter valid email',
    };
  } else {
    return {
      success: true,
      message: '',
    };
  }
};

const loginValidation = (email, password) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === '' || password === '') {
    return {
      success: false,
      message: 'Please Enter All Fields to Proceed',
    };
  } else if (password?.length < 6) {
    return {
      success: false,
      message: 'Please enter your 6 digits password',
    };
  } else if (!reg.test(email)) {
    return {
      success: false,
      message: 'Please enter valid email',
    };
  } else {
    return {
      success: true,
      message: '',
    };
  }
};

export {signUpValdation, loginValidation};
