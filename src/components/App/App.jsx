import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import 'animate.css';
import './App.scss';
import BurgerMenu from '../Header/BurgerMenu';
import Home from '../Home/Home';
import Presentation from '../Presentation/Presentation';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [darkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsmodalOpen(!isModalOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header
        toggleMenu={toggleMenu}
        isModalOpen={isModalOpen}
        isScrolled={isScrolled}
      />
      <BurgerMenu toggleMenu={toggleMenu} isModalOpen={isModalOpen} />
      <Home isScrolled={isScrolled} />
      <Presentation />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
