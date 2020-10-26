import reducer from './reducer';
import { 
    loadingMovies,
    activeId,
    addNewMovie,
    editMovie,
    deleteMovie,
    sortMovies,
    filterMovies,
} from './../actions/actions';

const initialState = {
    movies: [],
    activeId: null,
    sortedAndFilteredMovies: [],
    sorter: null,
    filter: 'all',
};

const defaultMovieList = [
    {id: '1', title: 'movie_1', vote_average: '4', genres: ['A','b']}, 
    {id: '2', title: 'movie_2', vote_average: '1', genres: ['B','c']},
    {id: '3', title: 'movie_3', vote_average: '2', genres: ['C','d']}
]; 

describe('reducer', () => {
    test('initial state', () => {
        const action = {
            type: 'init'
        }
        expect(reducer(undefined, action)).toEqual({...initialState})
    });

    test('loading movies', () => {
        const movies = [...defaultMovieList];
        const action = loadingMovies(movies);
        const state = {
            ...initialState
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            movies : [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList]
        })
    });

    test('active ID', () => {
        const id = '777';
        const action = activeId(id);
        const state = {
            ...initialState
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            activeId : '777'
        })
    });

    test('add new movie', () => {
        const newMovieData= {id: '5', title: 'movie_5'};
        const action = addNewMovie(newMovieData);
        const state = {
            ...initialState,
            movies : [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList]
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            movies : [
                ...defaultMovieList,
                {id: '5', title: 'movie_5'}
            ],
            sortedAndFilteredMovies: [
                ...defaultMovieList,
                {id: '5', title: 'movie_5'}
            ]
        })
    });

    test('edit movie', () => {
        const editedMovieData= {id: '3', title: 'edited_movie_3', vote_average: '2', genres: ['C','d']};
        const action = editMovie(editedMovieData);
        const state = {
            ...initialState,
            movies : [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList]
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            movies : [
                {id: '1', title: 'movie_1', vote_average: '4', genres: ['A','b']}, 
                {id: '2', title: 'movie_2', vote_average: '1', genres: ['B','c']},
                {id: '3', title: 'edited_movie_3', vote_average: '2', genres: ['C','d']}
            ],
            sortedAndFilteredMovies: [
                {id: '1', title: 'movie_1', vote_average: '4', genres: ['A','b']}, 
                {id: '2', title: 'movie_2', vote_average: '1', genres: ['B','c']},
                {id: '3', title: 'edited_movie_3', vote_average: '2', genres: ['C','d']}
            ]
        })
    })

    test('delete movie', () => {
        const deletedMovie = '4';
        const action = deleteMovie(deletedMovie);
        const state = {
            ...initialState,
            activeId: '4',
            movies : [
                ...defaultMovieList,
                {id: '4', title: 'movie_4'}
            ],
            sortedAndFilteredMovies: [
                ...defaultMovieList,
                {id: '4', title: 'movie_4'}
            ]
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            activeId: null,
            movies : [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList]
        })
    });

    test('sort movies', () => {
        const sorter = 'RAITING';
        const action = sortMovies(sorter);
        const state = {
            ...initialState,
            movies : [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList]
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            sorter: 'RAITING',
            movies: [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList].sort((a, b) => a.vote_average - b.vote_average)
        })
    });

    test('filter movies', () => {
        const filter = 'b';
        const action = filterMovies(filter);
        const state = {
            ...initialState,
            movies: [...defaultMovieList],
            sortedAndFilteredMovies: [...defaultMovieList]
        };

        expect(reducer(state, action)).toEqual({
            ...initialState,
            filter,
            movies: [...defaultMovieList],
            sortedAndFilteredMovies: [
                {id: '1', title: 'movie_1', vote_average: '4', genres: ['a','b']}, 
                {id: '2', title: 'movie_2', vote_average: '1', genres: ['b','c']},
            ]
        })
    });
})
