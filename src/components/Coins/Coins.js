import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../../redux/coins/coins';
import Coin from './Coin';

const Coins = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  // console.log(coins);

  const coinItem = coins.map((coin) => (
    <Coin
      key={coin.coin_id}
      coinId={coin.coin_id}
      coinName={coin.coin_name}
      coinSymbol={coin.coin_symbol}
      coinRank={coin.coin_rank}
    />
    // console.log(coin.coin_name)
  ));

  return (
    <div>
      Hey
      {coinItem}
    </div>
  );
};

export default Coins;
