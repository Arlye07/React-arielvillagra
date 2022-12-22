//import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
//import logo from './logo.svg';
import { Button } from "antd";
import "antd/dist/reset.css";
import "./App.css";
//import Product from './components/product';
import Product from "./components/Modal/product";
import { ProductDetail } from "./components/Modal/product";
import Header from "./Containers/NavBar";
import HighlightedContent from "./Containers/HighlightedContent";
import NewsContainer from "./Containers/NewsContainer";
//import CartWidget from "./components/CartWidget/CartWidget";




function MainContainer({children}){
  return (
    <main>
      {children}
    </main>
  )
}

function App() {
  //let foo= 'foo';
  //console.log('APP MOUNTED', useState('foo'));
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="App">
        <Header />
        <MainContainer>
        <HighlightedContent />
        <Button className="bottomContainer" type="primary">Button</Button>
        {/* <button onClick={() => foo = 'fooChanged'} className="button" type="primary"> CLICK </button> */}
        </MainContainer>
        <ProductDetail />
        <Product />
        <NewsContainer/>
      </div>
    </div>
  );
}

export default App;
