import express from "express";

import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
} from "../controllers/stocks.js";

const router = express.Router();

router.get("/", getStocks);
router.post("/", createStock);
router.patch("/:id", updateStock);
router.delete("/:id", deleteStock);

export default router;
