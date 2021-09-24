import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/inventory`
console.log(URL);
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};


function SearchInventory(props) {

  const [results, setResults] = useState([])


  useEffect(() => {
    const getInventory = async () => { 
      const res = await axios.get(URL, config);
      setResults(res.data.records);
      console.log(res.data.records);
      
    };
    getInventory();
    // eslint-disable-next-line
  }, []);
  

    
  return (
      <div>
      
      <div>
        {results.map((result => {
          if (result.fields.item === props.search) {
            return (
              <div><Card item={result}/></div>
              );
            }
          }
          
          ))
        }
        
      </div>
       <div>
       {results.map((result => {
         if (result.fields.size === props.search) {
           return (
             <div><Card item={result}/></div>
             );
            }
          }
          
          ))
        }
       
      </div>
      <div>
       {results.map((result => {
         if (result.fields.season === props.search) {
           return (
             <div><Card item={result}/></div>
             );
            }
          }
          
          ))
        }
       
      </div>
      <div>
       {results.map((result => {
         if (result.fields.type === props.search) {
           return (
             <div><Card item={result}/></div>
             );
            }
          }
          
          ))
        }
       
   </div>
        </div>
  )
};


export default SearchInventory
