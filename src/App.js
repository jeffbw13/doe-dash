import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddressPage from "./components/AddressPage";
import PickupPage from "./components/PickupPage";
import OffersPage from "./components/OffersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/address" component={AddressPage} />
        <Route exact path="/pickup" component={PickupPage} />
        <Route exact path="/offers" component={OffersPage} />
      </div>
    </Router>
  );
}

export default App;
