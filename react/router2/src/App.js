import "./scss/app.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Media from "./component/Media";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p className="title">OUR MEDIA LIBRARY</p>
        <div className="contentBox">
          <Link to="/Media">
            <img src="./img/08.jpg"></img>
            <p>MOVIES</p>
          </Link>
          <Link to="/Media">
            <img src="./img/08.jpg"></img>
            <p>MUSIC</p>
          </Link>
          <Link to="/Media">
            <img src="./img/08.jpg"></img>
            <p>APPS</p>
          </Link>
          <Link to="/Media">
            <img src="./img/08.jpg"></img>
            <p>SOFTWARE</p>
          </Link>
        </div>
      </div>

      <main>
        <Routes>
          <Route path="/Media" element={<Media></Media>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
