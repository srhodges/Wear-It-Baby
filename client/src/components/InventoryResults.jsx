import React from 'react'
import { useState } from 'react';
import SearchInventory from './SearchInventory';

function InventoryResults() {

  const [search, setSearch] = useState("")
  
  return (
    <div>
    <div>
      <h1 className="search-header">
        Find Your Style, Baby!
        </h1>
        <br />
        
        <h3 className="search-text">
        Find what your baby needs by using keywords:
        </h3>
        <p className="search-text">
          - onesie
          - outfit
          - shirt
          - pants
          - pajamas
          - dress/romper
          - suit
          - jacket/suit
          - snowsuit
          - travel -
        </p>
        <h3 className="search-text">
        Search by sizes:
        </h3>
        <p>
          - NB
          - 0-3 Months
          - 3-6 Months
          - 6 Months
          - 6-12 Months
          - 9 Months
          - 12 Months
          - 12-18 Months
          - 18 Months
          - 18-24 Months
          - 2T
          - 3T
          - 4T
          - 5T -
        </p>
        <h3 className="search-text">
        Search by season:
        </h3>
        <p>
          - Winter
          - Spring
          - Summer
          - Fall -
          </p>

      <h3 className="search-text">
        Search by type:
          </h3>
          <p>
          - Formal
          - Travel
          - Swimwear
          - Sleep
          - Essential -
        </p>
        <h3 className="search-text">
        Search by gender:
          </h3>
          <p>
          - Boy
          - Girl -
        </p>
    </div>
    <div className="inventory-results">
      <input type="text" placeholder="Search Wear It, Baby!" onChange={e => setSearch(e.target.value)} />
      <button className="search-button"> Search</button>
      <SearchInventory search={search}/>
      </div>
    </div>
          );
        }
      

export default InventoryResults
