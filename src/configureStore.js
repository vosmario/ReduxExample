import {createStore} from 'redux'
import reducer from './reducers'

let store = undefined;
const configureStore = () => {
    if(store) {
        return store;
    }

    store = createStore(reducer);
    return store;
}

export default configureStore;