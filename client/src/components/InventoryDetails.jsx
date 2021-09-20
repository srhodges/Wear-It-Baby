import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchItem } from '../services';


export default function Details() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  const { id } = useParams();


  useEffect(() => {
    const getInventory = async () => { 
      setItem(await fetchItem(id));
      setLoading(false);
    };
    getInventory();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{item.fields.item}</h2>
      <h3>{item.fields.size}</h3>
      <h3>{item.fields.season}</h3>
      <h3>{item.fields.type}</h3>
      <div>
      <Link to={`/inventory/${id}`}></Link>
      </div>
    </div>
  );
}