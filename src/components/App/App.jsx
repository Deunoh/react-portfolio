import { useState } from 'react';
import Header from '../Header/Header';

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
  const toggleMenu = () => {
    setIsmodalOpen(!isModalOpen);
  };
  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} isModalOpen={isModalOpen} />
      <BurgerMenu toggleMenu={toggleMenu} isModalOpen={isModalOpen} />
      <Home />
      <Presentation />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
