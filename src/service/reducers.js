import { combineReducers } from 'redux';

const initialState = [];

const addToSidebar = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.payload];
        case 'DELETE_ITEM': 
            const updateList = state.filter((item) => item !== state[action.payload])
            return updateList;
        default: return state;
    }
}

const rootReducer = combineReducers({
    addToSidebar:addToSidebar,
    // changeTheBackground  => aek aur reducer
})

export default rootReducer;