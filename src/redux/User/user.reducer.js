import userTypes from './user.types';

const INITIAL_STATE = {
   currentUser: null,
   resetPaswordSuccess: false,
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
      case userTypes.RESET_PASSWORD_SUCCESS:  
         return {
            ...state,
            resetPaswordSuccess: action.payload
         }
      case userTypes.USER_ERROR:  
         return {
            ...state,
            userErr: action.payload
         }
      case userTypes.RESET_USER_STATE:
      case userTypes.SIGN_OUT_USER_SUCCESS:  
         return {
            ...state,
            ...INITIAL_STATE
         }
      default:
         return state;
   }
};

export default userReducer;