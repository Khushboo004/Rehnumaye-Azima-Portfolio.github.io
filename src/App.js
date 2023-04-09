import './App.css';
import HeroSection from './pages/HeroSection ';
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
