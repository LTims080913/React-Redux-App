import axios from 'axios';


export const fetchQuote = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_QUOTE_START' });
    axios
      .get('https://www.tronalddump.io/random/quote')
      .then(response => {
        console.log(response.data.value)
        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: response.data.value });
      })
      .catch(error => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_QUOTE_FAILURE',
          payload: `Error ${error.response.status}: ${error.response.data}`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};
