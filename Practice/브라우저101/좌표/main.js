const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

// 좌표값을 left, top등으로 설정해서 변경하는 애니메이션 -> 렌더링할때 
// 레이아웃 - 페인트 - 컴포지션까지 다 일어났을 것! 좋지않은 방식
// translate를 사용하자

document.addEventListener('mousemove', event => {
   const x = event.clientX;
   const y = event.clientY;

   vertical.style.transform = `translateX(${x}px)`;
   horizontal.style.transform = `translateY(${y}px)`;
   target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`;
   tag.style.transform = `translate(${x}px, ${y}px)`;
   tag.innerHTML = `${x}px, ${y}px`;
})

/* document.addEventListener('mousemove', (event) => {
   const x = event.clientX;
   const y = event.clientY;
   console.log(`${x} ${y}`);
   
   vertical.style.left = `${x}px`; // style지정할때는 px가 필요하니까!
   horizontal.style.top = `${y}px`;
   target.style.left=`${x}px`;
   target.style.top=`${y}px`;
   tag.style.left=`${x}px`;
   tag.style.top=`${y}px`;

   tag.innerHTML = `${x}px, ${y}px`;
   
   
}) */