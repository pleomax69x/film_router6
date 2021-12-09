import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navBar">
      <ul className="navBar_list">
        <li className="navBar_list--item">
          <NavLink
            to="/"
            className="navBar_list--link"
            activeClassName="navBar_list--link-active"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="navBar_list--link"
            activeClassName="navBar_list--link-active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
