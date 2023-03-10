import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from 'axios';

export const addFavorite = (character) => {
    return function(dispatch){
        axios.post("http://localhost:3001/rickandmorty/favs/create", character)
        .then(res => {
            return dispatch(
                {type: ADD_FAVORITE, payload: res.data}
            );
        })
    };
};

export const deleteFavorite = (id) => {
    return function(dispatch){
        axios.delete("http://localhost:3001/rickandmorty/favs/delete/" + id)
        .then(res => {
            return dispatch(
                { type: DELETE_FAVORITE, payload: res.data } 
            );
        });
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender};
};

export const orderCards = (id) => {
    return { type: ORDER, payload: id};
};