import React from "react";
import CountUp from "react-countup";
import "./Coin.css";

const Coin = ({
  name,
  rank,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            <span className="last-data">Price: </span>₹
            <CountUp start={0} end={price} duration={5} separator="," />
          </p>
          <p className="coin-volume">
            <span className="last-data">Last 24h:</span> ₹
            <CountUp start={0} end={volume} duration={5} separator="," />
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            <span className="last-data">Mkt Cap:</span> ₹
            {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
