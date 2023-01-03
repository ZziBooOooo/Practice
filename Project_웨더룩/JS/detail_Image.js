idValue = localStorage.getItem("id_key");
styleList = JSON.parse(localStorage.getItem("style"));

let clickId = idValue.slice(1) - 1;
let img_src = styleList[clickId].image.slice(5);

console.log(detailImg);
detailImg.src = `../img/Cody${img_src}`;
