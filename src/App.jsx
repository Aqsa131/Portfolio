import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import ThemeContextProvider from "./Components/context/ThemeContextProvider"
import { useContext } from 'react';
import ThemeContext from './Components/context/ThemeContext';

function ThemedAppWrapper() {
  const { currentStyle } = useContext(ThemeContext);

  return (
    <div style={{ ...currentStyle.base}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/qualification' element={<Qualification />} />
          <Route path='/skills' element={<Skills />} /> */}
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <ThemedAppWrapper />
    </ThemeContextProvider>
  );
}

export default App;
