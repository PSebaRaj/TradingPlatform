import mongoose from "mongoose";
import StockMessage from "../models/stockMessage.js";

export const getStocks = async (req, res) => {
  try {
    const stocksInPortfolio = await StockMessage.find();

    res.status(200).json(stocksInPortfolio);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStock = async (req, res) => {
  const stock = req.body;
  const newStock = new StockMessage(stock);

  try {
    await newStock.save();

    res.status(201).json(newStock);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateStock = async (req, res) => {
  const { id: _id } = req.params;
  const stock = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "Invalid ID" });

  const updatedStock = await StockMessage.findByIdAndUpdate(
    _id,
    { ...stock, _id },
    {
      new: true,
    }
  );

  res.json(updatedStock);
};

export const deleteStock = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "Invalid ID" });

  await StockMessage.findByIdAndDelete(id);

  res.status(204).json({ message: "post deleted successfully" });
};
