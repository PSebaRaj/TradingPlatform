import express from "express";

import { getStocks, createStock } from "../controllers/stocks.js";

const router = express.Router();

router.get("/", getStocks);
router.post("/", createStock);

export default router;
