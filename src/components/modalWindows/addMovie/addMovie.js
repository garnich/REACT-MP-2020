import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addMovie, updateMovie } from './../../../services/requests';

import './addMovie.css';

  const AddMovie = (props) => {

    const {
      id,
      movie,
      handleClose,
      editMovie,
      addNewMovie, 
      editExistMovie,
    } = props;

    const {
      title, 
      tagline,
      vote_average,
      vote_count,
      release_date,
      poster_path,
      budget,
      revenue,
      genres,
      overview,
      runtime
    } = movie;
    
    const handleSignIn = useCallback((event) => {
      event.preventDefault()
      const form = event.target;
      if(!editMovie){
        const newMovie = {
          title: form[0].value,
          tagline: form[0].value,
          vote_average: 5.5,
          vote_count: 100,
          release_date: form[1].value,
          poster_path: form[2].value,
          budget: 55000000,
          revenue: 136906000,
          genres: [form[3].value],
          overview: form[4].value,
          runtime: Number(form[5].value),
        };

        addNewMovie(newMovie);
      } else {
        const editMovie = {
          id,
          title: form[0].value,
          tagline: form[0].value,
          vote_average,
          vote_count,
          budget,
          revenue,
          release_date: form[1].value,
          poster_path: form[2].value,
          genres: form[3].value.split(','),
          overview: form[4].value,
          runtime: Number(form[5].value),
        };

        editExistMovie(editMovie);
      }

      handleClose();
    }, [])

    return (
      <form
        role="form"
        className="col-12"
        onSubmit={handleSignIn}
      >
        <h2 className="title">{editMovie ? 'Edit movie' : 'Add movie'}</h2>
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
            defaultValue={release_date}
            required
          />
          <label htmlFor="url">Movie poster url</label>
          <input
            type="url"
            className="form-control"
            name="url"
            id="url"
            placeholder="Movie URL here"
            defaultValue={poster_path}
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
            defaultValue={typeof genres === 'object' ? [genres[0], genres[1]].join(',') : genres}
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
  id: PropTypes.number,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,

    release_date: PropTypes.string.isRequired,
    genres: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
    ]).isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  handleClose: PropTypes.func.isRequired,
  editMovie: PropTypes.bool
}

AddMovie.defaultProps = {
  id: null,
  movie: PropTypes.shape({
    id: null,
    title: '',
    release_date: '2020-09-17',
    genres: [],
    poster_path: 'https://kinozanoza.ru/uploads/poster_none.png',
    overview: '',
    runtime: null,
  }),
  editMovie: false
}


const mapStateToProps = (state, {id}) => {
    if (!id) {
      return
    }
    const data = state.movies.find(item => item.id === id);
    
    return {
          movie: data,
      }
    }
    
const mapDispatchToProps = (dispatch) => {
  return {
    addNewMovie: (data) => {dispatch(addMovie(data))},
    editExistMovie: (data) => {dispatch(updateMovie(data))},
  }
}
    
const MemoizedAddMovie = React.memo(AddMovie);

export default connect(mapStateToProps, mapDispatchToProps)(MemoizedAddMovie)
