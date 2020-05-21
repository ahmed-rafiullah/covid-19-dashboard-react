import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mapboxgl from 'mapbox-gl';
import {init} from '@sentry/browser';

//  only run sentry in production not during development
if(process.env.NODE_ENV === 'production') {
  init({dsn: process.env.REACT_APP_SENTRYDSN});
}



mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ?? ''


ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
