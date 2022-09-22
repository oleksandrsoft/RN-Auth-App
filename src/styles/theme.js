import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  lightBlue: '#71b7f8',
  lightestBlue: '#ECF0F2',
  lightBlack: '#767276',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',
  greenLight: '#56DCBA',
  lightGreen: '#aee35f',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',
  black: '#0B0B0B',
  zBlack: '#000000',
  white: '#FFFFFF',
  whiteShade: '#F7F9FD',
  yellowPrimary: '#fffb2a',
  aliceBlue: '#F4F6F8',
  lighterGrey: '#eaeaea',
  lightGrey: '#767676',
  lightestGrey: '#707070',
  grey: '#939393',
  darkGrey: '#3a3a3a',
  greyishBlue: '#498db9',
  faintBlue: '#2d4859',
  lightblue: '#4d9ac5',
  iconBlue: '#2d485d',
  buttonBlue: '#508db9',
  blue: '#226CFD',
  btnColor: '#fbb13d',
  lighterBlue: '#F0F5FF',
  royalBlue: '#29485d',
  red: '#c2171d',
  lightRed: '#ffcccb',
  blackText: '#141414',
  transparent: 'transparent',
  xyz: 'transparent',
  green: '#90ce19',
  darkGreen: '#02af1e',
  limeGreen: '#6ff677',
  iconWhite: '##faffff',
  disableText: '#555b73',
  normalText: '#030303',
  sectionSeperator: '#f6f6f6',
  audioFileBg: '#f1f1f1',
  cancelBtnBg: '#a1a1a1',
  plusButton: '#fb81fd',
  greenCheck: '#3BB54A',
  greenShade: '#0DC98F',
  blumineText: '#343F76',
  warning: '#FFCC00',
  messageInputBg: '#F7F7F7',
  lightingYellow: '#f7a82f',
  inactiveTab: '#F2F2F2',
  searchHighlightBlue: '#0198BA',
  greyish: '#dddddd',
  whitePrimary: '#f2f3f4',
  bluished: '#5089a5',
  greyborder: '#fcfcfc',
  greytext: '#414141',
  navyBlue: '#0F1C21',
  greyTextPrimary: '#757575',
  yellowButton: '#f3ab2f',
  greyPrimary: '#c6c6c6',
  blackPrimary: '#434343',
  orangePrimary: '#ff9933',
  chipRed: '#cf3232',
  darkYellowButton: '#F6A930',
  simplygrey: '#777777',
  bgWhite: '#fafafa',
  linearGrey: '#989898',
  linearlyGrey: '#393E46',
  cleanGrey: '#CBD5E0',
  shadowYellow: '#fac87a',
  secondaryGrey: '#5c5c5c',
  borderGrey: '#aaaaaa',
  radioButtonColor: '#336e90',
  coralColor: 'coral',
  gold: '#FFD8A9',
  FBColor: '#4267B2',
};

