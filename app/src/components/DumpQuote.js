import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchingQuote} from '../store/actions/quoteActions';

const DumpQuote = props => {
    useEffect(() => {
        props.fetchQuote();
    }, []);

    return (
        <div>
            <h1>Things Orangie the Sack Says...</h1>
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            {props.quote && <h3>"{props.quote}"</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.fetchQuote}>Fetch a new quote</button>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return {
      quote: state.quotes.quote,
      isFetching: state.quotes.isFetching,
      error: state.quotes.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchQuote }
  )(DumpQuote);
  