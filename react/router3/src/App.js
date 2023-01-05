import "./App.scss";
import Main from "./Main";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import data from "./data/data.json";

function App() {
  const [style, setStyle] = useState(false);
  console.log({ data }.data);

  function nav_Click_toggle() {
    setStyle((style) => !style);
  }

  function stopChange() {
    setStyle("fulNav");
  }

  /* 
  부모의 값이 변경된다면
  그때 자식들을 컨트롤할 수 있도록 작성
  ex) .App.active #ham_menu{} 이런식으로!
  */

  return (
    <BrowserRouter>
      <div className="App">
        <div className={style ? "navBox" : "fulNav"} onClick={nav_Click_toggle}>
          <div id="ham_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div id="menuBox" onClick={stopChange}>
            <Link to="/movies">MOVIES</Link>
            <Link to="/music">MUSIC</Link>
            <Link to="/apps">APPS</Link>
            <Link to="/software">SOFTWARE</Link>
          </div>
        </div>

        <Routes>
          <Route path="/:page" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
