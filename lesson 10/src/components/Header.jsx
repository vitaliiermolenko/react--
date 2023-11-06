import React from 'react';

function Header() {
  return (
    <header>
      <h1>Мій веб-сайт</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Домашня</a>
          </li>
          <li>
            <a href="/users">Користувачі</a>
          </li>
          <li>
            <a href="/posts">Дописи</a>
          </li>
          <li>
            <a href="/photos">Фото</a>
          </li>
          <li>
            <a href="/comments">Коментарі</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
