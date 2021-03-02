import userTypes from './user.types';

const INITIAL_STATE = {
   currentUser: null,
   userErr: []
   // signInSuccess: false,
   // signUpSuccess: false,
   // signUpError: [],
   // resetPaswordSuccess: false,
   // resetPaswordError: []
};

const userReducer = (state=INITIAL_STATE, action) => {
   switch(action.type) {

      case userTypes.SIGN_IN_SUCCESS:  
         return {
            ...state,
            currentUser: action.payload,
            userErr: []
         }
      case userTypes.SIGN_OUT_USER_SUCCESS:  
         return {
            ...state,
            ...INITIAL_STATE
         }
      case userTypes.USER_ERROR:  
         return {
            ...state,
            userErr: action.payload
         }
      // case userTypes.SET_CURRENT_USER:
      //    return {
      //       ...state,
      //       currentUser: action.payload
      //    }
      // case userTypes.SIGN_IN_SUCCESS:
      //    return {
      //       ...state,
      //       signInSuccess: action.payload
      //    }
      // case userTypes.SIGN_UP_SUCCESS:
      //    return {
      //       ...state,
      //       signUpSuccess: action.payload
      //    }
      // case userTypes.SIGN_UP_ERROR:
      //    return {
      //       ...state,
      //       signUpError: action.payload
      //    }
      // case userTypes.RESET_PASSWORD_SUCCESS:
      //    return {
      //         ...state,
      //         resetPaswordSuccess: action.payload
      //    }
      //  case userTypes.RESET_PASSWORD_ERROR:
      //    return {
      //         ...state,
      //         resetPaswordError: action.payload
      //    }
      // case userTypes.RESET_AUTH_FORMS:
      //    return {
      //       ...state,
      //       signInSuccess: false,
      //       signUpSuccess: false,
      //       signUpError: [],
      //       resetPaswordSuccess: false,
      //       resetPaswordError:[]
      //    }
      default:
         return state;
   }
};

export default userReducer;