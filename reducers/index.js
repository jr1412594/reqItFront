import { combineReducers } from 'redux'

const items = (state=[], action) => {
    switch(action.type){
        case 'LIST_ITEMS':
            return action.items
        default:
            return state
    }
}

const reqItems = (state=[], action) => {
    switch(action.type) {
        case 'REQ_ITEMS':
            return [...state, action.item]
        default:
            return state
    }
}

const username = (state={}, action) => {
    switch(action.type) {
        case 'SET_USERNAME':
            return action.user
        default: 
            return state
    }
}

const createdUser = (state={}, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return action.userObject
        default:
            return state
    }
}

const requests = (state=[], action) => {
    switch(action.type) {
        case 'ALL_REQUESTS':
            return action.requests
        default:
            return state
    }
}

const issues = (state=[], action) => {
    switch(action.type) {
        case 'ISSUE_IMAGES':
            return action.issues
        default:
            return state
    }
}

export default combineReducers({
    items, reqItems, username, createdUser, requests, issues
})