// Файл Comment.tsx
import { Link } from "@remix-run/react";

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
