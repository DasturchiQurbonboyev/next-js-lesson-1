// import React, { useEffect, useState } from 'react';
// import { useClient } from '@next/ui'; // useClient hook'i

// const Product = () => {
//     const [data, setData] = useState(null);
//     const { useClient } = useClient(); // useClient hook'ini olish

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/product');
//                 const productData = await response.json();
//                 setData(productData);
//             } catch (error) {
//                 console.error('Ma\'lumotni yuklashda xatolik:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             {data ? (
//                 <div>
//                     <h1>{data.title}</h1>
//                     <p>{data.description}</p>
//                 </div>
//             ) : (
//                 <p>Ma'lumot yuklanmoqda...</p>
//             )}
//         </div>
//     );
// };

// export default Product;
