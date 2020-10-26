import { 
    loadingMovies,
    activeId,
    addNewMovie,
    editMovie,
    deleteMovie,
    sortMovies,
    filterMovies,
}  from './actions'
import { 
    LOAD_MOVIES,
    ACTIVE_MOVIE_ID,
    ADD_NEW_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    SORT_MOVIES,
    FILTER_MOVIES
} from '../constants/constants'

describe('actions', () => {
    it('loadingMovies should create an action', () => {
        const movies = ['1', '2', '3'];
        const expectedActionEmpty = {
        type: LOAD_MOVIES,
        movies: []
        };
        const expectedAction = {
        type: LOAD_MOVIES,
        movies: movies
        };

        expect(loadingMovies()).toEqual(expectedActionEmpty)
        expect(loadingMovies(movies)).toEqual(expectedAction)
    });

    it('activeId should create an action', () => {
        const id = '777';
        const expectedActionEmpty = {
          type: ACTIVE_MOVIE_ID,
          id: ''
        };
        const expectedAction = {
          type: ACTIVE_MOVIE_ID,
          id
        };

        expect(activeId()).toEqual(expectedActionEmpty)
        expect(activeId(id)).toEqual(expectedAction)
    });

    it('addNewMovie should create an action', () => {
        const data = {id: '1', title: 'movie_1'};
        const expectedAction = {
            type: ADD_NEW_MOVIE,
            data
        };
        
        expect(addNewMovie(data)).toEqual(expectedAction)
    });

    it('editMovie should create an action', () => {
        const data = {id: '1', title: 'edit_movie_1'};
        const expectedAction = {
            type: EDIT_MOVIE,
            data
        };

        expect(editMovie(data)).toEqual(expectedAction)
    });

    it('deleteMovie should create an action', () => {
        const id = '1';
        const expectedAction = {
            type: DELETE_MOVIE,
            id
        };

        expect(deleteMovie(id)).toEqual(expectedAction)
    });

    it('sortMovies should create an action', () => {
        const sorter = 'date';
        const expectedAction = {
            type: SORT_MOVIES,
            sorter
        };

        expect(sortMovies(sorter)).toEqual(expectedAction)
    });

    it('filterMovies should create an action', () => {
        const filter = 'adventure';
        const expectedAction = {
            type: FILTER_MOVIES,
            filter
        };

        expect(filterMovies(filter)).toEqual(expectedAction)
    });
});