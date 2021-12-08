import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import FilmInfo from "./components/pages/FilmInfo";
import FilmSearch from "./components/pages/FilmSearch";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// npm i react-toastify

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          {/* <FilmInfo /> */}
          <FilmSearch />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
