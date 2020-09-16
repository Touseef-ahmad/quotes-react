import React from 'react';
import { ViewQuotes } from './pages/view-quotes';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <ViewQuotes/>
      </div>
    );
  }
}

export default App;
