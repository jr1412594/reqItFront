import { combineReducers } from 'redux'

const items = (state=[], action) => {
    switch(action.type){
        case 'LIST_ITEMS':
            return action.items
        default:
            return state
    }
}

export default combineReducers({
    items,
})