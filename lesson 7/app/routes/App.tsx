// Файл App.tsx
import { BrowserRouter as Router, Route } from "remix";
import Home from "./Home";
import About from "./About";
import Comment from "./Comment";

function App() {
  return (
    <Router>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/comments" element={<Comment />} />
    </Router>
  );
}

export default App;
