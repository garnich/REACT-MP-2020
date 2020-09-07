import React from 'react';
import { Button } from 'react-bootstrap';

import './search.css';

const Search = () => {
    return (
        <div className={'search px-5 py-5'}>
            <h1 className={'px-5 mb-5 d-flex justify-content-start'}>Find your movie</h1>
            <div className={'search d-flex justify-content-start px-5'}> 
                <input className={'input mr-3'} placeholder={'What do you want to watch?'}/>
                <Button variant="basic" className={'search-btn px-5 py-3'}>{'SEARCH'}</Button>
            </div>
        </div>
    )
}

export default Search
