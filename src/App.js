import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./Blog";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
