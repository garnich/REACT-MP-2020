import { 
    LOAD_MOVIES,
    ACTIVE_MOVIE_ID, 
    ADD_NEW_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    SORT_MOVIES,
    FILTER_MOVIES,
} from './../constants/constants';

import { 
    updateObjectInArray,
    removeObjectFromArray,
    movieSoreterAndFilter
} from './../utils/helper';

const reducer = (state, action) => {
    if(state === undefined) {
        return {
            movies: [],
            activeId: null,
            sortedAndFilteredMovies: [],
            sorter: null,
            filter: 'all',
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
                activeId: action.id
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
                activeId: null,
                movies: removeObjectFromArray(state.movies, action),
                sortedAndFilteredMovies: removeObjectFromArray(state.movies, action),
            }
        case SORT_MOVIES:
            return {
                ...state, 
                sorter: action.sorter,
                sortedAndFilteredMovies: movieSoreterAndFilter(state.movies, state.filter, action.sorter),
            }
        case FILTER_MOVIES:
            return {
                ...state,
                filter: action.filter,
                sortedAndFilteredMovies: movieSoreterAndFilter(state.movies, action.filter, state.sorter)
            }
        
        default:
            return state;
    }
};

export default reducer;
