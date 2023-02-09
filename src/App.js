import "./App.css";
import Header from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CustomProvider from "./components/Context/CustomProvider";

function MainContainer({ children }) {
  return <main>{children}</main>;
}

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="App">
          <div className="App">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting={"Hola usuario, Bienvenido!!!"} />
                }
              />
              <Route
                path="/marca/:categoryName"
                element={
                  <ItemListContainer greeting={"Hola usuario, Bienvenido!!!"} />
                }
              />

              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
            <MainContainer></MainContainer>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
