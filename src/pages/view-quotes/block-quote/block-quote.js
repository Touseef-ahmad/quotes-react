import React from 'react';
import { propTypes, defaultProps } from './prop-types';

export const BlockQuote = ({ author, chooseRandomQuote, text }) => (
  <div className='row'>
    <div id='quote-box' className='col-md-12 col-sm-12 col-12'>
      <blockquote className='blockquote text-center'>
        <div className='quote-text'>
          <p id='text' className='mb-0'>
            {text}
          </p>
        </div>
        <div className='quote-author'>
          <span id='author'>-- {author}</span>
        </div>
      </blockquote>

      <div className='row'>
        <div className='col-md-3 offset-md-2 col-sm-3 offset-sm-2 col-3 offset-2'>
          <a
            rel='noopener noreferrer'
            className='btn btn-primary btn-block'
            id='tweet-quote'
            href='https://twitter.com/intent/tweet'
            target='_blank'
          >
            <i className='fa fa-twitter' />
          </a>
        </div>
        <div className='col-md-3 offset-md-2 col-sm-3 offset-sm-2 col-3 offset-2'>
          <button
            className='btn btn-primary btn-block'
            id='new-quote'
            onClick={chooseRandomQuote}
            type='button'
          >
            New
          </button>
        </div>
      </div>
    </div>
  </div>
);

BlockQuote.propTypes = propTypes;
BlockQuote.defaultProps = defaultProps;
