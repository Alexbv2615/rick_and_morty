import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, ERROR, GET_FAVORITES } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
};

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
                errors: {}
            };

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
                errors: {}
            };

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
            };

        case ORDER:
            return {
                ...state,
                myFavorites: action.payload === 'Ascendente'
                ? state.allCharacters.sort((a, b) => a.id - b.id)
                : state.allCharacters.sort((a, b) => b.id - a.id)
            };
        
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                errors: {}
            };
            
        case ERROR:
            return {
                ...state,
                errors: action.payload
            }

        default:
            return {...state}
    }
}
