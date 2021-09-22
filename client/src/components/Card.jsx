import React from 'react'
import { fetchInventory } from '../services/index';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const [items, setItems] = useState([]);
  const { item } = props;
  

  return (
    
    <div className="item-card">
          <Link to={`/inventory/${item.id}`} key={item.id}>
            <img className="item-image" src={item.fields.URL} alt=""/>
            {/* <h3>{item.fields.item}</h3>
            <h4>{item.fields.size}</h4>
            <h4>{item.fields.season}</h4>
            <h4>{item.fields.type}</h4> */}
          </Link>
    </div >
  ) 
}

export default Card
