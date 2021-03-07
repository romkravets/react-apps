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
         .orderBy('cteatedDate')
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

export const handleDeleteProduct = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}




