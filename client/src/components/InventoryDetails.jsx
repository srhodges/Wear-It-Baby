import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchItem } from '../services';
import React from 'react';
import Card from './Card';


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
      <Card/>
      <div>
      <Link to={`/inventory/${id}`}></Link>
      </div>
    </div>
  );
}