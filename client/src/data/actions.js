import moment from 'moment';
import 'moment-timezone';
import { time2tide } from './tides';

export const ActionTypes = {
    SET_IMAGES: 'SET_IMAGES',
    SET_CURRENT_TIME: 'SET_CURRENT_TIME',
    SET_SENSOR_DATA: 'SET_SENSOR_DATA',
    SET_WINDOW_SIZE: 'SET_WINDOW_SIZE',
    TOGGLE_PAUSED: 'TOGGLE_PAUSED',

    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE'
};

const decodeImage = image => {
    const timestamp = moment(image.timestamp).tz('Asia/Bangkok');
    return {
        ...image,
        timestamp,
        thumbnail_url:
            image.small_thumbnail_url || image.thumbnail_url || image.image_url,
        sender: image.sender.replace(/@(.+):matrix.org/, '$1'),
        tideLevel: time2tide(timestamp)
    };
};

export const getImageList = () => (dispatch, getStore) =>
    getStore()
        .apiClient.get('/images/')
        .then(({ data }) =>
            dispatch({
                type: ActionTypes.SET_IMAGES,
                data: data.map(decodeImage)
            })
        );

export const setImageSize = imageSize => ({
    type: ActionTypes.SET_IMAGE_SIZE,
    imageSize
});

export const setSensorData = (data, timestamp) => ({
    type: ActionTypes.SET_SENSOR_DATA,
    data,
    timestamp
});

export const setSortOrder = sortOrder => ({
    type: ActionTypes.SET_SORT_ORDER,
    sortOrder
});

export const togglePaused = () => ({ type: ActionTypes.TOGGLE_PAUSED });

export const updateTime = () => ({
    type: ActionTypes.SET_CURRENT_TIME,
    timestamp: new Date()
});

export const setWindowSize = size => ({
    type: ActionTypes.SET_WINDOW_SIZE,
    size
});

// Messages

export const addMessage = html => ({
    type: ActionTypes.ADD_MESSAGE,
    message: { html, id: +new Date() }
});

export const deleteMessage = messageId => ({
    type: ActionTypes.DELETE_MESSAGE,
    messageId
});
