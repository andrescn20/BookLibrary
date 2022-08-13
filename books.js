// Im making a book library. User will input some data regarding the books.
// Every book will be stored as an object. Then, every object-book will be stored
// in an Array, which will act as the Library itself.

//Html Elements Selection
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const modal = document.getElementById("modal");
const readStatus = document.getElementById("readStatus");
const span = document.getElementsByClassName("close")[0];

const addBtn = document.getElementById("addBtn");
const modalBtn = document.getElementById("modalBtn");

const libraryContainer = document.getElementById("library");

// Add Event Listener to New Book Button --> Opens Modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// Add Event Listener to closing Span of modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close Modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Initialice the Library Array
let library = [];

//Event Listener to Add Book Button within Modal
addBtn.addEventListener("click", (event) => {
  let currentBook = new Book(...userData());
  currentBook.addToLibrary(currentBook);

  let bookContainer = document.createElement("div");
  bookContainer.setAttribute("class", "bookContainer");
  let bookTitle = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let removeBtn = document.createElement("button");
  let btnText = document.createTextNode("Remove");
  let statusBtn = document.createElement("button");
  let statusText = document.createTextNode("Read?");

  bookTitle.setAttribute("class", "titles");
  bookAuthor.setAttribute("class", "author");
  bookPages.setAttribute("class", "pages");
  statusBtn.setAttribute("class", "statusButton");

  library.forEach((element) => {
    let readValue = false;
    bookTitle.innerHTML = element.title;
    bookAuthor.innerHTML = element.author;
    bookPages.innerHTML = element.pages;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(removeBtn);
    removeBtn.appendChild(btnText);
    bookContainer.appendChild(statusBtn);
    statusBtn.appendChild(statusText);

    // Event Listener for btn that removes Books from Library
    removeBtn.onclick = function () {
      bookContainer.remove();
    };

    //Event Listener for Read Status Button
    statusBtn.onclick = function () {
      readValue = !readValue;
      if (readValue === true) {
        statusBtn.style.background = "green";
        statusBtn.innerHTML = "Read";
      } else if (readValue === false) {
        statusBtn.style.background = "red";
        statusBtn.innerHTML = "Not Read";
      }
    };

    libraryContainer.appendChild(bookContainer);
  });
});

// Retrieve Data and turns into array.
function userData() {
  let bookData = [title.value, author.value, pages.value];
  return bookData;
}

//Book Class
class Book {
  constructor(title, author, pages, readStatus) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.readStatus = true);
  }

  addToLibrary(currentBook) {
    library.push(currentBook);
  }

  // generateBook() {
  //   const newBook = new Book(...userData());
  //   return newBook;
  // }
}
