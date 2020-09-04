import Actions from "../../actions";

// default value function
const getDefaultState = () => ({
    isLoading: false,
    error: null,
    data: {},
});

//pure function
function getAllTrans(state, action) {
    // validation
    if (typeof state === 'undefined') {
        return getDefaultState();
    }

    // if action.type === LOGIN
    // else if action.type === LOGIN

    switch(action.type) {

        case Actions.GET_ALL_TRANS:
            return {
                isLoading: true,
                error: null,
                data: {},
            };

        case Actions.GET_ALL_TRANS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.data,
            };

        case Actions.GET_ALL_TRANS_FAIL:
            return {
                isLoading: false,
                error: action.error,
                data: {},
            };

        default:
            return state;
    }
}

export default getAllTrans;