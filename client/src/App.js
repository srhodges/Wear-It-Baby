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
import InventoryResults from './components/InventoryResults';



function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="layout">
      
        
        
        <Route exact path="/">
          <div className="home">
      <Home />
          </div>
    </Route>
      

      
    <Route exact path="/inventory">
      <Inventory />
    </Route>
      

    <Route exact path="/inventory/:id">
      <div className="details-container">
      <Details />
      </div>
    </Route>

      
    <Route path="/add">
      <AddInventory />
    </Route>
      

      
    <Route path="/contact">
      <Contact />
    </Route>
      

      
    <Route path="/about">
      <About />
    </Route>
      

     
      <Route exact path="/inventoryresults">
      <InventoryResults />
    </Route>
    
</div>
    
      <Footer />
      </div>
  
  );
}

export default App;
