import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Counter from './Counter'; // Contador local
import CounterRedux from './CounterRedux'; //Contador Redux
import { ThemeProvider, useTheme } from './ThemeContext'; 
import { Provider } from 'react-redux'; 
import store from './Store';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
      <Provider store={store}>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/counter" element={<Counter />} /> {/* Contador local */}
              <Route path="/counter-redux" element={<CounterRedux />} /> {/* Contador usando Redux */}
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;