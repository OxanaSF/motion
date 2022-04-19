import "./App.css";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./pages/Button";
import AboutLoader from "./pages/AboutLoader";
import AboutModal from "./pages/AboutModal";
import Page4 from "./pages/Page4";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import { AnimatePresence } from 'framer-motion'

function App() {
  const [showModal, setShowModal] = useState(false)


  return (
    <Router>
      <main>
        <Sidebar />
        <Modal 
          showModal={showModal}
          setShowModal={setShowModal}
          />

        <section className="page-content">
        <AnimatePresence onExitComplete={()=> setShowModal(false)}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/loader" element={<AboutLoader/>} />
          <Route path="/modal" element={<AboutModal 
                  setShowModal={setShowModal}/>} />
          
        </Routes>
        </AnimatePresence>
        </section>
      </main>
    </Router>
  );
}

export default App;
