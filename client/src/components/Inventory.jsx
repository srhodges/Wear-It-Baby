import { useEffect, useState, React } from "react";
import { Link } from "react-router-dom";
import { fetchInventory } from '../services/index';
import Card from "./Card";

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
    };
    getInventory();
  }, []);

  return (
    <div>
      <Link to={`/inventory/${items.id}`} key={items.id}>
      <Card />
      </Link>
      </div>
  );
}