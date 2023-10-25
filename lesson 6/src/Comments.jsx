import React from 'react';
import { Link } from 'react-router-dom';

function Comment() {
  return (
    <div>
      <h1>Comment</h1>
      <Link to="/home">Повернутися на головну сторінку</Link>
      <br />
      <Link to="/">Перейти на сторінку "Про нас"</Link>
    </div>
  );
}

export default Comment;
