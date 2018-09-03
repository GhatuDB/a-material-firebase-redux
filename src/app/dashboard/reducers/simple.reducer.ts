import { Action } from "@ngrx/store";
export function simpleReducer (state: string = 'Hello World', action: Action) {
    switch (action.type) {
        case 'HINDI':
            return state = 'Jai Hind'

        case 'ENGLISH':
            return state = 'INDIA'
        default:
            return state;
    }
}