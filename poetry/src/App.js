import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLeaf, faFeather, faPen, faMusic, faPenNib, faPencilAlt, faSun, faMoon, faHatWizard } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [inputText, setInputText] = useState('');
  const [generatedPoem, setGeneratedPoem] = useState('');
  const [selectedPoemType, setSelectedPoemType] = useState('');
  const [theme, setTheme] = useState('light');
  const [showFeedback, setShowFeedback] = useState(false);

  

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generatePoem = () => {
    // Générer le poème en fonction du type sélectionné
    let poem = '';
    if (selectedPoemType === 'sonnet') {
      poem = 'Sonnet généré';
    } else if (selectedPoemType === 'haiku') {
      poem = 'Haïku généré';
    } else if (selectedPoemType === 'ballade') {
      poem = 'Ballade générée';
    } else if (selectedPoemType === 'ode') {
      poem = 'Ode générée';
    } else if (selectedPoemType === 'vers libre') {
      poem = 'Vers libre généré';
    } else if (selectedPoemType === 'poeme_lyrique') {
      poem = 'Poème lyrique généré';
    } else if (selectedPoemType === 'acrostiche') {
      poem = 'Acrostiche généré';
    } else if (selectedPoemType === 'limerick') {
      poem = 'Limerick généré';
    }
    
    setGeneratedPoem(poem);

    // Afficher le feedback visuel
    setShowFeedback(true);

    // Cacher le feedback après 2 secondes
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  const handlePoemTypeSelection = (type) => {
    setSelectedPoemType(type);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`content ${theme === 'dark' ? 'dark' : ''}`}>
      <header>
        <div className="header-background"></div>
        <div className="title">
          <h1>Poetify</h1>
          <div className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </div>
        </div>
      </header>
      <div className="center">
        <input
          id="text"
          type="text"
          placeholder="Entrez un mot ou une phrase : amour, poème d'amour, etc."
          value={inputText}
          onChange={handleInputChange}
        />
  

        <div className="poem-types">
          <div className="button-group">
            <button onClick={() => handlePoemTypeSelection('sonnet')}><FontAwesomeIcon icon={faBook} /> Sonnet</button>
            <button onClick={() => handlePoemTypeSelection('haiku')}><FontAwesomeIcon icon={faLeaf} /> Haïku</button>
          </div>
          <div className="button-group">
            <button onClick={() => handlePoemTypeSelection('ballade')}><FontAwesomeIcon icon={faFeather} /> Ballade</button>
            <button onClick={() => handlePoemTypeSelection('ode')}><FontAwesomeIcon icon={faPen} /> Ode</button>
          </div>
          <div className="button-group">
            <button onClick={() => handlePoemTypeSelection('vers libre')}><FontAwesomeIcon icon={faPencilAlt} /> Vers libre</button>
            <button onClick={() => handlePoemTypeSelection('poeme_lyrique')}><FontAwesomeIcon icon={faMusic} /> Poème lyrique</button>
          </div>
          <div className="button-group">
            <button onClick={() => handlePoemTypeSelection('acrostiche')}><FontAwesomeIcon icon={faPenNib} /> Acrostiche</button>
            <button onClick={() => handlePoemTypeSelection('limerick')}><FontAwesomeIcon icon={faHatWizard} /> Limerick</button>
          </div>
        </div>
      </div>
      <div className="poem-container">
  <p>{generatedPoem}</p>
</div>

      <div className="center">
        <button id="btn" onClick={generatePoem}>
          Générer le Poème
        </button>
        {showFeedback && <p className="generated-poem fadeIn">{generatedPoem}</p>} {/* Feedback visuel */}
      </div>
    </div>
  );
  
}

export default App;
