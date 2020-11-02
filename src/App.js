import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/errorBoundary';
import Header from './components/header';
import MovieDetailsWrapper from './components/movieDetailsWrapper';
import MovieSearchWrapper from './components/movieSearchWrapper';
import MovieList from './components/movieList';
import Footer from './components/footer';
import NoMatch from './components/noMatch';

// import 'bootstrap/dist/css/bootstrap.min.css'; ??????
// import style from './css/style.css';

function App({ Router, location, context, store }) {

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router location={location} context={context}>
          <Switch>
          <Route exact path='/'>
            <Header />
            <MovieList />
          </Route>
          <Route path='/search/:query' component={MovieSearchWrapper} />
          <Route path='/film/:id' component={MovieDetailsWrapper} />
          <Route path='*' component={NoMatch}/>
          </Switch>
          <Footer/>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default hot(module)(App);
