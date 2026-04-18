"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function addBook(list, book) {
    return [...list, book];
}

function findByIsbn(list, isbn) {
    return list.find(book => book.isbn === isbn);
}

let myBooks = [];
const book1 = {
    id: "B-001",
    title: "TypeScript Deep Dive",
    isbn: "123-456-789",
    author: "Basarat Ali Syed"
};
const book2 = {
    id: "B-002",
    title: "Refactoring",
    isbn: "987-654-321",
    author: "Martin Fowler"
};
myBooks = addBook(myBooks, book1);
myBooks = addBook(myBooks, book2);
const found = findByIsbn(myBooks, "123-456-789");
if (found) {
    console.log(`Found book: ${found.title} by ${found.author}`);
}
else {
    console.log("Book not found.");
}
console.log(`Total books in TS library: ${myBooks.length}`);
