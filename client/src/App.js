import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddInventory from './components/AddInventory.jsx';
import Details from './components/InventoryDetails.jsx';
import Inventory from './components/Inventory';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';



function App() {

  return (
    <div className="App">
      <Navbar />
      <div>
        
    <Route exact path="/">
      <Home />
    </Route>
      </div>

      <div >
    <Route exact path="/inventory">
      <Inventory />
    </Route>
      </div>

      <div>
    <Route exact path="/inventory/:id">
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

      <div >
    <Route path="/about">
      <About />
    </Route>
      </div>

      <Footer />
      </div>
  
  );
}

export default App;
