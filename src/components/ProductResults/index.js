import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';

import './styles.scss';

const mapState =({productsData}) => ({
   products: productsData.products
});


const ProductResults = ({}) => {
   const dispatch = useDispatch();
   const { products } = useSelector(mapState);
   useEffect(() => {
      dispatch(
         fetchProductsStart()
       )

   }, []);

   if (!Array.isArray(products)) return null;

   if (products.length < 1) {
      return (
         <div>
            <p>No search results.</p>
         </div>
      )
   }

   return (
      <div className="products">
         <h1>BROWSE PRODUCTS</h1>
          <div className="productResults">
         {products.map((product, pos) => {
            const {productThumbnail, productName, productPrice} = product;
            
             const configProduct = {
               ...product
            };

            return (
               <Product key={pos} {...configProduct} />
            )
         })}
      </div>
      </div>
   );
};

export default ProductResults;