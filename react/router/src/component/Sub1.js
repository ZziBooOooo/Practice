import React from "react";
import { useParams, useNavigate } from "react-router-dom";

/* url뒤에 문자를 입력하면 params라는 변수에 값이 저장된다. */

/* 객체형태로 데이터 */
const Sub1 = () => {
  let { id } = useParams();
  let navi = useNavigate();

  setTimeout(() => {
    navi("/");
  }, 5000);

  let data = [
    { id: 0, name: "금토끼" },
    { id: 1, name: "은토끼" },
    { id: 2, name: "동토끼" },
  ];

  let result = data.filter((res) => {
    return res.id == id;
  });
  console.log(result); // result = [{id:0, name:"은토끼"}]
  return <div>sub1에 파라미터값은 {result[0].name}입니다</div>;
};

export default Sub1;
