import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

import { RadialChart } from "react-vis";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const myData = [
    { angle: 1.5, radius: 9.5, innerRadius: 4.5 },
    { angle: 2.2, radius: 9, innerRadius: 4.5 },
    { angle: 2, radius: 8.5, innerRadius: 4.5 },
    { angle: 2.5, radius: 9, innerRadius: 4.5 },
    { angle: 1.8, radius: 8.2, innerRadius: 4.5 },
  ];

  return (
    <div className="coin-app">
      <div className="coin-search">
        <Fade big>
          <h1 className="coin-text">Crypto Fresh</h1>
        </Fade>
        <RadialChart data={myData} width={285} height={300} />
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
