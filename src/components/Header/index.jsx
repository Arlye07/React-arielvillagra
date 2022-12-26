import "./style.css";

function Header({ numbreOfProducts: nroProducts = 3 }) {
  return (
    <head className="header">
      <div className="companyName">Art Store {nroProducts}</div>
    </head>
  );
}

export default Header;
