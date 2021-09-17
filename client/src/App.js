// import { useState } from 'react';
// import axios from 'axios';
import { BrowserRouter as Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddInventory from './components/AddInventory.jsx';
import Details from './components/InventoryDetails.jsx';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Route exact path="/">
      <div className="Home">
      {/* <Home /> */}
      </div>
    </Route>

    <Route path="/inventory">
      <div className="Inventory">
      <Inventory />
      </div>
    </Route>

    <Route path="/inventory/?:id">
      <div className="Details">
      <Details />
      </div>
    </Route>

    <Route path="/add">
      <div className="Add">
      <AddInventory />
      </div>
    </Route>

    <Route path="/contact">
      <div className="Contact">
      {/* <ContactForm /> */}
      </div>
    </Route>
    </div>
  );
}

export default App;
