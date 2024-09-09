import { useState } from 'react';
import Header from '../Header/Header';

import './App.scss';
import BurgerMenu from '../Header/BurgerMenu';
import Home from '../Home/Home';
import Presentation from '../Presentation/Presentation';

function App() {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [darkMode, setIsDarkMode] = useState(false);
  const toggleMenu = () => {
    setIsmodalOpen(!isModalOpen);
  };
  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} isModalOpen={isModalOpen} />
      <BurgerMenu isModalOpen={isModalOpen} />
      <Home />
      <Presentation />
    </div>
  );
}

export default App;
