import { useState} from 'react';
import './App.css';
import { createContext } from 'react';

export const ThemeContext = createContext("light");

const App = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
        <div id='counter'>
          <button onClick={() => setCounter(counter-1)}>-</button>
          <h1>{counter}</h1>
          <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
        <button id='themeToggle' onClick={() => toggleTheme()}><h1>Toggle Theme</h1></button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
