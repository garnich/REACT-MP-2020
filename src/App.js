import React, { useState, createContext } from 'react';
import ErrorBoundary from './components/errorBoundary';
import Header from './components/header';
import MovieList from './components/movieList';
import Footer from './components/footer';
import MockDataContext from './context';

import mockData from './mock';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

export default function App() {
  const [id, setId] = useState('');
  const onIdChange = (id) => setId(id);

  return (
    <ErrorBoundary>
      <MockDataContext.Provider value={mockData}>
        <Header id={id}/>
        <MovieList onIdChange={onIdChange}/>
      </MockDataContext.Provider>
      <Footer/>
    </ErrorBoundary>
  );
}