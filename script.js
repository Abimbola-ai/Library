const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let message = title + " by " + author + ", " + pages + " pages " + ", "+ read
    return message
  }
}

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet.");

// console.log(theHobbit.info())
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log("Book added to library")
  console.log(myLibrary);
  displayLibrary();
}

document.getElementById("addBookButton").addEventListener("click", () => {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = parseInt(document.getElementById("bookPages").value);
  const read = document.getElementById("bookRead").value === "Yes";
  addBookToLibrary(title, author, pages, read);
} );


function displayLibrary() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");
    const serialNumberCell = document.createElement("td");
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const toggleReadCell = document.createElement("td");

    serialNumberCell.textContent = index + 1;
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read ? "Yes" : "No";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayLibrary();
    });
    deleteCell.appendChild(deleteButton); // Append to the delete cell

    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = book.read ? "Mark Unread" : "Mark Read";
    toggleReadButton.addEventListener("click", () => {
      book.read = !book.read;
      displayLibrary();
    });
    toggleReadCell.appendChild(toggleReadButton); // Append to the toggle read cell

    row.appendChild(serialNumberCell);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteCell);
    row.appendChild(toggleReadCell);

    tableBody.appendChild(row);
  });
}


