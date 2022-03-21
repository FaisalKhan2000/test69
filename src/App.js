import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./components/coinItem/Coin";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LoginButton from "./components/Auth/LoginButton";
import LogoutButton from "./components/Auth/LogoutButton";
import Profile from "./components/Auth/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="brand">
            <CurrencyRupeeIcon style={{ fill: "white", fontSize: "0.7em" }} />
            Crypto tracker
          </h1>
          <form>
            <input
              className="inputField"
              type="text"
              onChange={handleChange}
              placeholder="Search a Coin"
            />
          </form>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </div>
      </div>
      <div className="coinsContainer">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
