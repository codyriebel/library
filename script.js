const myLibrary = [];

function Book(title, author, numPages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead ? 'read' : 'not read yet';
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead}`
};

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

function addBookToLibrary() {
  // get book details from input fields
  const newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
  myLibrary.push(newBook);
}

function displayBooks() {
  const bookDiv = document.querySelector('.books');

  for (const book in myLibrary) {
    bookDiv.textContent = book;
  }
}

addBookToLibrary();
console.log(myLibrary);