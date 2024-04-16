import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import BusinessesPage from './components/BusinessPage/BusinessPage';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    max-width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
