/* eslint-disable */
import "./App.css";
import "./test.scss";
import sy from "./test.module.css";

function App() {
  let style = {
    "font-size": "3rem",
    color: "white",
    "font-weight": "bold",
  };
  return (
    <div className="App">
      <img src="./logo.svg" />
      <p style={style}>하이</p>
      <p className={sy.color}>css 모듈형식 표현</p>
    </div>
  );
}

export default App;
