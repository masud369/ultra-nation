import React from 'react';
import './App.css';
import NationName from './Components/NationName/NationName';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';
import Nomathc from './Components/Nomatch/Nomathc';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/home" element={<NationName/>}/>
          <Route path="/country/:countryDetails" element={<CountryDetails />}/>
          <Route path="/" element={<NationName/>}/>
          <Route path="*" element={<Nomathc />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
