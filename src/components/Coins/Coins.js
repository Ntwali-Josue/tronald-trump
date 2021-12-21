import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../../redux/coins/coins';

const Coins = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => [state.coins]);

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  console.log(...coins);

  return (
    <div>
      Hey
    </div>
  );
};

export default Coins;
