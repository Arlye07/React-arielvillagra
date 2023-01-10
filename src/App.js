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
          
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
          <MainContainer>
          </MainContainer>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
