import fs from "fs";

fs.writeFileSync("user_info.txt", "Ivan Arsov is the best student in QinShift Academy");

const books = [
    {id: 1, title: 'The secret garden', author: 'Frances Hodgson Burnett', genre: 'children\'s Literature'},
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic Literature' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic Literature' },
    { id: 4, title: '1984', author: 'George Orwell', genre: 'Dystopian Fiction' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Coming-of-Age Fiction' },
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romantic Fiction' },
    { id: 7, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Young Adult Fiction' },
    { id: 8, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 10, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery Thriller' }
];

const writeBooksData = (books) => {
    const booksData = books.map(book =>
       `${book.id} - ${book.title} by ${book.author} is of genre ${book.genre},` 
       ).join('\n');

       fs.writeFileSync("booksData.txt", booksData);
       console.log("Books data has been written to booksData.txt");
}

writeBooksData(books);