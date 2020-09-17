import { 
    LOAD_MOVIES,
    ACTIVE_MOVIE_ID, 
    ADD_NEW_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    MOVIE_SHOW_DETAILS,
    MOVIE_HIDE_DETAILS,
    SORT_MOVIES,
    FILTER_MOVIES,
} from './../constants/constants';

import { 
    updateObjectInArray,
    removeObjectFromArray,
    movieSorter,
    movieFilter
} from './../utils/helper';

const reducer = (state, action) => {
    if(state === undefined) {
        return {
            movies: [],
            id: null,
            showMovieDetails: false,
            sortedAndFilteredMovies: [],
        }
    }

    switch (action.type) {
        case LOAD_MOVIES:
            return { 
                ...state,
                movies: action.movies,
                sortedAndFilteredMovies: action.movies,
            };
        case ACTIVE_MOVIE_ID:
            return {
                ...state,
                id: action.id
            };
        case ADD_NEW_MOVIE: 
            return {
                ...state,
                movies: [...state.movies, action.data],
                sortedAndFilteredMovies: [...state.movies, action.data],
            }
        case EDIT_MOVIE:
            return {
                ...state,
                movies: updateObjectInArray(state.movies, action),
                sortedAndFilteredMovies: updateObjectInArray(state.movies, action),
            }
        case DELETE_MOVIE:
            return {
                ...state,
                id: null,
                movies: removeObjectFromArray(state.movies, action),
                sortedAndFilteredMovies: removeObjectFromArray(state.movies, action),
            }
        case MOVIE_SHOW_DETAILS:
            return {
                ...state,
                showMovieDetails: true
            }
        case MOVIE_HIDE_DETAILS:
            return {
                ...state,
                showMovieDetails: false
            }
        case SORT_MOVIES:
            return {
                ...state,
                sortedAndFilteredMovies: movieSorter(state.movies, action.sorter)
            }
        case FILTER_MOVIES:
            return {
                ...state,
                sortedAndFilteredMovies: movieFilter(state.movies, action.filter)
            }
        
        default:
            return state;
    }
};

export default reducer;