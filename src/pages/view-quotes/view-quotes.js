import React from 'react';
import { connect } from 'react-redux';
import { propTypes } from './prop-types';
import { BlockQuote } from './block-quote';
import { fetchQuotesAction, getRandomQuote } from '../../actions';
import { StyledDiv, StyledWrapper } from './styled';

class ViewQuotes extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuotesAction());
  }

  render() {
    const { quote, loading, dispatch } = this.props;
    const { text, author } = quote;

    return (
      <StyledWrapper>
        <StyledDiv isVisible={!loading}>
          <BlockQuote
            author={author}
            text={text}
            chooseRandomQuote={() => dispatch(getRandomQuote())}
          />
        </StyledDiv>
      </StyledWrapper>
    );
  }
}

ViewQuotes.propTypes = propTypes;

const mapStateToProps = state => ({
  quote: state.quotesReducer.quote,
  loading: state.quotesReducer.loading,
});

export const ConnectedViewQuotes = connect(mapStateToProps)(ViewQuotes);
