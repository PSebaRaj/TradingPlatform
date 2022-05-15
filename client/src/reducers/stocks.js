const reducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_STOCKS':
        return action.payload;
    case 'CREATE_STOCK':
        return state;
    default:
        return state;
  }
}

export default reducer;