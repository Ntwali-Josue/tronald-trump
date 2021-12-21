import axios from 'axios';

const FETCH_COINS = 'fetch/coins';
const fetchApi = 'https://api.coincap.io/v2/assets?limit=15';

const initialState = [];

export const fetchCoins = () => async (dispatch) => {
  const results = await axios.get(fetchApi);
  const fetchedCoins = results.data;
  console.log(fetchedCoins);
  return dispatch({
    type: FETCH_COINS,
    fetchedCoins,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return [...state, action.fetchedCoins];
    default:
      return state;
  }
};

export default reducers;
