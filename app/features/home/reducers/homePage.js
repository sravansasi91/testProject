'use strict';
import * as Action from './../actionTypes';

const initialState = {
    isLoading: false,
    error: false,
    alertError: "",
    info: ""
}

const homeScanner = (state = initialState, action) => {

    switch (action.type) {
        case Action.service.apiPending:
            return processLoading(state)
        case Action.service.apiError:
            return processError(state, action.error)
        case Action.service.apiSuccess:
            return processSuccess(state, action.info)
        default:
            return state;
    }
}

const processLoading = (state) => {
    return Object.assign({}, state, { isLoading: true, error: undefined })
}
const processError = (state, error) => {
    return Object.assign({}, state, { isLoading: false, error: error, info: undefined })
}
const processSuccess = (state, info) => {
    return Object.assign({}, state, { isLoading: false, error: "", info: info })
}

export default homeScanner;
