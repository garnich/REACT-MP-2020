import React from 'react';
import ErrorBoundary from './components/errorBoundary';
import Header from './components/header';
import MovieList from './components/movieList';
import Footer from './components/footer';

import mockData from './mock';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

export default function App() {
  return (
    <ErrorBoundary>
      <Header/>
      <MovieList movies={mockData}/>
      <Footer/>
    </ErrorBoundary>
  );
}