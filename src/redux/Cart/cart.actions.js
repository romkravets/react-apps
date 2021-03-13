import cartTypes from './cart.types.js';

export const addProduct = (nextCartItem) => ({
   type: cartTypes.ADD_TO_CART,
   payload: nextCartItem
});