const myLibrary = [];

class Book {
  constructor(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
  }
}

function toggleRead(e) {
  const bookIndex = e.target.parentElement.parentElement.classList.value;
  if (myLibrary[bookIndex].isRead) {
    myLibrary[bookIndex].isRead = false;
  } else {
    myLibrary[bookIndex].isRead = true;
  }
  
  displayBooks();
}

function removeBook(e) {
  const bookIndex = e.target.parentElement.parentElement.classList.value;
  myLibrary.splice(bookIndex, 1);
  e.target.parentElement.parentElement.remove();
  displayBooks();
}

function displayBooks() {
  const bookTable = document.querySelector("tbody");
  bookTable.textContent = "";
  
  for (const libraryBook of myLibrary) {
    const row = document.createElement("tr");
    const bookIndex = myLibrary.indexOf(libraryBook);
    row.classList.add(bookIndex);
    bookTable.appendChild(row);
    
    const bookProperties = ["title", "author", "numPages"];

    for (i in bookProperties) {
      const td = document.createElement("td");
      row.appendChild(td);
      td.textContent = libraryBook[bookProperties[i]];
      td.classList.add(bookProperties[i]);
    }

    const readTd = document.createElement("td");
    row.appendChild(readTd);
    const toggleReadButton = document.createElement("button");
    toggleReadButton.classList.add("book");
    readTd.appendChild(toggleReadButton);
    if (libraryBook.isRead) {
      toggleReadButton.textContent = "📗"
    } else {
      toggleReadButton.textContent = "🕮"
    }
    toggleReadButton.addEventListener("click", toggleRead)

    const removeTd = document.createElement("td");
    row.appendChild(removeTd);
    const removeBookButton = document.createElement("button");
    removeTd.appendChild(removeBookButton);
    removeBookButton.classList.add('delete');
    removeBookButton.textContent = "❌";
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
addBookToLibrary("title2", "author2", 2, false);
addBookToLibrary("title3", "author3", 3, true);
