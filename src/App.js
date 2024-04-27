import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Docker from "./pages/Docker";
import Flask from './pages/Flask'
import ReactApp from "./pages/ReactApp";
import Angular from "./pages/Angular";
import Vue from "./pages/Vue";
import Node from "./pages/Node";
import GoLang from "./pages/GoLang";
import Next from "./pages/Next";
import Django from "./pages/Django";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <Sidebar />
        </aside>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docker-spring-boot" element={<Docker />} />
          <Route path="/docker-flask" element={<Flask />} />
          <Route path="/docker-react" element={<ReactApp />} />
          <Route path="/docker-angular" element={<Angular />} />
          <Route path="/docker-vue" element={<Vue />} />
          <Route path="/docker-node" element={<Node />} />
          <Route path="/docker-golang" element={<GoLang />} />
          <Route path="/docker-next" element={<Next />} />
          <Route path="/docker-django" element={<Django />} />
        </Routes>

      </Router>
    </>




  );
}

export default App;
