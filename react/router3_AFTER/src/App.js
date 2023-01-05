

import './Style.scss';
import {useState, useRef} from 'react';
import {Link,BrowserRouter,Route, Routes} from 'react-router-dom';
import Main from './page/Main';

function App() {
  const [nav,setNav] = useState(false);
  let elBtn = useRef();

  let navFn = function(){
    elBtn.current.classList.toggle('active');
  }

  return (
    <BrowserRouter>
      <header ref={elBtn} >
        <button onClick={navFn} >버거메뉴</button>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/movies">MOVIES</Link>
          <Link to="/music">MUSIC</Link>
          <Link to="/apps">APPS</Link>
          <Link to="/software">SOFTWARE</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/:page" element={<Main/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

