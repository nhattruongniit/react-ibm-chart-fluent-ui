import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import reportWebVitals from './reportWebVitals';

// components
import App from './App';

// styles
import "react-datepicker/dist/react-datepicker.css";
import "react-d3-treemap/dist/react.d3.treemap.css";
import './styles/index.css';
import './styles/responsive.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
