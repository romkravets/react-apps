import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import Button from './../forms/Button';
import BackBtn from './../BackBtn/index';

import Item from './Item';

import './styles.scss';

const mapStste = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
})

const Checkout = ({})  => {
   const { cartItems, total } = useSelector(mapStste);
   const history = useHistory();
   console.log(history , "history");

  const errMsg = 'You have no items in your cart.';
   return (
      <div className="checkout">
            <h1>Checkout</h1>
         <div className="cart">
         <div>
            <BackBtn onClick={() => history.goBack()}><i class="fas fa-caret-left"></i> Back</BackBtn>

            </div>
         {cartItems.length > 0 ? (
            <table border="0" cellPadding="0" cellSpacing="0">
               <tbody>
               <tr>
                  <td>
                     <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                     <tbody>
                        <tr>
                           <th>
                           Product
                           </th>
                           <th>
                           Description
                           </th>
                           <th>
                           Quantity
                           </th>
                           <th>
                           Price
                           </th>
                           <th>
                           Remove
                           </th>
                        </tr>
                     </tbody>
                     </table>
                  </td>
               </tr>
               <tr>
                  <td>
                     <table border="0" cellSpacing="0" cellPadding="0">
                     <tbody>
                        {cartItems.map((item, pos) => {
                           return (
                           <tr key={pos}>
                              <td>
                                 <Item {...item} />
                              </td>
                           </tr>
                           );
                        })}
                     </tbody>
                     </table>
                  </td>
               </tr>
               <tr>
                  <td>
                     <table border="0" cellSpacing="0" cellPadding="0">
                     <tbody>
                        <tr>
                           <td>
                           <table border="0" cellPadding="10" cellSpacing="0">
                              <tbody>
                                 <tr>
                                 <td>
                                 <h3>
                                    Total: £{total}
                                 </h3>
                                 </td>
                                 </tr>
                              </tbody>
                           </table>
                           </td>
                        </tr>
                        <tr>
                           <td>
                           <table border="0" cellPadding="10" cellSpacing="0">
                              <tbody>
                                 <tr>
                                 <td>
                                    <Button onClick={() => history.goBack()}>
                                       Continue Shopping
                                    </Button>
                                 </td>
                                 <td>
                                    <Button onClick={() => history.push('/payment')}>
                                       Checkout
                                    </Button>
                                 </td>
                                 </tr>
                              </tbody>
                           </table>
                           </td>
                        </tr>
                     </tbody>
                     </table>
                  </td>
               </tr>
               </tbody>
            </table>
         ) : (
               <p>
               {errMsg}
               </p>
            )}
      </div>
    </div>
   )
}

export default Checkout;