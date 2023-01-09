import { Button } from "antd";
import { useState } from "react";
import "antd/dist/reset.css";
import "./App.css";
import Product from "./components/Modal/product";
import { ProductDetail } from "./components/Modal/product";
import Header from "./Containers/NavBar";
import HighlightedContent from "./Containers/HighlightedContent";
import NewsContainer from "./components/Modal/product";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/footer/Footer";

function MainContainer({ children }) {
  return <main>{children}</main>;
}

function App() {
  const [ari,setAri]= useState('ari');
  console.log('app mounted',ari);
  return (
    <div className="App">
      <div className="App">
        <Header />
        <ItemListContainer greeting={"Hola usuario, Bienvenido!!!"} />
        <MainContainer>
          <HighlightedContent />
        </MainContainer>
          <Button onClick={()=>setAri('gooButton')} className="bottomContainer" type="primary">
            Button{ari}
          </Button>
        <ProductDetail />
        <Product />
       <NewsContainer /> 
       
       <Footer/> 
       
      </div>
    </div>
  );
}

export default App;
