import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div className="bookshelf">
      {books.length ? (
        books.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          </div>
        ))
      ) : (
        <p>No books in your bookshelf.</p>
      )}
    </div>
  );
};

export default Bookshelf;
