const myLibrary = [];


function Book(title, author, numPages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead ? "✔️" : "✘";
}

function toggleRead(e) {
  const bookIndex = e.target.parentElement.classList.value;
  const isRead = myLibrary[bookIndex].isRead;
  switch (isRead) {
    case "✔️":
      myLibrary[bookIndex].isRead = "✘";
      break;
    case "✘":
      myLibrary[bookIndex].isRead = "✔️";
      break;
  }
  displayBooks();
}

function removeBook(e) {
  const bookIndex = e.target.parentElement.classList.value;
  myLibrary.splice(bookIndex, 1);
  e.target.parentElement.remove();
  displayBooks();
}

function displayBooks() {
  const bookTable = document.querySelector("tbody");
  bookTable.textContent = "";
  
  for (libraryBook of myLibrary) {
    const row = document.createElement("tr");
    const bookIndex = myLibrary.indexOf(libraryBook);
    row.classList.add(bookIndex);
    bookTable.appendChild(row);
    
    const bookProperties = ["title", "author", "numPages", "isRead"];

    for (i in bookProperties) {
      const td = document.createElement("td");
      row.appendChild(td);
      td.textContent = libraryBook[bookProperties[i]];
    }

    const toggleReadButton = document.createElement("button");
    row.appendChild(toggleReadButton);
    toggleReadButton.textContent = "toggle read";
    toggleReadButton.addEventListener("click", toggleRead)

    const removeBookButton = document.createElement("button");
    row.appendChild(removeBookButton);
    removeBookButton.textContent = "delete";
    removeBookButton.addEventListener("click", removeBook)
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function submitBook() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");

  addBookToLibrary(
    title.value, 
    author.value, 
    pages.value, 
    read.checked
  )

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}


const newBookButton = document.querySelector("button.newBook");
const dialog = document.querySelector("dialog.newBook");
const submitBookButton = document.querySelector("dialog.newBook .submit");

newBookButton.addEventListener("click", () => dialog.showModal());
submitBookButton.addEventListener("click", submitBook)


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("title1", "author1", 1, true);
addBookToLibrary("title2", "author2", 2, true);
addBookToLibrary("title3", "author3", 3, true);
