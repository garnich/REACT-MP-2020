import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';

import './addMovie.css';

  const AddMovie = (props) => {

    const {
      id,
      title,
      data,
      genre,
      url,
      overview,
      runtime,
      handleClose,
      editMovie
    } = props;
  
    const handleSignIn = useCallback((event) => {
      event.preventDefault()
      const form = event.target;
      if(!editMovie){
        const newMovie = {
          id: `MO${new Date().valueOf()}VIE`,
          title: form[0].value,
          data: form[1].value,
          url: form[2].value,
          genre: form[3].value,
          overview: form[4].value,
          runtime: form[5].value,
        };
        // -----TEST FORM ADDMOVIE SUBMIT-----
        console.log('TEST FORM ADDMOVIE SUBMIT', newMovie)
        // --------------------------
      } else {
        const editMovie = {
          id: props.id,
          title: form[0].value,
          data: form[1].value,
          url: form[2].value,
          genre: form[3].value,
          overview: form[4].value,
          runtime: form[5].value,
        };
        // -----TEST FORM EDITMOVIE SUBMIT-----
        console.log('TEST FORM EDITMOVIE SUBMIT', editMovie)
        // --------------------------
      }

      handleClose();
    }, [])

    return (
      <form
        role="form"
        className="col-12"
        onSubmit={handleSignIn}
      >
        <h2 className="title">Add movie</h2>
        <div className="form-group">
          {editMovie && (
            <Fragment>
              <label htmlFor="id">Movie ID</label>
              <p 
                name="id"
                id="id">
                {id}
              </p>
            </Fragment>
          )}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Movie title here"
            defaultValue={title}
            required
          />
          <label htmlFor="date">Relase date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            id="date"
            placeholder="Select date"
            defaultValue={data}
            required
          />
          <label htmlFor="url">Movie url</label>
          <input
            type="url"
            className="form-control"
            name="url"
            id="url"
            placeholder="Movie URL here"
            defaultValue={url}
            required
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            list="genre"
            id="genreInput"
            placeholder="Select genre"
            defaultValue={genre}
            required
          />
          <datalist id="genre">
            <option value="Documentary" />
            <option value="Comedy" />
          </datalist>
          <label htmlFor="overview">Overview</label>
          <input
            type="text"
            className="form-control"
            name="overview"
            id="overview"
            placeholder="Overview here"
            defaultValue={overview}
            required
          />
          <label htmlFor="runtime">Runtime</label>
          <input
            type="text"
            className="form-control"
            name="runtime"
            id="runtime"
            placeholder="Runtime here"
            defaultValue={runtime}
            required
          />
        </div>
        <div className={'d-flex justify-content-end'}>
          <button type="reset" className="btn reset">
            Reset
          </button>

          {editMovie ? (
            <button type="submit" className="btn submit">
              Save
            </button>
          ) : (
            <button type="submit" className="btn save">
              Submit
            </button>
          )}
        </div>
      </form>
    )
}

AddMovie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.string,
  genre: PropTypes.string,
  url: PropTypes.string,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  handleClose: PropTypes.func.isRequired,
  editMovie: PropTypes.bool
}

AddMovie.defaultProps = {
  title: '',
  data: '',
  genre: '',
  url: '',
  overview: '',
  runtime: null,
  editMovie: false
}

const MemoizedAddMovie = React.memo(AddMovie);

export default MemoizedAddMovie
