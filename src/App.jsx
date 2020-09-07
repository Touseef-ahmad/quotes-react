import React from 'react';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quote: {},
    }
    this.randomQuote = this.randomQuote.bind(this)
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then(data => data.json())
      .then(data => this.setState({ quotes: data }))
      .then(this.randomQuote)
  }
  randomQuote() {
    const randomItem = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({ quote: randomItem })
  }
  render() {
    const quote = this.state.quote;
    return (
      <div id="quote-box">

        <p id="text">{quote && quote.text}</p>

        <span id="author">{quote && quote.author}</span>

        <div className="row"> 
          <div className="col-md-6">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
            tweet
             </a>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary" id="new-quote" onClick={this.randomQuote}>New</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
