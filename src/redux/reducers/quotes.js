import axios from 'axios';

const FETCH_QUOTES = 'fetch/trump/quotes';
const PICK_TOPIC = 'pick/trump/topics';

export const topics = (topic) => ({
  type: PICK_TOPIC,
  topic,
});

const fetchApi = `https://www.tronalddump.io/search/quote?query=${topics('women')}`;

export const fetchQuotes = () => async (dispatch) => {
  try {
    const res = await axios.get(fetchApi);
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
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return [...action.payload];
    case PICK_TOPIC:
      return state;
    default:
      return state;
  }
};

export default reducer;
