const KEYBOARD_TYPE = {
  DEFAULT: 'default',
  NUMERIC: 'numeric',
  EMAIL: 'email-address',
  PHONE: 'phone-pad',
  NUMBER_PAD: 'number-pad',
}

const AUTO_CAPITALIZE = {
  CHARACTERS: 'characters', // all characters
  WORDS: 'words', // first letter of each word
  SENTENCES: 'sentences', // first letter of each sentence
  NONE: 'none' // don't auto capitalize anything
}

const CAMERA_COPY = {
  DOCUMENT:
    `Please center your document in the marked area. Be sure the photo is clear and the document's details are easily legible.`,
  SELFIE:
    'Please center your face in the circle and take a selfie. We need your recent picture to compare it with the one on the document.'
}

const GRAPHS = {
  TOTAL_BALANCE: 'TOTAL_BALANCE',
  TOTAL_INTEREST: 'TOTAL_INTEREST',
  COIN_BALANCE: 'COIN_BALANCE',
  COIN_INTEREST: 'COIN_INTEREST'
}

const MODALS = {
  BASIC_MODAL: 'BASIC_MODAL',
  WITHDRAW_INFO_MODAL: 'WITHDRAW_INFO_MODAL',
  TODAY_INTEREST_RATES_MODAL: 'TODAY_INTEREST_RATES_MODAL',
  DESTINATION_TAG_MODAL: 'DESTINATION_TAG_MODAL',
  MEMO_ID_MODAL: 'MEMO_ID_MODAL',
  BORROW_CONFIRM: 'BORROW_CONFIRM',
  CELPAY_RECEIVED_MODAL: 'CELPAY_RECEIVED_MODAL',
  EARN_INTEREST_CEL: 'EARN_INTEREST_CEL',
  REMOVE_AUTHAPP_MODAL: 'REMOVE_AUTHAPP_MODAL',
  VERIFY_AUTHAPP_MODAL: 'VERIFY_AUTHAPP_MODAL',
  GENERATE_API_KEY_MODAL: 'GENERATE_API_KEY_MODAL',
  REFERRAL_RECEIVED_MODAL: 'REFERRAL_RECEIVED_MODAL',
  REFERRAL_SEND_MODAL: 'REFERRAL_SEND_MODAL',
  REGISTER_PROMO_CODE_MODAL: 'REGISTER_PROMO_CODE_MODAL',
  BECAME_CEL_MEMBER_MODAL: 'BECAME_CEL_MEMBER_MODAL',
  LOSE_TIER_MODAL: 'LOSE_TIER_MODAL',
  LOSE_MEMBERSHIP_MODAL: 'LOSE_MEMBERSHIP_MODAL',
  SSN_MODAL: "SSN_MODAL",
  API_KEY_REVOKE_MODAL: 'API_KEY_REVOKE_MODAL',
  INTEREST_CALCULATOR_MODAL: 'INTEREST_CALCULATOR_MODAL',
  BORROW_CALCULATOR_MODAL: 'BORROW_CALCULATOR_MODAL',
  KYC_REJECTED_MODAL: "KYC_REJECTED_MODAL",
  CHANGE_WITHDRAWAL_ADDRESS_MODAL: "CHANGE_WITHDRAWAL_ADDRESS_MODAL",
  DEPOSIT_INFO_MODAL: "DEPOSIT_INFO_MODAL",
  MY_CEL_LOYALTY_CALCULATOR_MODAL: 'MY_CEL_LOYALTY_CALCULATOR_MODAL',
  WITHDRAW_WARNING_MODAL: 'WITHDRAW_WARNING_MODAL',
  LOAN_APPLICATION_SUCCESS_MODAL: 'LOAN_APPLICATION_SUCCESS_MODAL',
  MARGIN_CALL_MODAL: 'MARGIN_CALL_MODAL',
  PREPAY_DOLLAR_INTEREST_MODAL: 'PREPAY_DOLLAR_INTEREST_MODAL',

}

