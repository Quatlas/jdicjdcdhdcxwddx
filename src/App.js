import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Stars from './components/Stars';
import Item01 from './components/items/Item01';
import Item02 from './components/items/Item02';
import Items03 from './components/items/Items03';
import Footer from './components/Footbar';
import Contact from './components/Contact';
import Sponsors from './components/Sponsors';
import Alumini from './components/Alumini';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Recruitments from './components/Recruitments';
import Crowdfunding from './components/Crowdfunding';
import Login from './components/Login';
import Data from './components/Data';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <header>
              <Navbar />
              <Stars/>
              <Item01/>
            </header>
            <section>
              <Item02/>
            </section>
            <section>
              <Items03/>
            </section>
            <Footer/>
          </>} />
          <Route path="/about" element={<><About /></>} />
          <Route path="/contact" element={<><Contact/></>} />
          <Route path="/sponsors" element={<><Sponsors/></>} />
          <Route path="/alumini" element={<><Alumini/></>} />
          <Route path="/gallery" element={<><Gallery/></>} />
          <Route path="/achievements" element={<><Achievements/></>} />
          <Route path="/privacy" element={<><Privacy/></>} />
          <Route path="/terms" element={<><Terms/></>} />
          <Route path="/recruitment" element={<><Recruitments/></>} />
          <Route path="/crowdfunding" element={<><Crowdfunding/></>} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/Data" element={<><Data/></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
