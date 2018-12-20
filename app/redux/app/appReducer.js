import ACTIONS from '../../config/constants/ACTIONS';

function initialState() {
    return {
        appInitialized: false,
        appInitializing: false,
    };
}

export default function appReducer(state = initialState(), action) {

    switch (action.type) {
      case ACTIONS.APP_INIT_START:
          return {
            ...state,
            appInitialized: false,
            appInitializing: true,
          };

      case ACTIONS.APP_INIT_DONE:
          return {
            ...state,
            appInitialized: true,
            appInitializing: false,
          };

      case ACTIONS.RESET_APP:
          return {
            ...state,
            appInitialized: false,
          };

      default:
          return { ...state };
    }
}