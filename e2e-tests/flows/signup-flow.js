import store from '../../app/redux/store';
import * as actions from '../../app/redux/actions';
import { resetTests, callToComplete } from "../helpers";
import constants from "../constants";
import ACTIONS from "../../app/config/constants/ACTIONS";
import API from "../../app/config/constants/API";


const { dispatch, getState } = store;

export default {
  successfulFlow,

  // Welcome screen
  pressSkipIntro,

  // SignupOne screen
  disableWhenNoData,
  disableWhenNoEmail,
  disableWhenNoPassword,
  errorWhenEmailInvalid,
  errorWhenPasswordWeak,
  stepOneSuccess,

  // SignupTwo screen
  errorWhenUserExists,
  disableWhenNoNames,
  disableWhenNoLastName,
  disableWhenNoFirstName,
  stepTwoSuccess,

  // CreatePasscode screen
  disableCreatePasscode,
  createPasscode,

  // RepeatPasscode screen
  disableRepeatPasscode,
  disableWrongPasscode,
  finishPasscode,
}

function successfulFlow(spec) {
  return async () => {
    await resetTests(spec);

    await spec.press('Welcome.skipButton')
    await spec.exists('SignupOne.screen')

    await spec.fillIn('SignupOne.email', `email+${ new Date().getTime() }@mvpworkshop.co`)
    await spec.fillIn('SignupOne.password', 'Celsius123')
    await spec.press('SignupOne.button')
    await callToComplete(spec, API.REGISTER_USER)

    await spec.exists('SignupTwo.screen')
    await spec.fillIn('SignupTwo.FirstName', 'Nemanja')
    await spec.fillIn('SignupTwo.LastName', 'Krstonic')
    await spec.press('SignupTwo.CreatePin')
    await callToComplete(spec, API.UPDATE_USER)

    await spec.exists('CreatePasscode.screen')
    await spec.fillIn('passcode.pin','1111')
    await spec.press('Passcode.Repeat PIN')

    await spec.exists('RepeatPasscode.screen')
    await spec.fillIn('passcode.pin_confirm','1111')
    await spec.press('Passcode.Confirm')
    await callToComplete(spec, API.SET_PIN)

    await spec.exists('NoKyc.screen')
  }
}

// Welcome screen tests
function pressSkipIntro(spec) {
  return async () => {
    await resetTests(spec);

    await spec.press('Welcome.skipButton')
    await spec.exists('SignupOne.screen')
  }
}

// SignupTwo screen tests
export function signupOneSetup() {
  dispatch(actions.navigateTo('SignupOne'));
}

function disableWhenNoData(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();

    await spec.exists('SignupOne.screen')
    const btn = await spec.findComponent('SignupOne.button')

    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }
  }
}

function disableWhenNoEmail(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();

    await spec.exists('SignupOne.screen')
    await spec.fillIn('SignupOne.password','12345678')

    const btn = await spec.findComponent('SignupOne.button')
    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }

  }
}

function disableWhenNoPassword(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();

    await spec.exists('SignupOne.screen')
    await spec.fillIn('SignupOne.email',`nemanjatest+${ new Date().getTime() }@mvpworkshop.co`)

    const btn = await spec.findComponent('SignupOne.button')
    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }

  }
}

function errorWhenEmailInvalid(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();

    await spec.exists('SignupOne.screen')
    await spec.fillIn('SignupOne.email','wrong email format')
    await spec.fillIn('SignupOne.password','Celsius123')
    await spec.press('SignupOne.button')

    await spec.notExists('SignupTwo.screen')
  }
}

function errorWhenPasswordWeak(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();

    await spec.exists('SignupOne.screen')
    await spec.fillIn('SignupOne.email','valid.email@mvpworkshop.co')
    await spec.fillIn('SignupOne.password','cel')
    await spec.press('SignupOne.button')

    await spec.notExists('SignupTwo.screen')
  }
}

function errorWhenUserExists(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();
    await spec.pause(1000)

    await spec.exists('SignupOne.screen')
    await spec.fillIn('SignupOne.email','filip.jovakaric+wlt@mvpworkshop.co')
    await spec.fillIn('SignupOne.password','filip123')
    await spec.press('SignupOne.button')

    await spec.notExists('SignupTwo.screen')
  }
}

