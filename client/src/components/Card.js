// import React from 'react'
// import './Card.css'
// import { fetchInventory } from '../services/index';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Card() {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     const getInventory = async () => {
//       setItems(await fetchInventory());
//     };
//     getInventory();
//     console.log(getInventory);
//   }, [])

//   return (
    
//     <div>
//       {items.map((item) => {
//         return (
//           <Link to={`/inventory/${item.id}`} key={item.id}>
//             <img src={item.fields.image} alt=""/>
//             <h3>{item.fields.item}</h3>
//             <h4>{item.fields.size}</h4>
//             <h4>{item.fields.season}</h4>
//             <h4>{item.fields.type}</h4>
//           </Link>
//         );
//       })}
//     </div >
//   ) 
// }

// export default Card
