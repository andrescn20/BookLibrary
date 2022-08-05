// Im making a book library. User will input some data regarding the books.
// Every book will be stored as an object. Then, every object-book will be stored
// in an Array, which will act as the Library itself.

//Html Elements Selection
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

const addBtn = document.getElementById("addBtn");

const libraryContainer = document.getElementById("library");

let bookContainer = document.createElement("div");
bookContainer.setAttribute("class", "bookContainer");

let Silmarillion = {
  title: "Silmarillion",
  author: "Tolkien",
  pages: "468",
  readStatus: false,
};

let currentBook = {};
let library = [Silmarillion];

//Event Listener for button to Rock N Roll
addBtn.addEventListener("click", (event) => {
  addToLibrary(generateBook());

  console.log(library);

  let bookTitle = document.createTextNode("");

  let bookAuthor = document.createTextNode("");

  let bookPages = document.createTextNode("");

  let readStatus = document.createTextNode("");

  library.forEach((element) => {
    bookTitle.data = element.title;
    bookAuthor.data = element.author;
    bookPages.data = element.pages;

    if (element.readStatus == false) {
      readStatus.data = "Not Read";
    } else {
      readStatus.data = "Read";
    }

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(readStatus);

    libraryContainer.appendChild(bookContainer);
  });
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
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readStatus = false);
}

//Receives the newly Generated Book and adds to Library Array.
function addToLibrary(currentBook) {
  library.push(currentBook);
}

function generateBookDisplay(item) {
  console.log(item);
  bookContainer.appendChild(bookTitle);
  libraryContainer.appendChild(bookContainer);
}

// logFunction(){

// }
