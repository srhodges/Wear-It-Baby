import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddInventory from './components/AddInventory.jsx';
import Details from './components/InventoryDetails.jsx';
import Inventory from './components/Inventory';

// console.log(process.env.REACT_APP_AIRTABLE_BASE);
// console.log(process.env.REACT_APP_AIRTABLE_KEY);

function App() {
  return (
    <div className="App">
    <Navbar/>
      <div className="Home">
    <Route exact path="/">
      {/* <Home /> */}
    </Route>
      </div>

      <div className="Inventory">
    <Route exact path="/inventory">
      <Inventory />
    </Route>
      </div>

      <div className="Details">
    <Route exact path="/inventory/:id">
      <Details />
    </Route>
      </div>

      <div className="Add">
    <Route path="/add">
      <AddInventory />
    </Route>
      </div>

      <div className="Contact">
    <Route path="/contact">
      {/* <ContactForm /> */}
    </Route>
      </div>
    </div>
  );
}

export default App;
