import CartWidget from "../components/CartWidget/CartWidget";
import ImagenLogo from "../components/Header/ImagenLogo";
import "../App.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <ImagenLogo />{" "}
      </Link>
      <div className="logo">R.S.</div>
      <div>
        <ul>
          <li>
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
