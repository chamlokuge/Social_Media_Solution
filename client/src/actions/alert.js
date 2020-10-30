
import { v4 as uuidv4 } from 'uuid';
// import uuid from 'uuid';
import { SET_ALERT , REMOVE_ALERT } from './types';

//can do because of thunk middleware
export const setAlert = (msg, alertType) => dispatch => {
    // const id = uuid.v4();
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

}