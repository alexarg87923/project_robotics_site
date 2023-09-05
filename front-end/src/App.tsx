import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import Nav from './common/Nav/Nav';
import Footer from './common/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/main.css';

function App(): JSX.Element {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
