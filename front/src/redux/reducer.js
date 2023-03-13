import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }

        case FILTER:    
            const allCharacFilter = state.allCharacters.filter(charac => charac.gender === action.payload);
            if(action.payload === 'All'){
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
            } else{
                return {
                    ...state,
                    myFavorites: allCharacFilter
                }
            }

        case ORDER:
            return {
                ...state,
                myFavorites: action.payload === 'Ascendente'
                ? state.allCharacters.sort((a, b) => a.id - b.id)
                : state.allCharacters.sort((a, b) => b.id - a.id)
            }

            
        default:
            return {...state}
    }
}
