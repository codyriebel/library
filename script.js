const myLibrary = [];

function Book(title, author, numPages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead ? "✔️" : "✘";
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBooks() {
  const bookRowsContainer = document.querySelector('tr.container');
  bookRowsContainer.remove();
 
  const bookTableBody = document.querySelector('tbody');
  const bookTable = document.createElement('div');
  bookTable.classList.add('container');
  bookTableBody.appendChild(bookTable);

  for (libraryBook of myLibrary) {

    const row = document.createElement('tr');
    bookTable.appendChild(row);
    
    const bookProperties = ['title', 'author', 'numPages', 'isRead'];

    for (i in bookProperties) {
      const td = document.createElement('td');
      row.appendChild(td);
      td.textContent = libraryBook[bookProperties[i]];
    }
  }
}

addBookToLibrary(hobbit);
displayBooks();

displayBooks();