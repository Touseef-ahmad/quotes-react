import React, { Component } from 'react';
import {fetchQuotes} from '../api';
import './styles.css'
class BlockQuote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [],
            quote: {text:'Java is to JavaScript what Car is to Carpet.', 
                    author:'A JS Developer'},
            quoteBoxStyles: {opacity:1}
        }
        this.randomQuote = this.randomQuote.bind(this)
        this.setInitialState = this.setInitialState.bind(this)
        this.fadeIn = this.fadeIn.bind(this)
        this.fadeOut = this.fadeOut.bind(this)
    }
    setQuote(quote){
        this.setState({quote})
        this.fadeIn()
    }
    
    setInitialState(data){
        this.setState({ quotes: data },this.randomQuote)
    } 

    componentDidMount() {
        fetchQuotes(this.setInitialState)
    }
    fadeOut(){
        this.setState({quoteBoxStyles : {opacity : 0}})
    }
    fadeIn(){
        this.setState({quoteBoxStyles : {opacity : 1}})
    }
    randomQuote() {
        this.fadeOut();
        const { quotes } = this.state;
        const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
        setTimeout(()=>this.setQuote(randomItem) , 1000)
    }
    render() {

        const {text , author} = this.state.quote;
        const quoteBoxStyles = this.state.quoteBoxStyles;
        return (
            <div className="row">
                <div id="quote-box" style={quoteBoxStyles} className="col-md-12 col-sm-12 col-12">
                    <blockquote className="blockquote text-center">

                        <div className="quote-text">
                            <p id="text" className="mb-0">{text}</p>
                        </div>
                        <div className="quote-author">
                            <footer id="author" 
                                    className="blockquote-footer">
                                    {author}
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
export default BlockQuote;