import { Action } from './action'

export interface TokenState {
    [x: string]: any
    token: string
}

const initialState = {
    token: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TOKEN': {
            return {token: action.payload}
        }

        default: return state
    }
}