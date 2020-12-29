import React from "react";
import "./App.scss";
import { NavbarPokemon } from "./components/navbarPokemon";
import { HomePage } from "./pages/homePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DetailPage } from "./pages/detailPage";
import { SearchPokemon } from "./components/searchPokemon";
function App() {
  return (
    <Router>
      <div className="App">
        <NavbarPokemon title="Pokedex" />
        <SearchPokemon />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/detail/:pokemon">
            <DetailPage />
          </Route>
          <Redirect to={{ pathname: "/home" }} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
