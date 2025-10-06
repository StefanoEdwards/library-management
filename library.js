import books from "./books.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

// Add book
function addBook(title, author, year) {
    const newBook = { title, author, year, isAvailable: true };
    books.push(newBook);
    console.log(`"${title}" added to the library.`);
}

// List available books
function listAvailableBooks() {
    const available = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].isAvailable) {
            available.push(books[i]);
        }
    }
    if (available.length === 0) {
        console.log("No books available to borrow.");
    } else {
        console.log("\n Available Books:");
        for (const book of available) {
            console.log(`- ${book.title} by ${book.author}`);
        }
    }
}

// Borrow book
function borrowBook(title) {
    const book = null;
    for (let i = 0; i < books.length; i++){
        if (books[i].title.toLowerCase() === title.toLowerCase()) {
            book = books[i];
            break;
        }
    }
    if (!book) {
        console.log("Book not found.");
    } else if (!book.isAvailable) {
        console.log(`"${book.title}" is currently unavailable.`);
    } else {
        book.isAvailable = false;
        console.log(`You borrowed "${book.title}".`);
    }
}

// Return book
function returnBook(title) {
    const book = null;
    for (let i = 0; i < books.length; i++){
        if (books[i].title.toLowerCase() === title.toLowerCase()) {
            book = books[i];
            break;
        }
    }
    if (!book) {
        console.log("Book not found.");
    } else {
        book.isAvailable = true;
        console.log(`You returned "${book.title}".`);
    }
}

// List books by author
function listBooksByAuthor(author) {
    const authorBooks = [];
    for (let i = 0; i < books.length; i++){
        if (books[i].author.toLowerCase() === author.toLowerCase()) {
            authorBooks.push(books[i]);
        }
    }
    if (authorBooks.length === 0) {
        console.log(`No books found by ${author}.`);
    } else {
        console.log(`\n Books by ${author}:`);
        for (const book of authorBooks) {
            console.log(`- ${book.title}`);
        }
    }
}

// Find books by year
function findBooksBefore(year) {
    const oldBooks = [];
    for (let i = 0; i < books.length; i++){
        if (books[i].year < year) {
            oldBooks.push(books[i]);
        }
    }
    if (oldBooks.length === 0) {
        console.log(`No books published before ${year}.`);
    } else {
        console.log(`\n Books published before ${year}:`);
        for (const book of oldBooks) {
            console.log(`- ${book.title} (${book.year})`)
        }
    }
}

// Remove book
function removeBook(title) {
    const index = -1;
    for (let i = 0; i < books.length; i++){
        if (books[i].title.toLowerCase() === title.toLowerCase()) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        console.log("Book not found.");
    } else {
        const removed = books.splice(index, 1);
        console.log(`"${removed[0].title}" has been removed from the library.`);
    }
}

// Main loop
let running = true;
while (running) {
    console.log("\n====== Library Menu ======");
    console.log("1. Add a New Book");
    console.log("2. List Available Books");
    console.log("3. Borrow a Book");
    console.log("4. Return a Book");
    console.log("5. List Books by Author");
    console.log("6. Find Books Published Before a Year");
    console.log("7. Remove a Book");
    console.log("8. Exit");

    let choice = prompt("Choose an option (1-8): ");

    switch (choice) {
        case '1':
            let title = prompt("Enter book title: ");
            let author = prompt("Enter book author: ");
            let year = parseInt(prompt("Enter publication year: "));
            addBook(title, author, year);
            break;

        case '2':
            listAvailableBooks();
            break;

        case '3':
            borrowBook(prompt("Enter the title of the book to borrow: "));
            break;

        case '4':
            returnBook(prompt("Enter the title of the book to return: "));
            break;

        case '5':
            listBooksByAuthor(prompt("Enter author name: "));
            break;

        case '6':
            findBooksBefore(parseInt(prompt("Enter year: ")));
            break;

        case '7':
            removeBook(prompt("Enter the title of the book to remove: "));
            break;

        case '8':
            running = false;
            console.log("Exiting program. Goodbye!");
            break;

        default:
            console.log("Invalid choice. Please try again.");
    }
}