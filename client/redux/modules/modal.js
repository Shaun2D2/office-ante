import { Map } from 'immutable';

const OPEN = 'Modal/Open';
const CLOSE = 'Modal/Close';

export const openModal = () => {
    return { type: OPEN, data: { open: true, modalType: type } };
}

export const closeModal = () => {
    return { type: CLOSE, data: { open: false, modalType: null } };
}

const initialState = Map({ open: true, modalType: null });

export default function(state = initialState, action) {
    switch(action.type) {
        case OPEN, CLOSE:
          return Map(action.data);
        default:
          return state;
    }
}
