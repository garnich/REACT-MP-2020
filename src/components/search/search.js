import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './search.css';

const Search = (props) => {
    const [search, setSearch] = useState('all');
    const [redirector, setRedirector] = useState(false);

    const handleInputChange = useCallback((event) => {
      setSearch(event.target.value);
      setRedirector(false);
    }, []);

    const searchHandler = useCallback(() => setRedirector(true), [search]);

    return (
        <div className={'search px-5 py-5'}>
            {redirector ? <Redirect push to={`/search/${search}`} /> : null}
            <h1 className={'px-5 mb-5 d-flex justify-content-start'}>Find your movie</h1>
            <div className={'search d-flex justify-content-start px-5'}> 
                <input 
                    className={'input mr-3'} 
                    placeholder={'What do you want to watch?'}
                    onChange={handleInputChange}
                />
                <Button 
                    variant="basic" 
                    className={'search-btn px-5 py-3'}
                    onClick={searchHandler}
                    >
                    {'SEARCH'}
                </Button>
            </div>
        </div>
    )
}

const MemoizedSearch = React.memo(Search);

export default MemoizedSearch
