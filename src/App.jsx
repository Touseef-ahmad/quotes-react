import React from 'react';
import Quote from './quote/quote.jsx';
import './App.css';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="my-container">
        <div className="center">
          <Quote/>
        </div>
      </div>
    );
  }
}

export default App;
