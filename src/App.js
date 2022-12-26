import { Button } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Product from "./components/Modal/product";
import { ProductDetail } from "./components/Modal/product";
import Header from "./Containers/NavBar";
import HighlightedContent from "./Containers/HighlightedContent";
import NewsContainer from "./Containers/NewsContainer";
import ItemListContainer from "./components/ItemListContainer";


function MainContainer({ children }) {
  return <main>{children}</main>;
}

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <ItemListContainer greeting={"Hola usuario, Bien venido!!!"} />
        <MainContainer>
          <HighlightedContent />
          <Button className="bottomContainer" type="primary">
            Button
          </Button>
        </MainContainer>
        <ProductDetail />
        <Product />
        <NewsContainer />
      </div>
    </div>
  );
}

export default App;
