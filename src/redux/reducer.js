import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions-types";

const initialState = {
    myFavorites: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case DELETE_FAVORITE:
            let filterFavorite = state.myFavorites.filter(pers => pers.id !== action.payload);
            return {
                ...state,
                myFavorites: filterFavorite
            }

        default:
            return {...state}
    }
}
