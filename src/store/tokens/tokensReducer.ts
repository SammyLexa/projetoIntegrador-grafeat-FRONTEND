import { Action } from './action'

export interface TokenState {
    [x: string]: any
    token: string,
    id: string
}

const initialState = {
    token: '',
    id: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TOKEN': {
            return {token: action.payload}
        }

        case 'ADD_ID': {
            return {id: action.payload, token: state.token}
        }

        default: return state
    }
}