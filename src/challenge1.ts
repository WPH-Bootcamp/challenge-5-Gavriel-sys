type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

const books: Book[] = [];

function addBook(book: Book): void {
  books.push(book);
}

function listBooks(): void {
  books.forEach((book) => {
    console.log(`${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

function searchBook(title?: string): void {
  if (title !== undefined) {
    console.log(`Search Result for "${title}":`);
    books.forEach((book) => {
      if (book.title === title) {
        console.log(
          `${book.title} by ${book.author} (${book.publicationYear})`
        );
      }
    });
  }
}

addBook({
  title: `The Great Gatsby`,
  author: `F. Scott Fitzgerald`,
  publicationYear: 1925,
});
addBook({ title: `1984`, author: `George Orwell`, publicationYear: 1949 });

listBooks();

searchBook(`1984`);

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
