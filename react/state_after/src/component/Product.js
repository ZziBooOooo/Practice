import React, { useState } from "react";
import p_data from "../data/p_data.json";
import Item from "./Item";

const Product = () => {
  let [title, setTitle] = useState("title~~");
  console.log("useState로 값을 변경하면 이쪽도 실행이된다.");
  /* 자식이 함수modal에 값을 부모에게 보냄 */
  let modal = (n) => {
    const elModal = document.querySelector(".modal");
    elModal.classList.add("active");
    setTitle(n.title);

    elModal.onclick = () => {
      elModal.classList.remove("active");
    };
  };

  return (
    <article className="list">
      <h2>Product</h2>
      <div>
        {p_data.data.map((list, key) => {
          return (
            <Item key={list.id} itemList={list} fn={modal}></Item>
          ); /* Item 컴포넌트에 list값 전달 - 매개변수처럼! & 함수도 넘길 수 있다. 괄호없이 전달했으므로 실행이 아닌 함수 자체를 전달 */
        })}
      </div>
      <p className="modal">{title}</p> {/* innerHTML대신 useState->간편하다! */}
    </article>
  );
};

export default Product;

/* 클릭이 item.js에서 발생했는데 데이터를 어떻게 가져올까?(자식->부모)





*/
