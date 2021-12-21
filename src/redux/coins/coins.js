import axios from 'axios';

const FETCH_COINS = 'fetch/coins';
const fetchApi = 'https://api.coincap.io/v2/assets?limit=15';

const initialState = [];

export const fetchCoins = () => async (dispatch) => {
  const results = await axios.get(fetchApi);
  const fetchedCoins = [];
  const { data } = results.data;
  Object.entries(data).forEach(([key, value]) => {
    const coins = {
      coin_id: key,
      coin_name: value.name,
      coin_symbol: value.symbol,
      coin_rank: value.rank,
    };
    fetchedCoins.push(coins);
  });
  // console.log(fetchedCoins);
  return dispatch({
    type: FETCH_COINS,
    fetchedCoins,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        coins: action.fetchedCoins,
      };
    default:
      return state;
  }
};

export default reducers;
