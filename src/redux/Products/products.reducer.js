import productsTypes from './products.types';

const INITIAL_STATE = {
   products: [],
   product: {},
   loading: false,
};


const productsReducer = (state=INITIAL_STATE, action) => {
   switch (action.type) {
      case productsTypes.SET_PRODUCTS:
         return {
            ...state,
            products: action.payload,
            loading: true,
         }
      case productsTypes.SET_PRODUCT:
         return {
            ...state,
            product: action.payload,
            loading: true,
         }
   
      default:
         return state;
   }

}

export default productsReducer;
