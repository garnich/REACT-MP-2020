import React, { Fragment } from 'react';
import ErrorBoundary from './components/errorBoundary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import MovieDetailsWrapper from './components/movieDetailsWrapper';
import MovieSearchWrapper from './components/movieSearchWrapper';
import MovieList from './components/movieList';
import Footer from './components/footer';
import NoMovies from './components/noMovies';
import NoMatch from './components/noMatch';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

export default function App() {

  return (
    <ErrorBoundary>
      <Router>
        <Switch>
        <Route exact path='/'>
          <Header />
          <MovieList />
        </Route>
        <Route path='/search/:query' component={MovieSearchWrapper} />
        <Route path='/film/:id' component={MovieDetailsWrapper} />
        <Route path='*'>
          <NoMatch />
        </Route>
        </Switch>
        <Footer/>
      </Router>
    </ErrorBoundary>
  );
}
