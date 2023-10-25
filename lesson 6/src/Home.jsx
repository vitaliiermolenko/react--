import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Перейти на сторінку "Про нас"</Link>
      <br />
      <Link to="/comments">Перейти на сторінку "З Коментами"</Link>
    </div>
  );
}

export default Home;
