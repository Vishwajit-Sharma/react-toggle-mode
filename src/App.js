import { useContext } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Context/ThemeContext";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
