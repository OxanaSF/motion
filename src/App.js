import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./pages/Button";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main>
        <Sidebar />

        <section className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;
