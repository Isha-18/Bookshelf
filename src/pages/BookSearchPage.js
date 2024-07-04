import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';
import { Link } from 'react-router-dom';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h1>Book Search</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf">Go to My Bookshelf</Link>
    </div>
  );
};

export default BookSearchPage;
