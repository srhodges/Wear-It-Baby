import React from 'react'
import { Card } from './Card'
import { useState } from 'react';
import SearchInventory from './SearchInventory';

function InventoryResults(props) {

  const [search, setSearch] = useState("")
  
  return (
    <div className="inventory-results">
      <input type="text" placeholder="Search Wear It, Baby!" onChange={e => setSearch(e.target.value)} />

      <button className="search-button"> Search</button>
      <SearchInventory search={search}/>

            </div>
          );
        }
      
      
  


export default InventoryResults
