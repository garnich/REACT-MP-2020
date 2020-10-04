import React from 'react';
import ErrorBoundary from './components/errorBoundary';
import Header from './components/header';
import MovieList from './components/movieList';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

export default function App() {

  return (
    <ErrorBoundary>
      <Header />
      <MovieList />
      <Footer/>
    </ErrorBoundary>
  );
}
