import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StoryPage from './components/StoryPage';

const App = () => {
  return (
    <Routes>
 
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/story/:id" element={<StoryPage/>} />
      
    </Routes>
  );
};

export default App;
