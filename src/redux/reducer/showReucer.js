const initialState = {
    show : {},
};

export const showReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SHOW":
            return { show: payload };
        default:
            return state;
    }
};