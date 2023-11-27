const myLibrary = [];

function Book(title, author, numPages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead ? "read" : "not read yet";
}

// Book.prototype.info = function() {
//   return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead}`
// };

const test = new Book("title", "author", 42, true);

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

function addBookToLibrary(book) {
  myLibrary.push(book);
  const bookTable = document.querySelector(".bookTable tbody");    const row = document.createElement("tr");
  bookTable.appendChild(row);
  for (const bookData in book) {
    const td = document.createElement("td");
    td.textContent = book[bookData];
    row.appendChild(td);
  }
}

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector(".newBook");
const submitNewBook = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");


newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

submitNewBook.addEventListener("click", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("dialog .title");
  const authorInput = document.querySelector("dialog .author");
  const pagesInput = document.querySelector("dialog .pages");
  const readBox = document.querySelector("dialog .read");

  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readBox.checked);
  dialog.close();

  addBookToLibrary(newBook);
});
