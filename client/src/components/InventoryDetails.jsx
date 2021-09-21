import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchItem } from '../services';
import React from 'react';



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
      <img src={item.fields.image} alt=""/>
      <h2>{item.fields.item}</h2>
      <h4>{item.fields.size}</h4>
      <h4>{item.fields.season}</h4>
      <h4>{item.fields.type}</h4>
      <div>
      <Link to={`/inventory/${id}`}></Link>
      </div>
    </div>
  );
}