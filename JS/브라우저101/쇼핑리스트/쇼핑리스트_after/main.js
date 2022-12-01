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
const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text === ''){ // 아무것도 입력하지 않으면 함수를 나감
        input.focus();
        return;
    }
    // 2. 받아온 텍스트를 이용해서 새로운 아이템을 만듦(텍스트+삭제버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로만든 아이템을 추가함
    items.appendChild(item);

    // 새로 추가된 아이템으로 스크롤 이동
    item.scrollIntoView({block:'center'});
    // 4. 인풋을 초기화함 + 자동으로 포커스
    input.value='';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item = document.createElement('li');
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>' // 변동할 이유가 없기 때문에 innerHTML씀
    deleteBtn.addEventListener('click', () => { // 이벤트리스너를 새로 만드는 아이마다 일일히 추가하기 때문에 비효율적 
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item_divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;

}
addBtn.addEventListener('click',()=>{
    onAdd();
})

input.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter') {
        onAdd();
    }

})