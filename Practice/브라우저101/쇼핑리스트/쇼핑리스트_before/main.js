const addBtn = document.querySelector(".add");
const inputText = document.querySelector(".inputText");
const mainBox = document.querySelector(".mainBox");

function deleteList(e) {
  e.target.parentElement.remove();
}

function addList() {
  let inputTextValue = inputText.value;
  const listDiv = document.createElement("div");
  listDiv.setAttribute("class", "listdiv");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deletebtn");

  if (inputTextValue) {
    listDiv.textContent = inputTextValue;
    deleteBtn.textContent = "✖";
    mainBox.appendChild(listDiv);
    listDiv.appendChild(deleteBtn);
    inputText.value = "";
  }

  deleteBtn.addEventListener("click", deleteList);
}

addBtn.addEventListener("click", addList);

inputText.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    addList();
  }
});
