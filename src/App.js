import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './pages/HeroSection ';
import MyProtfolio from './pages/MyProtfolio';
import AboutMe from './pages/AboutMe';
import AcademicProject from './pages/AcademicProject';
import Skils from './pages/Skils';
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Language from './pages/Language';
import Footer from './pages/Footer';

function App() {
  return (
<div className="svg">

<Navbar />
      <HeroSection />
      <AboutMe />
      <Skils />
      <AcademicProject />
      <Language />
      <Contact />
      <Footer />
     
</div>
  );
}

export default App;
