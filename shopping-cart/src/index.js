import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Cart />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
