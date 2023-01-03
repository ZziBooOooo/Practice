import "./App.css";
import Main from "./Component/Main";
import Product from "./Component/Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="leftBox">
          <div className="titleBox">
            <Link to="/Main">HOME</Link>
            <p>|</p>
            <Link to="/Product">PRODUCT</Link>
          </div>
          <div className="ContentBox">
            <div className="ContentText">React State & Props</div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/Main" element={<Main></Main>}></Route>
        <Route path="/Product" element={<Product></Product>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