function stepOneSuccess(spec) {
  return async () => {
    await resetTests(spec);
    signupOneSetup();

    await spec.exists('SignupOne.screen')
    await spec.fillIn('SignupOne.email', `email+${ new Date().getTime() }@mvpworkshop.co`)
    await spec.fillIn('SignupOne.password', 'Celsius123')
    await spec.press('SignupOne.button')

    await callToComplete(spec, API.REGISTER_USER)
    await spec.exists('SignupTwo.screen')
  }
}


// SignupTwo screen tests
export function signupTwoSetup() {
  dispatch(actions.registerUserSuccess({
    user: constants.userWithoutName
  }));
  dispatch(actions.navigateTo('SignupTwo'))
}

function disableWhenNoNames(spec) {
  return async () => {
    await resetTests(spec);
    signupTwoSetup();

    await spec.exists('SignupTwo.screen')
    const btn = await spec.findComponent('SignupTwo.CreatePin')
    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }
  }
}

function disableWhenNoLastName(spec) {
  return async () => {
    await resetTests(spec);
    signupTwoSetup();

    await spec.exists('SignupTwo.screen')
    await spec.fillIn('SignupTwo.LastName', 'Krstonic')
    const btn = await spec.findComponent('SignupTwo.CreatePin')

    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }

  }
}

function disableWhenNoFirstName(spec) {
  return async () => {
    await resetTests(spec);
    signupTwoSetup();

    await spec.exists('SignupTwo.screen')
    await spec.fillIn('SignupTwo.FirstName', 'Nemanja')

    const btn = await spec.findComponent('SignupTwo.CreatePin')

    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }

  }
}

function stepTwoSuccess(spec) {
  return async () => {
    await resetTests(spec);
    signupTwoSetup();

    await spec.exists('SignupTwo.screen')
    await spec.fillIn('SignupTwo.FirstName', 'Nemanja')
    await spec.fillIn('SignupTwo.LastName', 'Krstonic')
    await spec.press('SignupTwo.CreatePin')
  }
}

// CreatePasscode screen tests
export function createPasscodeSetup() {
  dispatch(actions.updateProfileInfoSuccess({ user: constants.userWithName }));
  dispatch(actions.navigateTo('CreatePasscode'))
}

function disableCreatePasscode(spec) {
  return async () => {
    await resetTests(spec)
    createPasscodeSetup();

    await spec.exists('CreatePasscode.screen')
    await spec.fillIn('passcode.pin','111')
    await spec.press('Passcode.Repeat PIN')
    const btn = await spec.findComponent('Passcode.Repeat PIN')
    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }
  }
}

function createPasscode(spec) {
  return async () => {
    await resetTests(spec)
    createPasscodeSetup();

    await spec.exists('CreatePasscode.screen')
    await spec.fillIn('passcode.pin','1111')
    await spec.press('Passcode.Repeat PIN')
    await spec.exists('RepeatPasscode.screen')
  }
}

// RepeatPasscode screen tests
function repeatPasscodeSetup() {
  dispatch(actions.updateProfileInfoSuccess({ user: constants.userWithName }));
  dispatch(actions.updateFormField('pin', '1111'))
  dispatch(actions.navigateTo('RepeatPasscode'))

}
function disableRepeatPasscode(spec) {
  return async () => {
    await resetTests(spec)
    repeatPasscodeSetup()

    await spec.exists('RepeatPasscode.screen')
    await spec.fillIn('passcode.pin','111')
    await spec.press('Passcode.Repeat PIN')

    const btn = await spec.findComponent('Passcode.Repeat PIN')
    if (!btn.props.disabled) {
      throw new Error(`Signup Button enabled`);
    }
  }
}

function disableWrongPasscode(spec) {
  return async () => {
    await resetTests(spec)
    repeatPasscodeSetup()

    await spec.fillIn('passcode.pin','1234')
    await spec.press('Passcode.Confirm')
  }
}

function finishPasscode(spec) {
  return async () => {
    await resetTests(spec)
    repeatPasscodeSetup()

    await spec.exists('RepeatPasscode.screen')
    await spec.fillIn('passcode.pin_confirm','1111')
    await spec.press('Passcode.Confirm')
    await callToComplete(spec, API.SET_PIN)

    await spec.exists('NoKyc.screen')
  }
}