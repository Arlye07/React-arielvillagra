import CartWidget from "../components/CartWidget/CartWidget";
import ImagenLogo from "../components/Header/ImagenLogo";
import "../App.css";

export default function Header() {
  return (
    <header className="App-header">
      <ImagenLogo />
      <div className="logo">R.S.</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Staff</li>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <CartWidget />
    </header>
  );
}
