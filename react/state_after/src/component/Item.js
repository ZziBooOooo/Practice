import React from "react";

const Item = ({ itemList, fn }) => {
  /*   console.log(itemList);
  console.log({ itemList });
  console.log(fn); */

  let detail = () => {
    fn(itemList); /* 자식에 있는 modal함수가 실행된다. */
    console.log(itemList.title);
  };

  return (
    <figure onClick={detail}>
      {/*     <figure onClick={()=>fn(item)}> */}
      <p>
        <img src={itemList.photo} />
      </p>
      <figcaption>
        <p>{itemList.title}</p>
        <code>{itemList.price}</code>
      </figcaption>
    </figure>
  );
};

export default Item;

/* 데이터를 전달하는 방법 - props! (부모->자식) */
/* Item컴포넌트에서 함수실행중 -> 매개변수 사용가능  */

/* 모든 figure에 이벤트 등록  */

/* 클릭했을 때 함수 fn이 실행되어야한다. */

/* 팝업창을 여기서 만들면 개쉽다..? */
