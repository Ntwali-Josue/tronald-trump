import axios from 'axios';

const FETCH_QUOTES = 'fetch/trump/quotes';
const PICK_TOPIC = 'pick/trump/topics';

const initialState = {
  status: '',
  fetchedQoutes: [],
};
export const topics = (topic) => topic;

const fetchApi = 'https://www.tronalddump.io/search/quote?query=';

export const fetchQuotes = (topic) => async (dispatch) => {
  try {
    const res = await axios.get(`${fetchApi}${topics(topic)}`);
    const result = res.data._embedded.quotes;
    console.log(result);
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
    const errorMessage = error;
    return {
      errorMessage,
    };
  }
};

export const pickTopic = (payload) => ({
  type: PICK_TOPIC,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return { ...state, fetchedQoutes: action.payload };
    case PICK_TOPIC: {
      // const { status } = state;
      return { ...state, status: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
