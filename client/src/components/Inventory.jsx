import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchInventory } from '../services/index';
// import Card from "./Card";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/inventory`

console.log(URL);

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};


export default function Inventory() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const getInventory = async () => {
      setItems(await fetchInventory());
    }; console.log(items);
    getInventory();
  }, []);

  
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <Link to={`/inventory/${item.id}`} key={item.id}>
        <h3>{item.fields.item}</h3>
        <h4>{item.fields.size}</h4>
        <h4>{item.fields.season}</h4>
        <h4>{item.fields.type}</h4>
      </Link>
          );
        })}
      </div>
    </div>
  );
}