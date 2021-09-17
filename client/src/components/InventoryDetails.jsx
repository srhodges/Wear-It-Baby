// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
// import axios from 'axios';

// const airtableBase = 
// const airtableKey = 
// const URL = 

// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   },
// };

// export default function Details() {
//   const [item, setItem] = useState({});
//   const [loading, setLoading] = useState(true)
//   const { id } = useParams();

  // useEffect(() => {
  //   const fetchItem = async () => {
  //     const res = await axios.get(`${URL}/${id}`, config);
  //     setItem(res.data);
  //     setLoading(false);
  //   };
  //   fetchItem();
  // }, []);
  // // eslint-disable-next-line
  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // return (
    // <div>
      {/* <h2>{item.fields.name}</h2>
      <h3>{item.fields.size}</h3>
      <h3>{item.fields.season}</h3>
      <h3>{item.fields.style}</h3> */}
//     </div>
//   );
// }