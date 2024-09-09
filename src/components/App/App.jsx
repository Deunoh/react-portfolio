import { useState } from 'react';
import Header from '../Header/Header';

import './App.scss';
import BurgerMenu from '../Header/BurgerMenu';

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
    </div>
  );
}

export default App;
