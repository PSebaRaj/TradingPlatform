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

export const updateStock = (id, stock) => async (dispatch) => {
  try {
    const { data } = await api.updateStock(id, stock);

    dispatch({ type: "UPDATE_STOCK", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStock = (id) => async (dispatch) => {
  try {
    await api.deleteStock(id);

    dispatch({ type: "DELETE_STOCK", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
