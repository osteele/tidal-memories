import { ActionTypes } from './actions';

export const apiClient = (state = {}) => state;
export const audioBaseUrl = (state = {}) => state;

export const heartbeat = (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_TIME:
            return action.timestamp;
        default:
            return state;
    }
};

export const images = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.SET_IMAGES:
            return action.data;
        default:
            return state;
    }
};

export const imageSize = (state = 'small', action) => {
    switch (action.type) {
        case ActionTypes.SET_IMAGE_SIZE:
            return action.imageSize;
        default:
            return state;
    }
};

export const messages = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_MESSAGE:
            return [...state, action.message];
        case ActionTypes.DELETE_MESSAGE:
            return state.filter(msg => msg.id !== action.messageId);
        default:
            return state;
    }
};

export const paused = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_PAUSED:
            return !state;
        default:
            return state;
    }
};

export const sensorData = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SET_SENSOR_DATA:
            return { ...state, ...action.data, timestamp: action.timestamp };
        default:
            return state;
    }
};

export const sortOrder = (state = 'date-desc', action) => {
    switch (action.type) {
        case ActionTypes.SET_SORT_ORDER:
            return action.sortOrder;
        default:
            return state;
    }
};

export const windowSize = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.SET_WINDOW_SIZE:
            return action.size;
        default:
            return (
                state || {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            );
    }
};
