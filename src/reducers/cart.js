import {combineReducers} from 'redux'

const items = (state = [], {type, payload}) => {
    switch(type){
        case 'ADDED_CART':
        return[
            ...state,
            payload
        ]
        case 'REMOVED_CART':
        return state.filter( p => p.id != payload.id)

        default:
        return state
    }
}

export default combineReducers({
    items
});

export const getItems = ({ items }) => items;
