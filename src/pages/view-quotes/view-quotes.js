import React from 'react';
import { connect } from 'react-redux';
import { propTypes } from './prop-types';
import { BlockQuote } from './block-quote';
import { fetchQuotesAction, setRandomQuote } from '../../actions/quotes';
import { setLightThemeAction, setDarkThemeAction } from '../../actions/theme';
import { StyledDiv, StyledWrapper } from './styled';

class ViewQuotes extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuotesAction());
    dispatch(setLightThemeAction());
  }

  componentDidUpdate(prevProps) {
    const { quotes } = this.props;
    const { quotes: prevQuotes } = prevProps;
    if (quotes !== prevQuotes) {
      // dispatch something
      this.selectRandomQuote();
    }
  }

  selectRandomQuote = () => {
    const { quotes, dispatch } = this.props;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    dispatch(setRandomQuote(quote));
  };

  setLightTheme = () => {
    const { dispatch } = this.props;
    dispatch(setLightThemeAction());
  };

  setDarkTheme = () => {
    const { dispatch } = this.props;
    dispatch(setDarkThemeAction());
  };

  render() {
    const { quote, loading } = this.props;
    const { text, author } = quote;
    return (
      <StyledWrapper>
        <button type='button' onClick={this.setLightTheme} className='btn btn-primary'>
          Set light theme
        </button>
        <button type='button' onClick={this.setDarkTheme} className='btn btn-secondary'>
          Set dark theme
        </button>
        <StyledDiv isVisible={!loading}>
          <BlockQuote author={author} text={text} chooseRandomQuote={this.selectRandomQuote} />
        </StyledDiv>
      </StyledWrapper>
    );
  }
}

ViewQuotes.propTypes = propTypes;

const mapStateToProps = state => ({
  quotes: state.quotesReducer.quotes,
  quote: state.quotesReducer.quote,
  loading: state.quotesReducer.loading,
});

export const ConnectedViewQuotes = connect(mapStateToProps)(ViewQuotes);
