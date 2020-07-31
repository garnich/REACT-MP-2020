import React, { Fragment } from 'react';
import logo from './img/logo.png';
import './css/style.css';

export default function App() {
  return (
    <Fragment>
        <img src={logo} alt="Logo"/>
        <h1>Hm, it's looks like CRA! =)</h1>
    </Fragment>
  );
}