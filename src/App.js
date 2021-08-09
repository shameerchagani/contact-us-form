import React from 'react';
import ReactDOM from 'react-dom';

//Import Bootstrap and app.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components Import
import ContactForm from './compnents/ContactForm';
import {Header} from './compnents/Header'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
