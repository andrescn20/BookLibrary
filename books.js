// Im making a book library. User will input some data regarding the books.
// Every book will be stored as an object. Then, every object-book will be stored
// in an Array, which will act as the Library itself.

//Html Elements Selection
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

const addBtn = document.getElementById("addBtn");

const libraryContainer = document.getElementById("library");

const bookContainer = document.createElement("div");
bookContainer.setAttribute("class", "bookContainer");

const bookTitle = document.createTextNode("");
// bookTitle.setAttribute("class", "bookTitle");

const bookAuthor = document.createElement("p");
bookAuthor.setAttribute("class", "bookAuthor");

const bookPages = document.createElement("p");
bookPages.setAttribute("class", "bookPages");

const readStatus = document.createElement("p");
readStatus.setAttribute("class", "bookStatus");

let currentBook = {};
let library = [""];

//Event Listener for button to Rock N Roll
addBtn.addEventListener("click", (event) => {
  addToLibrary(generateBook());
  //Displays Books:
  library.foreach(generateBookDisplay());
});

// Retrieve Data and turns into array.
function userData() {
  let bookData = [title.value, author.value, pages.value];
  return bookData;
}

//Calls constructor with retrieved data
function generateBook() {
  let newBook = new Book(...userData());
  currentBook = newBook;
  return newBook;
}

//Object Constructor for making new Book entries
function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.page = pages);
}

//Receives the newly Generated Book and adds to Library Array.
function addToLibrary(currentBook) {
  library.push(currentBook);
}

function generateBookDisplay(currentBook) {
  console.log(currentBook);
  bookContainer.appendChild(bookTitle);
  libraryContainer.appendChild(bookContainer);
}
