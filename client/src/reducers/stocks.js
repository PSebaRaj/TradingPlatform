const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_STOCKS":
      return action.payload;
    case "CREATE_STOCK":
      return [...state, action.payload];
    case "UPDATE_STOCK":
      return state.map((stock) =>
        stock._id === action.payload._id ? action.payload : stock
      );
    case "DELETE_STOCK":
      return state.filter((stock) => stock._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
