import axios from 'axios';

const FETCH_QUOTES = 'fetch/trump/quotes';

const initialState = {
  countQuotes: 0,
  totalQuotes: 0,
  fetchedQoutes: [],
};
export const topics = (topic) => topic;

const fetchApi = 'https://www.tronalddump.io/search/quote?query=';

export const fetchQuotes = (topic) => async (dispatch) => {
  const res = await axios.get(`${fetchApi}${topics(topic)}`);
  const countQuotes = res.data.count;
  const totalQuotes = res.data.total;
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
  dispatch({
    type: FETCH_QUOTES,
    payload: { totalQuotes, countQuotes, fetchedQoutes },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        countQuotes: action.payload.countQuotes,
        totalQuotes: action.payload.totalQuotes,
        fetchedQoutes: action.payload.fetchedQoutes,
      };
    default:
      return state;
  }
};

export default reducer;
