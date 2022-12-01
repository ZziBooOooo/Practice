const addNoteBtn = document.querySelector(".addNoteBtn");
const notesBox = document.querySelector(".notesBox");

let generatedId = 1;
let notesData = [];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

if (localStorage.getItem("notes") != null) {
  notesData = JSON.parse(localStorage.getItem("notes"));
}

if (notesData.length !== 0) {
  let lastIndex = notesData.length - 1;
  generatedId = notesData[lastIndex].id + 1;
}

function displayExistNotes() {
  notesData.forEach(function (oldNote) {
    let noteBox = document.createElement("div");
    noteBox.setAttribute("class", "noteBox");
    const noteTextForm = document.createElement("form");
    noteTextForm.setAttribute("class", "noteTextForm");
    let noteText = document.createElement("textarea");
    noteText.setAttribute("class", "noteText");
    const noteBottomBox = document.createElement("div");
    noteBottomBox.setAttribute("class", "noteBottomBox");

    noteText.setAttribute("data-id", oldNote.id);
    noteText.value = oldNote.noteText;
    noteText.onkeyup = updateContent;

    notesBox.appendChild(noteBox);
    noteBox.appendChild(noteTextForm);
    noteTextForm.appendChild(noteText);
    noteBox.appendChild(noteBottomBox);
  });
}

function createNote() {
  let noteBox = document.createElement("div");
  noteBox.setAttribute("class", "noteBox");
  const noteTextForm = document.createElement("form");
  noteTextForm.setAttribute("class", "noteTextForm");
  let noteText = document.createElement("textarea");
  noteText.setAttribute("class", "noteText");
  const noteBottomBox = document.createElement("div");
  noteBottomBox.setAttribute("class", "noteBottomBox");

  noteText.setAttribute("data-id", generatedId);

  noteText.onkeyup = updateContent;

  notesBox.appendChild(noteBox);
  noteBox.appendChild(noteTextForm);
  noteTextForm.appendChild(noteText);

  noteBox.appendChild(noteBottomBox);

  const ab = getCurrentDate();
  let textMonth = ab[1];
  let currentMonth = numChangeMonth(textMonth);

  noteBottomBox.innerHTML = `
  <span class="noteDate"> ${currentMonth} ${ab[2]}, ${ab[0]}</span>
  <button class="more">
  <i class="fas fa-trash"></i>
  </button>`;

  notesData.push({ id: generatedId, noteText: "" });
  generatedId++;

  localStorage.setItem("notes", JSON.stringify(notesData));
}

function getCurrentDate() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let date = currentDate.getDate();

  return [year, month, date];
}

function numChangeMonth(textMonth) {
  let namedMonth = monthNames[textMonth];
  return namedMonth;
}

function updateContent() {
  let contentId = Number(this.getAttribute("data-id"));
  let contentValue = this.value;

  let obj = notesData.find(function (note) {
    return note.id === contentId;
  });

  obj.noteText = contentValue;
  console.log(obj);

  localStorage.setItem("notes", JSON.stringify(notesData));
}
addNoteBtn.addEventListener("click", createNote);

displayExistNotes();
