import React from "react";
import Stock from "./Stocks/Stock";

import { useSelector } from "react-redux";


const Stocks = () => {
    const stocks = useSelector((state) => state.stocks);

    console.log(stocks);

};