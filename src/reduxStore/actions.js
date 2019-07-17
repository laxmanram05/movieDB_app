export const FETCH_LATEST_MOVIES= 'FETCH_LATEST_MOVIES';
export const ADD_LATEST_MOVIES = 'ADD_LATEST_MOVIES';
export const SET_LOADING = 'SET_LOADING';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_MOVIE_DATA = 'FETCH_MOVIE_DATA';
export const INSERT_MOVIE_DATA = 'INSERT_MOVIE_DATA';

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT_START = "AUTH_LOGOUT_START";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const ADDTO_FAVORITE_START = "ADDTO_FAVORITE_START";
export const ADDTO_FAVORITE_SUCCESS = "ADDTO_FAVORITE_SUCCESS";
export const ADDTO_FAVORITE_FAIL = "ADDTO_FAVORITE_FAIL";

export const ADDTO_WATCHLIST_START = "ADDTO_WATCHLIST_START";
export const ADDTO_WATCHLIST_SUCCESS = "ADDTO_WATCHLIST_SUCCESS";
export const ADDTO_WATCHLIST_FAIL = "ADDTO_WATCHLIST_FAIL";
export const AUTH_AUTOLOGIN = "AUTH_AUTOLOGIN";

export const FETCH_USER_REVIEW = "FETCH_USER_REVIEW";
export const ADDTO_REVIEW_START = "ADDTO_REVIEW_START";
export const ADDTO_REVIEW_SUCCESS = "ADDTO_REVIEW_SUCCESS";
export const ADDTO_REVIEW_FAIL = "ADDTO_REVIEW_FAIL";


export const removeUserOnLogout = ()=>
{
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
}