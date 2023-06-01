const initialState = {
    settings: {
        location: 'auto:ip',
        language: 'ru',
    },
    isLoading: false,
    isNotFound: false,
};

const exchange_reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default exchange_reducer;