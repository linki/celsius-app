export default {
  // portfolio api calls
  GET_PORTFOLIO: 'GET_PORTFOLIO',
  CREATE_PORTFOLIO_REQUEST: 'CREATE_PORTFOLIO_REQUEST',
  GET_PORTFOLIO_REQUEST: 'GET_PORTFOLIO_REQUEST',
  GET_ESTIMATED_LOAN: 'GET_ESTIMATED_LOAN',
  GET_ESTIMATED_INTEREST: 'GET_ESTIMATED_INTEREST',

  // auth api calls
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_BORROWER: 'LOGIN_BORROWER',
  GET_LOGGED_IN_BORROWER: 'GET_LOGGED_IN_BORROWER',
  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_TWITTER: 'REGISTER_USER_TWITTER',
  LOGIN_USER_TWITTER: 'LOGIN_USER_TWITTER',
  REGISTER_USER_FACEBOOK: 'REGISTER_USER_FACEBOOK',
  LOGIN_USER_FACEBOOK: 'LOGIN_USER_FACEBOOK',
  REGISTER_USER_GOOGLE: 'REGISTER_USER_GOOGLE',
  LOGIN_USER_GOOGLE: 'LOGIN_USER_GOOGLE',
  UPDATE_USER: 'UPDATE_USER',
  REGISTER_BORROWER: 'REGISTER_BORROWER',
  REGISTER_EXISTING_BORROWER: 'REGISTER_EXISTING_BORROWER',
  SEND_RESET_LINK: 'SEND_RESET_LINK',
  RESET_PASSWORD: 'RESET_PASSWORD',

  // user api calls
  GET_USER_PERSONAL_INFO: 'GET_USER_PERSONAL_INFO',
  UPDATE_USER_PERSONAL_INFO: 'UPDATE_USER_PERSONAL_INFO',
  UPLOAD_PLOFILE_IMAGE: 'UPLOAD_PLOFILE_IMAGE',
  CREATE_KYC_DOCUMENTS: 'CREATE_KYC_DOCUMENTS',
  GET_KYC_DOCUMENTS: 'GET_KYC_DOCUMENTS',
  SEND_VERIFICATION_SMS: 'SEND_VERIFICATION_SMS',
  VERIFY_SMS: 'VERIFY_SMS',
  START_KYC: 'START_KYC',
  GET_KYC_STATUS: 'GET_KYC_STATUS',

  // wallet api calls
  GET_WALLET_DETAILS: 'GET_WALLET_DETAILS',
  GET_COIN_BALANCE: 'GET_COIN_BALANCE',
  GET_COIN_ADDRESS: 'GET_COIN_ADDRESS',
  GET_COIN_ORIGINATING_ADDRESS: 'GET_COIN_ORIGINATING_ADDRESS',
  SET_COIN_WITHDRAWAL_ADDRESS: 'SET_COIN_WITHDRAWAL_ADDRESS',
  CHECK_USER_PIN_STATUS: 'CHECK_USER_PIN_STATUS',
  SET_PIN: 'SET_PIN',
  WITHDRAW_CRYPTO: 'WITHDRAW_CRYPTO',
  GET_TRANSACTION_DETAILS: 'GET_TRANSACTION_DETAILS',
  GET_ALL_TRANSACTIONS: 'GET_ALL_TRANSACTIONS',
  GET_COIN_TRANSACTIONS: 'GET_COIN_TRANSACTIONS',

  // root api calls
  GET_SUPPORTED_CURRENCIES: 'GET_SUPPORTED_CURRENCIES',
  GET_BACKEND_STATUS: 'GET_BACKEND_STATUS',
  GET_KYC_DOC_TYPES: 'GET_KYC_DOC_TYPES',

  // interest api calls
  GET_INTEREST_RATES: 'GET_INTEREST_RATES',
  GET_INTEREST_CHART_DATA: 'GET_INTEREST_CHART_DATA',

  // transfer api calls
  GET_ALL_TRANSFERS: 'GET_ALL_TRANSFERS',
  GET_TRANSFER: 'GET_TRANSFER',
  CLAIM_TRANSFER: 'CLAIM_TRANSFER',
  CREATE_TRANSFER: 'CREATE_TRANSFER',

}
