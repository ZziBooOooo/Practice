import "./css/common.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./component/Main";
import Product from "./component/Product";

function App() {
  let [idx, setIdx] = useState(0);

  let nav = (n) => {
    console.log(n);
    setIdx(n);
  };
  return (
    <BrowserRouter>
      <header>
        {/* JSX문법 - && : 앞조건이 true이면 뒤를 실행해줌 */}
        <Link to="/" className={idx == 0 && "active"} onClick={() => nav(0)}>
          HOME
        </Link>
        <Link
          to="/product"
          className={idx == 1 ? "active" : ""}
          onClick={() => nav(1)}
        >
          Product
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
