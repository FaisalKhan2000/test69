import React from "react";
import "./Coin.css";
// import { AiOutlineArrowUp } from "react-icons/allfiles/fa/AiOutlineArrowUp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <img src={image} alt={`${name}`} className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">₹{price.toLocaleString()}</p>
      <p className="coinMarketcap">
        <span style={{ fontWeight: "bold" }}>Market Cap: </span> ₹
        {marketcap.toLocaleString()}
      </p>
      <p className="coinVolume">
        {" "}
        <span style={{ fontWeight: "bold" }}>Volume (24H): </span>₹
        {volume.toLocaleString()}
      </p>
      {priceChange < 0 ? (
        <div className="priceContainerDOWN">
          <ArrowDownwardIcon style={{ fill: "white" }} />
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="priceContainerUP">
          <ArrowUpwardIcon style={{ fill: "white" }} />
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;
