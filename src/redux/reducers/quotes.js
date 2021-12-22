import axios from 'axios';

const FETCH_QUOTES = 'fetch/trump/quotes';

const initialState = {
  status: '',
  fetchedQoutes: [],
};
export const topics = (topic) => topic;

const fetchApi = 'https://www.tronalddump.io/search/quote?query=';

export const fetchQuotes = (topic) => async (dispatch) => {
  const res = await axios.get(`${fetchApi}${topics(topic)}`);
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
    payload: fetchedQoutes,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return { ...state, fetchedQoutes: action.payload };
    default:
      return state;
  }
};

export default reducer;
