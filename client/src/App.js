import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddInventory from './components/AddInventory.jsx';
import Details from './components/InventoryDetails.jsx';
import Inventory from './components/Inventory';
import Contact from './components/Contact';
// import Card from './components/Card';



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
      <Contact />
    </Route>
      </div>
    </div>
  );
}

export default App;
