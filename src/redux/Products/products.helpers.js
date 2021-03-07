import {firestore} from './../../firebase/utils';


export const  handleAddProduct = product => {
   return new Promise((resolve, reject) => {
      firestore
         .collection('products')
         .doc()
         .set(product)
         .then(() => {
            resolve()
         })
         .catch(err => {
            reject(err)
         })
   })
}




export const  handleFetchProducts = () => {
   return new Promise((resolve, reject) => {
      firestore
         .collection('products')
         .get()
         .then((snapshot) => {
            const productArray = snapshot.docs.map(doc => {
               return {
                  ...doc.data(),
                  documentID: doc.id
               }
            });
            resolve(productArray);
         })
         .catch(err => {
            reject(err)
         })
   })
}

export const  handleDeleteProduct = documenID => {
   return new Promise((resolve, reject) => {
      firestore
         .collection('products')
         .doc(documenID)
         .delete()
         .then(() => {
            resolve();
         })
         .catch(err => {
            reject(err)
         })
   })
}




