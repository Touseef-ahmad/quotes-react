import React, { Component } from 'react';
import './styles.css'
export default class BlockQuote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [],
            quote: {},
        }
        this.randomQuote = this.randomQuote.bind(this)
        this.fetchQuotes = this.fetchQuotes.bind(this)
    }
    fetchQuotes() {
        fetch('https://type.fit/api/quotes')
            .then(data => data.json())
            .then(data => this.setState({ quotes: data }))
            .then(this.randomQuote)
    }

    componentDidMount() {
        this.fetchQuotes()
    }
    randomQuote() {
        const { quotes } = this.state;
        const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
        this.animate(randomItem.text, randomItem.author)
    }
    render() {


        return (
            <div className="row">
                <div id="quote-box" className="col-md-12 col-sm-12 col-12">
                    <blockquote className="blockquote text-center">

                        <div className="quote-text">
                            <p id="text" className="mb-0"> </p>
                        </div>
                        <div className="quote-author">
                            <footer id="author" 
                                    className="blockquote-footer">
                            </footer>
                        </div>
                    </blockquote>

                    <div className="row">
                        <div className="col-md-3 offset-md-2 col-sm-3 offset-sm-2 col-3 offset-2">
                            <a rel="noopener noreferrer" className="btn btn-primary btn-block" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                        <div className="col-md-3 offset-md-2 col-sm-3 offset-sm-2 col-3 offset-2">
                            <button className="btn btn-primary btn-block" id="new-quote" onClick={this.randomQuote}>New</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}