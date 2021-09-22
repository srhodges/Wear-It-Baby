import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Form from './Form';


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableURL = `https://api.airtable.com/v0/${airtableBase}/inventory` 

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};



export default function AddInventory() {
  const [item, setItem] = useState("");
  const [size, setSize] = useState("");
  const [season, setSeason] = useState("");
  const [type, setType] = useState("");
  const [URL, setURL] = useState("");


  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      item,
      size,
      season,
      type,
      URL,
    };

    const res = await axios.post(airtableURL, { fields }, config);
    history.push(`/inventory/${res.data.id}`);
  };

  return (
    <div className='add-container'>
      <h3>Send It, Baby!</h3> 
    
      <div className="form-container">
      <Form
      item={item}
      setItem={setItem}
      size={size}
      setSize={setSize}
      season={season}
      setSeason={setSeason}
      type={type}
      setType={setType}
      URL={URL}
      setURL={setURL}
      handleSubmit={handleSubmit}
      />
      </div>
  </div>
  
  );
}
