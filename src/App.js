import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddressPage from "./components/AddressPage";
import PickupPage from "./components/PickupPage";
import OffersPage from "./components/OffersPage";
import HelpPage from "./components/HelpPage";

function App() {
  const [address, setAddress] = useState("");
  const [shortAddress, setShortAddress] = useState("");
  const [geoCode, setGeoCode] = useState({});
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage
              {...props}
              address={address}
              setAddress={setAddress}
              shortAddress={shortAddress}
              geoCode={geoCode}
              setGeoCode={setGeoCode}
            />
          )}
        />
        <Route
          exact
          path="/address"
          render={(props) => (
            <AddressPage
              {...props}
              address={address}
              setAddress={setAddress}
              shortAddress={shortAddress}
              setShortAddress={setShortAddress}
              geoCode={geoCode}
              setGeoCode={setGeoCode}
            />
          )}
        />
        <Route exact path="/pickup" component={PickupPage} />
        <Route exact path="/offers" component={OffersPage} />
        <Route exact path="/help" component={HelpPage} />
      </div>
    </Router>
  );
}

export default App;

/*
        <Route
          exact
          path="/"
          render={() => {
            alert('dd"');
            return <HomePage />;
          }}
        />
*/