const VERIFY_IDENTITY_TYPES = {
  TWO_FACTOR: 'TWO_FACTOR',
  PIN: 'PIN'
}

const VERIFY_IDENTITY_ACTION_TYPES = {
  DEFAULT: 'DEFAULT',
  SET_PIN: 'SET_PIN',
  CONFIRM_SET_PIN: 'CONFIRM_SET_PIN'
}

const INITIAL_ROUTE = 'Home'

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  CELSIUS: 'celsius'
}

const EMPTY_STATES = {
  USER_CLEARED: 'USER_CLEARED',

  NON_VERIFIED_CELPAY: 'NON_VERIFIED_CELPAY',
  NON_VERIFIED_BORROW: 'NON_VERIFIED_BORROW',
  NON_VERIFIED_DEPOSIT: 'NON_VERIFIED_DEPOSIT',
  NON_VERIFIED_WITHDRAW: "NON_VERIFIED_WITHDRAW",
  NON_VERIFIED_INTEREST: 'NON_VERIFIED_INTEREST',

  NON_MEMBER_CELPAY: 'NON_MEMBER_CELPAY',
  NON_MEMBER_BORROW: 'NON_MEMBER_BORROW',
  NON_MEMBER_INTEREST: 'NON_MEMBER_INTEREST',

  ZERO_INTEREST: 'ZERO_INTEREST',
  NO_SSN_INTEREST: 'NO_SSN_INTEREST',
  NO_LOANS: "NO_LOANS",
  BORROW_NOT_ENOUGH_FUNDS: "BORROW_NOT_ENOUGH_FUNDS",

  NO_WITHDRAWAL_ADDRESSES: "NO_WITHDRAWAL_ADDRESSES",
  MAINTENANCE: "MAINTENANCE",
  COMPLIANCE: 'COMPLIANCE',
  NO_CONTACTS: 'NO_CONTACTS',
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  NO_TRANSACTIONS: 'NO_TRANSACTIONS',
}

const KEYPAD_PURPOSES = {
  WITHDRAW: 'WITHDRAW',
  CELPAY: 'CELPAY',
  VERIFICATION: 'VERIFICATION',
  AMOUNT: 'AMOUNT',
  INTEREST_CALCULATOR: 'INTEREST_CALCULATOR',
  BORROW: 'BORROW'
}

const PHONES_WITH_CUSTOM_KEYPAD = [
  'iPhone X'
  // 'Simulator',
]

const HIGHLIGHTED_COUNTRIES = [
  'Canada',
  'Germany',
  'United Kingdom',
  'Australia',
  'United States'
]

const WALLET_LANDING_VIEW_TYPES = {
  GRID: 'grid',
  LIST: 'list'
}

const FAB_TYPE = ['main', 'support', 'hide']

export default {
  KEYBOARD_TYPE,
  AUTO_CAPITALIZE,
  CAMERA_COPY,
  MODALS,
  VERIFY_IDENTITY_TYPES,
  VERIFY_IDENTITY_ACTION_TYPES,
  INITIAL_ROUTE,
  THEMES,
  EMPTY_STATES,
  KEYPAD_PURPOSES,
  PHONES_WITH_CUSTOM_KEYPAD,
  HIGHLIGHTED_COUNTRIES,
  GRAPHS,
  FAB_TYPE
}

export {
  KEYBOARD_TYPE,
  AUTO_CAPITALIZE,
  CAMERA_COPY,
  MODALS,
  VERIFY_IDENTITY_TYPES,
  VERIFY_IDENTITY_ACTION_TYPES,
  INITIAL_ROUTE,
  THEMES,
  EMPTY_STATES,
  KEYPAD_PURPOSES,
  PHONES_WITH_CUSTOM_KEYPAD,
  HIGHLIGHTED_COUNTRIES,
  GRAPHS,
  FAB_TYPE,
  WALLET_LANDING_VIEW_TYPES
}
