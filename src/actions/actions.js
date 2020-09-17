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

const loadingMovies = (movies = []) => ({
    type: LOAD_MOVIES,
    movies
});

const activeId = ( id = '') => ({
    type: ACTIVE_MOVIE_ID,
    id
});

const addNewMovie = ( data ) => ({
    type: ADD_NEW_MOVIE,
    data
});

const editMovie = (data) => ({
    type: EDIT_MOVIE,
    data
});

const deleteMovie = (id) => ({
    type: DELETE_MOVIE,
    id
});

const movieShowDetails = () => ({
    type: MOVIE_SHOW_DETAILS,
});

const movieHideDetails = () => ({
    type: MOVIE_HIDE_DETAILS,
});

const sortMovies = (sorter) => ({
    type: SORT_MOVIES,
    sorter
});

const filterMovies = (filter) => ({
    type: FILTER_MOVIES,
    filter
});


export { 
    loadingMovies,
    activeId,
    addNewMovie,
    editMovie,
    deleteMovie,
    movieShowDetails,
    movieHideDetails,
    sortMovies,
    filterMovies,
} 