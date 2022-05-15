import * as api from '../api';

// action creators
export const getStocks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();

        dispatch({ type: 'FETCH_ALL_STOCKS' , payload: data });

    } catch (error) {
        console.log(error.message);
    }

    // const action = { type: 'FETCH_ALL_STOCKS' , payload : [] }

    // dispatch(action);
};
