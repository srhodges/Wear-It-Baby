import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddInventory from './components/AddInventory.jsx';
import Details from './components/InventoryDetails.jsx';
import Inventory from './components/Inventory';
import Card from './components/Card';

// console.log(process.env.REACT_APP_AIRTABLE_BASE);
// console.log(process.env.REACT_APP_AIRTABLE_KEY);

function App() {
  return (
    <div className="App">
    <Navbar/>
      <div>
    <Route exact path="/">
      {/* <Home /> */}
    </Route>
      </div>

      <div >
    <Route exact path="/inventory">
      <Inventory />
    </Route>
      </div>

      <div>
    <Route exact path="/inventory/:id">
      {/* <Card /> */}
      <Details />
    </Route>
      </div>

      <div >
    <Route path="/add">
      <AddInventory />
    </Route>
      </div>

      <div >
    <Route path="/contact">
      {/* <ContactForm /> */}
    </Route>
      </div>
    </div>
  );
}

export default App;
