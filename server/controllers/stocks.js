import StockMessage from '../models/stockMessage.js';

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

