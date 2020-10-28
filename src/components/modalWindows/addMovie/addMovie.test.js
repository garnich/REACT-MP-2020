import React from 'react';
import Enzyme, { render } from 'enzyme';
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import AddMovie from './addMovie';
import { movies } from './../../../constants/mockData';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useLayoutEffect: jest.requireActual('react').useEffect,
}));

const handleCloseSpy = jest.fn();
const handleClose = handleCloseSpy;
const initialState = {
    movies: [],
    activeId: null,
    sortedAndFilteredMovies: [],
    sorter: null,
    filter: 'all',
};

const store = configureStore([])(initialState);
    store.dispatch = jest.fn();
    store.subscribe = jest.fn();
    store.getState = jest.fn();

describe('Test <AddMovie/> component', () => {

    it('<AddMovie> test snapshot should render editMovie modal component', () => {
        const setStore = {
            ...store,
            movies,
            activeId: 1,
            sortedAndFilteredMovies: movies,
            sorter: null,
            filter: 'all',
        };
        const wrapper = render(
            <Provider store={setStore}>
                <AddMovie 
                    handleClose={handleClose}
                    editMovie={true}
                />
            </Provider>
        )
    
        expect(wrapper).toMatchSnapshot()
    });

    it('<AddMovie> test snapshot should render addMovie modal component', () => {
        const setStore = {
            ...store,
            movies,
            activeId: null,
            sortedAndFilteredMovies: movies,
            sorter: null,
            filter: 'all',
        };
        const wrapper = render(
            <Provider store={setStore}>
                <AddMovie 
                    handleClose={handleClose}
                    editMovie = {false}
                />
            </Provider>
        )
    
        expect(wrapper).toMatchSnapshot()
    });
});