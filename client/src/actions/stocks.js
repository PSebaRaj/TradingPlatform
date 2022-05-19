import * as api from "../api";

// action creators
export const getStocks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: "FETCH_ALL_STOCKS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStock = (newStock) => async (dispatch) => {
  try {
    const { data } = await api.createStock(newStock);

    dispatch({ type: "CREATE_STOCK", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
