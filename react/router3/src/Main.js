import React from "react";
import data from "./data/data.json";
import { useParams } from "react-router-dom";

/* useRef 알아두기! */

const Main = () => {
  let { page } = useParams();
  console.log(page);

  console.log(data[page]);
  let datas = data[page];

  /* map부분 -> 컴포넌트로 분리하기
  <div>에 대한 컨트롤은 해당 컴포넌트에서 가능하기 때문(렌더링과 상관없이?)
  스크립트 명령할 때 수월하다
  Main에서 모든 스크립트를 처리하면 길고 복잡해진다.
  */

  return (
    <div className="contentBox">
      <p id="title"> {page} </p>
      <div className="contents">
        {datas.map((data) => {
          console.log(data);
          return (
            <div>
              <img src={data.photo}></img>
              <p> {data.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
