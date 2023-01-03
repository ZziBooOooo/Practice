import "./App.css";
import Test from "./Test";

function App() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; /* 이미지 주소라고 생각 */
  return (
    <div className="App">
      {data.map(function (res) {
        return <Test key={res} b={res} />;
      })}
    </div>
  );
}

export default App;
