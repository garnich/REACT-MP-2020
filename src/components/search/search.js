import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";

import { Button } from 'react-bootstrap';

import './search.css';

const Search = () => {
    const [search, setSearch] = useState('all');
    const history = useHistory();
    let { query } = useParams();

    const handleInputChange = useCallback((event) => {
      setSearch(event.target.value);
    }, []);

    const searchHandler = useCallback(() => history.push(`/search/${search}`), [search]);

    return (
        <div className={'search px-5 py-5'}>
          <h1 className={'px-5 mb-5 d-flex justify-content-start'}>Find your movie</h1>
          <div className={'search d-flex justify-content-start px-5'}> 
            <input 
              className={'input mr-3'} 
              placeholder={'What do you want to watch?'}
              onChange={handleInputChange}
              defaultValue={query}
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
