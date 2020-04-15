import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchQuote} from '../store/actions/quoteAction';

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
            <button onClick={props.fetchQuote}>What else does Orangie say?</button>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state);
    return {
      value: state.quotes.value,
      isFetching: state.quotes.isFetching,
      error: state.quotes.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchQuote }
  )(DumpQuote);
  