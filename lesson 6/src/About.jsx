import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/home">Повернутися на головну сторінку</Link>
      <br />
      <Link to="/comments">Перейти на сторінку "З Коментами"</Link>
    </div>
  );
}

export default About;
