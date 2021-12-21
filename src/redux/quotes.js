// import axios from 'axios';

const FETCH_QUOTES = 'fetch/trump/quotes';

export const fetchQuotes = (payload) => ({
  type: FETCH_QUOTES,
  payload,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
