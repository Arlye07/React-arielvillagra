import CartWidget from "../CartWidget/CartWidget";
import ImagenLogo from "./ImagenLogo";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <ImagenLogo />{" "}
      </Link>
      <div className="logo">R.S.</div>
      <div>
        <ul className="nav-color">
          <li className="nav-color">
            <NavLink to="/">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/marca/Lidherma">Lidherma</NavLink>
          </li>
          <li>
            <NavLink to="/marca/Kamikaze">Kamikaze</NavLink>
          </li>
          <li>
            <NavLink to="/marca/Biobellus">Biobellus</NavLink>
          </li>
        </ul>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
}