const theme = createTheme({
  colors: {
    primary: palette.faintBlue,
    lightBlue: palette.lightBlue,
    lightestBlue: palette.lightestBlue,
    btnColor: palette.btnColor,
    lightPrimary: palette.lightblue,
    lightBlack: palette.lightBlack,
    iconColor: palette.royalBlue,
    iconBlue: palette.iconBlue,
    buttonBlue: palette.buttonBlue,
    icontWhite: palette.iconWhite,
    mainBackground: palette.white,
    lightBackground: palette.white,
    bluishBackground: palette.lighterGrey,
    cardPrimaryBackground: palette.purplePrimary,
    textInputBorderColor: palette.lightGrey,
    dividerBorderColor: palette.lightestGrey,
    textInputBackground: palette.white,
    aliceBlue: palette.aliceBlue,
    error: palette.red,
    transparent: palette.transparent,
    xyz: palette.xyz,
    whiteShade: palette.whiteShade,
    greyText: palette.grey,
    whiteText: palette.white,
    darkText: palette.blackText,
    darkGreyText: palette.darkGrey,
    chipBackground: palette.lighterGrey,
    success: palette.green,
    greenShade: palette.greenShade,
    successStep: palette.limeGreen,
    currentStep: palette.yellowPrimary,
    inactiveTab: palette.lightGrey,
    disableText: palette.disableText,
    normalText: palette.normalText,
    sectionSeperator: palette.sectionSeperator,
    audioFileBg: palette.audioFileBg,
    black: palette.black,
    cancelBtnBg: palette.cancelBtnBg,
    plusButton: palette.plusButton,
    greenCheck: palette.greenCheck,
    currency: palette.darkGreen,
    zBlack: palette.zBlack,
    disabled: palette.greyishBlue,
    blumineText: palette.blumineText,
    warning: palette.warning,
    messageInputBg: palette.messageInputBg,
    lightingYellow: palette.lightingYellow,
    greenPrimary: palette.greenPrimary,
    lightGreen: palette.lightGreen,
    lightRed: palette.lightRed,
    inactiveTabBar: palette.inactiveTab,
    searchHighLightBlue: palette.searchHighlightBlue,
    greyish: palette.greyish,
    whitePrimary: palette.whitePrimary,
    bluished: palette.bluished,
    greyborder: palette.greyborder,
    greytext: palette.greytext,
    navyBlue: palette.navyBlue,
    greyTextPrimary: palette.greyTextPrimary,
    yellowButton: palette.yellowButton,
    greyPrimary: palette.greyPrimary,
    blackPrimary: palette.blackPrimary,
    orangePrimary: palette.orangePrimary,
    chipRed: palette.chipRed,
    darkYellowButton: palette.darkYellowButton,
    simplygrey: palette.simplygrey,
    bgWhite: palette.bgWhite,
    linearGrey: palette.linearGrey,
    linearlyGrey: palette.linearlyGrey,
    cleanGrey: palette.cleanGrey,
    white: palette.white,
    shadowYellow: palette.shadowYellow,
    secondaryGrey: palette.secondaryGrey,
    borderGrey: palette.borderGrey,
    radioButtonColor: palette.radioButtonColor,
    buttonColor: palette.lighterBlue,
    coral: palette.coralColor,
    gold: palette.gold,
    FBColor: palette.FBColor,
  },
  spacing: {
    '-xxs': -2,
    '-xs': -4,
    '-s': -8,
    '-sl': -10,
    '-xm': -12,
    '-m': -16,
    '-ml': -18,
    '-l': -24,
    '-xl': -30,
    '-xxl': -40,
    '-xxxl': -50,
    '-mxxxl': -55,
    xxxs: 2,
    xxs: 3,
    xs: 4,
    s: 8,
    sl: 10,
    xm: 12,
    bm: 14,
    m: 16,
    ml: 18,
    mll: 20,
    mlll: 22,
    l: 24,
    xl: 30,
    xxl: 40,
    xxxl: 50,
    XL: 60,
    XXL: 80,
    smXXL: 85,
    mXXL: 90,
    XXXL: 100,
    XXXXL: 108,
    XXXLL: 110,
    phoneInputPadding: 100,
    none: 0,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textInputVariants: {
    error: {
      borderColor: 'error',
    },
    phone: {
      paddingLeft: 'phoneInputPadding',
    },
    phoneError: {
      borderColor: 'error',
      paddingLeft: 'phoneInputPadding',
    },
    socialError: {
      borderColor: 'error',
      paddingLeft: 'XL',
    },
    social: {
      paddingLeft: 'XL',
    },
  },
  textVariants: {
    headline: {
      fontSize: 18,
      fontFamily: 'Roboto-Regular',
    },
    greySubtitle: {
      color: 'greyText',
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
    },
    title: {
      fontSize: 15,
      fontFamily: 'Roboto-Medium',
    },

    boldTitle: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    subTitle: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'bold',
    },
    smallSubTitle: {
      fontSize: 12,
    },
    titleDescription: {
      fontSize: 13,
      fontFamily: 'Roboto-Medium',
    },
    body: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    largeBody: {
      fontSize: 50,
      fontFamily: 'Roboto-Regular',
    },
    bodyLight: {
      fontSize: 14,
      fontFamily: 'Roboto-Light',
    },
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    bold: {
      fontSize: 20,
      fontWeight: '800',
      fontFamily: 'Roboto-Bold',
    },
    semiBold: {
      fontSize: 20,
      fontWeight: '600',
      color: 'darkGreyText',
      fontFamily: 'Roboto-Regular',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
    },
  },
  buttonVariants: {
    secondary: {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderColor: 'primary',
      borderWidth: 1,
      backgroundColor: 'buttonColor',
    },
    'secondary-small': {
      width: '100%',
      height: 30,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      borderColor: 'primary',
      borderWidth: 2,
    },
    primary: {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
    },
    'primary-bold': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
    },
    'primary-round': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 27,
      borderColor: 'primary',
      borderWidth: 2,
    },
    yellowPrimary: {
      width: '100%',
      height: '80%',
      borderRadius: 7,
      backgroundColor: 'lightingYellow',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      shadowColor: 'zBlack',
    },
    yellowPrimarySmall: {
      height: '80%',
      px: 's',
      borderRadius: 7,
      backgroundColor: 'lightingYellow',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      shadowColor: 'zBlack',
    },
    yellowWhite: {
      width: 100,
      height: '80%',
      borderRadius: 7,
      borderColor: 'lightingYellow',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    'primary-large': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      borderColor: 'primary',
    },
  },
  buttonTextVariants: {
    primary: {
      color: 'whiteText',
    },
    yellowPrimarySmall: {
      color: 'whiteText',
      fontSize: 15,
      fontWeight: 'bold',
    },
    'primary-round': {
      color: 'whiteText',
    },
    secondary: {
      color: 'whiteText',
      fontSize: 23,
      fontWeight: '600',
    },
    'secondary-small': {
      fontSize: 12,
      color: 'primary',
    },
    yellowPrimary: {
      color: 'whiteText',
      fontWeight: '700',
      fontSize: 20,
    },
    yellowWhite: {
      color: 'lightingYellow',
      fontWeight: '700',
      fontSize: 20,
    },
    'primary-large': {
      fontSize: 20,
      color: 'whiteText',
      fontFamily: 'Roboto-Bold',
    },
    'primary-bold': {
      fontSize: 22,
      fontWeight: '800',
      fontFamily: 'Roboto-Bold',
      color: 'whiteText',
    },
  },
  selectBoxVariants: {
    selected: {
      borderColor: 'lightingYellow',
      backgroundColor: 'lightingYellow',
    },
    nonSelected: {
      borderColor: 'textInputBorderColor',
    },
    error: {
      borderColor: 'error',
    },
  },
  cardVariants: {
    low: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      shadowOffset: {width: 0, height: 1},
      elevation: 3,
    },
    medium: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      shadowOffset: {width: 0, height: 2},
      elevation: 5,
    },
    high: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      shadowOffset: {width: 0, height: 3},
      elevation: 7,
    },
  },
});

export default theme;
