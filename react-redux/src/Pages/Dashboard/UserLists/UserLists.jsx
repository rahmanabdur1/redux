// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../../../features/authSlice';
// // import { fetchProducts } from '../../../features/authSlice';

// const UserLists = () => {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state?.products);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch, products]);

//     return (
//         <div>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product._id}>
//                         {product.name} - {product.price} USD
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserLists;


import React from 'react';

const UserLists = () => {
    return (
        <div>
            
        </div>
    );
};

export default UserLists;