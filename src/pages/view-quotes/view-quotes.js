import React from 'react';
import { BlockQuote } from './block-quote';
import { fetchQuotes } from '../../api';
import { StyledDiv, StyledWrapper } from './styled';

class ViewQuotes extends React.Component {
  state = {
    quotes: [],
    quote: {
      text: 'Java is to JavaScript what Car is to Carpet.',
      author: 'A JS Developer',
    },
    displayQuoteBox: true,
  };

  componentDidMount() {
    this.onGetQuotes();
  }

  onGetQuotes = async () => {
    const quotes = await fetchQuotes();
    this.setState({ quotes }, this.chooseRandomQuote);
  };

  setQuote = quote => {
    this.setState({ quote, displayQuoteBox: true });
  };

  chooseRandomQuote = () => {
    this.setState({ displayQuoteBox: false });
    const { quotes } = this.state;
    const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    // wait for the transition animation to complete
    setTimeout(() => this.setQuote(randomItem), 700);
  };

  render() {
    const { quote, displayQuoteBox } = this.state;
    const { text, author } = quote;

    return (
      <StyledWrapper>
        <StyledDiv isVisible={displayQuoteBox}>
          <BlockQuote author={author} text={text} chooseRandomQuote={this.chooseRandomQuote} />
        </StyledDiv>
      </StyledWrapper>
    );
  }
}

export { ViewQuotes };
