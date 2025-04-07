import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import RouteConfig from "./routes";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <RouteConfig />
      </Router>
    </>
  );
}

export default App;
