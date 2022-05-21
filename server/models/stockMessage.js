import mongoose from "mongoose";

const stockSchema = mongoose.Schema({
  owner: String,
  ticker: String,
  purchasePrice: {
    type: Number,
    default: 10,
  },
  currentPrice: {
    type: Number,
    default: 25,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  dataCreated: {
    type: Date,
    default: Date.now,
  },
});

const StockMessage = mongoose.model("StockMessage", stockSchema);

export default StockMessage;
