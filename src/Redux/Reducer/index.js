import { addTime, resetTable } from '../Actions/index'

const   INITIAL_STATE = []

export const counterReducer = (state = {INITIAL_STATE}, action) => {
    if(action.type === addTime().type) {
        return { INITIAL_STATE: [...state.INITIAL_STATE, action.payload] }
    }else if(action.type === resetTable().type) {
        return { INITIAL_STATE: [] }
    }else {
        return state;
    }
}