import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import CP from "./pages/CP";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CPPlatformDetails from "./pages/CPPlatformDetails";
import CPGraphs from "./pages/CPGraphs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/cp" element={<CP />} />
        <Route path="/cp/:platform" element={<CPPlatformDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cp/graphs" element={<CPGraphs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
