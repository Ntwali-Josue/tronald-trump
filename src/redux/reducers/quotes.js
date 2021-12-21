import axios from 'axios';

const FETCH_QUOTES = 'fetch/trump/quotes';
const fetchApi = 'https://www.tronalddump.io/search/quote?query=women';

export const fetchQuotes = () => async (dispatch) => {
  const res = await axios.get(fetchApi);
  // eslint-disable-next-line no-underscore-dangle
  const result = res.data._embedded.quotes;
  const fetchedQoutes = [];
  Object.entries(result).forEach(([key, value]) => {
    const quotes = {
      index: key,
      quoteID: value.quote_id,
      quoteValue: value.value,
    };
    fetchedQoutes.push(quotes);
  });
  // console.log(result);
  // console.log(fetchedQoutes);
  dispatch({
    type: FETCH_QUOTES,
    payload: fetchedQoutes,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
