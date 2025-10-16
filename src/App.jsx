import Home from './Home'
import Menu from './Menu'
import Gallery from "./Gallery"
import About from "./About"
import Contact from "./Contact"
import OrderNow from "./OrderNow"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from './Navbarr'

function App() {
  return (
    <Router basename="/Eat-Burger-Website">

      <Navbarr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<OrderNow />} />
      </Routes>
    </Router>
  );
}

export default App;
