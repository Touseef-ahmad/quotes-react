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
      <div className="row">
        <div id="quote-box" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 col-xs-10 offset-xs-1">
          <blockquote class="blockquote text-center">
            <p id="text" class="mb-0">{quote && quote.text}</p>
            <footer id="author" class="blockquote-footer">{quote && quote.author}</footer>
          </blockquote>

          <div className="row">
            <div className="col-3 offset-2">
              <a class="btn btn-lg btn-primary" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
            <div className="col-3 offset-2">
              <button className="btn btn-lg btn-primary" id="new-quote" onClick={this.randomQuote}>New</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
