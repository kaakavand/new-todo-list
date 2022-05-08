const initialState = {
    list : [],
};

export const listReucer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "LIST":
            return { list: payload };
        default:
            return state;
    }
};