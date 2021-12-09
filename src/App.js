import "./App.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import FilmInfo from "./components/pages/FilmInfo";
import FilmSearch from "./components/pages/FilmSearch";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// npm i react-toastify

function App() {
  const { path, url } = useRouteMatch();
  console.log(path);
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`${path}movies/:movieId`} exact>
          <FilmInfo />
        </Route>
        <Route path="/movies" exact>
          <FilmSearch />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
