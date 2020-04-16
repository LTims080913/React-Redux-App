import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchQuote} from '../store/actions/quoteAction';
import orangie from '../images/Orange.jpg'

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
             <img src={orangie} alt='my pal Orangie'/>
            {props.value && <h3>"{props.value}"</h3>}

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
  