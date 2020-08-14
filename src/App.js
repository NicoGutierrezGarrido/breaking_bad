import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Random from './components/random';
import DeathCharacter from './components/death_character';
import HomeBarApp from './components/home';


function App() {
  return (
    <Router>
      <HomeBarApp/>
      <Switch>
        <Route exact path="/">
          <Random/>
        </Route>
        <Route exact path="/death_character">
          <DeathCharacter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;