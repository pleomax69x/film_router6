import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navBar">
      <ul className="navBar_list">
        <li className="navBar_list--item">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
