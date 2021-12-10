import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navigation from "./components/Navigation";
// import HomePage from "./components/pages/HomePage";
// import FilmInfo from "./components/pages/FilmInfo";
// import FilmSearch from "./components/pages/FilmSearch";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() =>
  import("./components/pages/HomePage" /* webpackChunkName: "HomePage" */)
);
const FilmInfo = lazy(() => import("./components/pages/FilmInfo"));
const FilmSearch = lazy(() => import("./components/pages/FilmSearch"));

// npm i react-toastify

function App() {
  const { path } = useRouteMatch();

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path={`${path}movies/:movieId`}>
            <FilmInfo />
          </Route>
          <Route path={`${path}movies`}>
            <FilmSearch />
          </Route>
          <Route to="*">
            <HomePage />
          </Route>
        </Switch>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
