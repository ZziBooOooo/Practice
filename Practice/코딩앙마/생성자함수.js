function Item(title, price) {
  // this = {};

  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };

  // return this;
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);

console.log(item1, item2);

item2.showPrice();
