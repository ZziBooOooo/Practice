/*
** 계획세우기
1. 사용자가 입력하기
2. 버튼을 클릭해서 추가하거나 엔터키로 추가
3. 등록한 아이템은 리스트에 표기
4. 쓰레기통 클릭시 아이템 삭제
*/

//** 아래처럼 코드를 하나하나 설명하는 주석작성법은 옳지 않다.
// '왜'를 설명하는 주석으로 작성
// 왜 이렇게 작성했는지, 왜필요한지 등등
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");
const form = document.querySelector(".new_form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    // 아무것도 입력하지 않으면 함수를 나감
    input.focus();
    return;
  }
  // 2. 받아온 텍스트를 이용해서 새로운 아이템을 만듦(텍스트+삭제버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로만든 아이템을 추가함
  items.appendChild(item);

  // 새로 추가된 아이템으로 스크롤 이동
  item.scrollIntoView({ block: "center" });
  // 4. 인풋을 초기화함 + 자동으로 포커스
  input.value = "";
  input.focus();
}

let id = 0; // 숫자로 지정하는 것은 좋지않지만 미니프로젝트기 때문에 그냥 :) UUID나 오브젝트의 해시코드 같은것을 사용하는 것이 좋음
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
        <span class="item_name">${text}</span>
        <button class="item_delete">
            <i class="fas fa-trash-alt"  data-id=${id}></i>
        </button>
    </div>
    <div class="item_divider"></div>`;
  id++;
  return itemRow;
}

/* <form>태그 없을 때 사용한 코드
addBtn.addEventListener('click',()=>{
    onAdd();
})

input.addEventListener('keydown',(event)=>{
    if(event.isComposing){
        return; // 컴포징중일때는 이벤트 실행 안함
    }
    if(event.key === 'Enter') {
        onAdd();
    }

})*/

items.addEventListener("click", (event) => {
  //이벤트 위임

  // 아래 코드가 없으면 items안의 빈공간 아무데나 눌러도 이벤트 실행
  //if(event.target.nodeName === 'I'){ // 다른아이콘일땐 삭제하고싶지 않을수도,,? 타입으로 지정하는 것보다 데이터셋이 좋다
  //e.target.className === 'fas fa-trash-alt' 클래스네임으로 하는 방법도 있음

  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    // 아이템로우(리스트)에서 삭제에 해당하는 리스트를 찾아야함!
    // 쓰레기통아이콘에도 동일한 데이터id를 줘서 삭제할 리스트를 속성값으로 찾을 수 있음
    toBeDeleted.remove();
  }
});
