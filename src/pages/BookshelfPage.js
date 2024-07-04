import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default BookshelfPage;
