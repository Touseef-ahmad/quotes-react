import React from 'react';
import { connect } from 'react-redux';
import { propTypes } from './prop-types';
import { BlockQuote } from './block-quote';
import { fetchQuotesAction, setRandomQuote } from '../../actions/quotes';
import { setTheme } from '../../actions/theme';
import { StyledDiv, StyledWrapper } from './styled';
import { THEME_TYPES } from '../../styles';

class ViewQuotes extends React.Component {
  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    const { quotes } = this.props;
    const { quotes: prevQuotes } = prevProps;
    if (quotes !== prevQuotes) {
      // dispatch something
      this.selectRandomQuote();
    }
  }

  fetchQuotes = () => {
    const { dispatch } = this.props;
    dispatch(fetchQuotesAction());
  };

  selectRandomQuote = () => {
    const { quotes, dispatch } = this.props;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    dispatch(setRandomQuote(quote));
  };

  changeTheme = themeType => {
    const { dispatch } = this.props;
    dispatch(setTheme(themeType));
  };

  render() {
    const { quote, loading } = this.props;
    const { text, author } = quote;
    return (
      <StyledWrapper>
        <button
          type='button'
          onClick={() => this.changeTheme(THEME_TYPES.LIGHT)}
          className='btn btn-primary'
        >
          Set light theme
        </button>
        <button
          type='button'
          onClick={() => this.changeTheme(THEME_TYPES.DARK)}
          className='btn btn-secondary'
        >
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

const mapStateToProps = ({ quotesReducer }) => quotesReducer;

export const ViewQuotesPage = connect(mapStateToProps)(ViewQuotes);
