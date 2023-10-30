// Файл About.tsx
// import { Link } from "remix";
import { Link } from "@remix-run/react";

// Решта коду залишається без змін

import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/home">Повернутися на головну сторінку</Link>
      <br />
      <Link to="/comments">Перейти на сторінку "З Коментами"</Link>
      <Outlet />
    </div>
  );
}

export default About;
