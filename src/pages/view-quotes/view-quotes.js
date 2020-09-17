import React from 'react';
import { BlockQuote } from './block-quote';
import { fetchQuotes } from '../../api/fetch-quotes';
import './styles.css';

class ViewQuotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quote: {
        text: 'Java is to JavaScript what Car is to Carpet.',
        author: 'A JS Developer',
      },
      displayQuoteBox: true,
    };
    this.randomQuote = this.randomQuote.bind(this);
  }

  componentDidMount() {
    this.onGetQuotes();
  }

  async onGetQuotes() {
    const quotes = await fetchQuotes();
    this.setState({ quotes }, this.randomQuote);
  }

  setQuote(quote) {
    this.setState({ quote, displayQuoteBox: true });
  }

  randomQuote() {
    this.setState({ displayQuoteBox: false });
    const { quotes } = this.state;
    const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    // wait for the transition animation to complete
    setTimeout(() => this.setQuote(randomItem), 700);
  }

  render() {
    const { quote, displayQuoteBox } = this.state;
    const { text, author } = quote;
    const quoteBoxClass = displayQuoteBox ? 'opacity1' : 'opacity0';

    return (
      <div className="my-container">
        <div className={`center ${quoteBoxClass}`}>
          <BlockQuote author={author} text={text} randomQuote={this.randomQuote} />
        </div>
      </div>
    );
  }
}

export { ViewQuotes };
