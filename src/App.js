import { Button } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import "./App.css";
import Header from "./Containers/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

function MainContainer({ children }) {
  return <main>{children}</main>;
}

function App() {
  const [ari, setAri] = useState("ari");
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App">
          <Header />
          <Routes>
          <Route path="/" element={
            <ItemListContainer greeting={"Hola usuario, Bienvenido!!!"} />
          } />
          <Route path="/marca/:categoryName" element={
            <ItemListContainer greeting={"Hola usuario, Bienvenido!!!"} />
          } />
          
          <Route path="/detail" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
          <MainContainer>
          </MainContainer>
          <Button
            onClick={() => setAri("gooButton")}
            className="bottomContainer"
            type="primary"
          >
            Button{ari}
          </Button>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
