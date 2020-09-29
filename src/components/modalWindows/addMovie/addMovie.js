import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addMovie, updateMovie } from './../../../services/requests';

import ErrorMessage from '../../errorMessage';

import './addMovie.css';

  const AddMovie = (props) => {

    const {
      activeId,
      movie,
      handleClose,
      editMovie,
      addNewMovie, 
      editExistMovie,
    } = props;

    const formik = useFormik({
        initialValues: {
          ...movie
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .required('Required'),
          release_date: Yup.string()
            .max(10, 'Must be 8 characters')
            .required('Required'),
          genres: Yup.string()
            .max(100, 'Must be 8 characters')
            .required('Required'),
          poster_path: Yup.string().url().required('Wrong URL'),
          overview: Yup.string()
            .max(500, 'Must be 15 characters or less')
            .required('Required'),
          runtime: Yup.number()
            .positive()
            .integer()
            .required('Required'),
        }),
        onSubmit: values => {
          if(!editMovie){
                const newMovie = {
                  ...values,
                  genres: values.genres.split(','),
                  tagline: values.title,
                  vote_average: 5.5,
                  vote_count: 100,
                  budget: 55000000,
                  revenue: 136906000,
                };
                addNewMovie(newMovie);
              } else {
                editExistMovie(values);
              }
        
              handleClose();
        }
      });

    return (
      <form
        role="form"
        className="col-12"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="title">{editMovie ? 'Edit movie' : 'Add movie'}</h2>
        <div className="form-group">
          {editMovie && (
            <Fragment>
              <label htmlFor="id">Movie ID</label>
              <p 
                name="id"
                id="id">
                {activeId}
              </p>
            </Fragment>
          )}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className={`form-control ${formik.touched.title && formik.errors.title ? 'notValid' : ''}`}
            name="title"
            id="title"
            placeholder="Movie title here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && <ErrorMessage msg={formik.errors.title}/>}
          <label htmlFor="date">Relase date</label>
          <input
            type="date"
            className={`form-control ${formik.touched.release_date && formik.errors.release_date ? 'notValid' : ''}`}
            name="release_date"
            id="date"
            placeholder="Select date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.release_date}
          />
          {formik.touched.release_date && formik.errors.release_date && <ErrorMessage msg={formik.errors.release_date}/>}
          <label htmlFor="url">Movie poster url</label>
          <input
            type="url"
            className={`form-control ${formik.touched.poster_path && formik.errors.poster_path ? 'notValid' : ''}`}
            name="poster_path"
            id="url"
            placeholder="Movie URL here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.poster_path}
          />
          {formik.touched.poster_path && formik.errors.poster_path && <ErrorMessage msg={formik.errors.poster_path}/>}
          { editMovie ?
              <Fragment>
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.genres && formik.errors.genres ? 'notValid' : ''}`}
                  name="genres"
                  list="genres"
                  id="genreInput"
                  placeholder="Select genre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.genres}
                />
                {formik.touched.genres && formik.errors.genres && <ErrorMessage msg={formik.errors.genres}/>}
                <datalist id="genres">
                  {formik.values.genres.map(genre => {
                    <option value={`${genre}`} />
                  })}
                </datalist>
              </Fragment> : <Fragment>
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.genres && formik.errors.genres ? 'notValid' : ''}`}
                  name="genres"
                  id="genreInput"
                  placeholder="Select genre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.genres}
                />
                {formik.touched.genres && formik.errors.genres && <ErrorMessage msg={formik.errors.genres}/>}
              </Fragment>
          }
          <label htmlFor="overview">Overview</label>
          <input
            type="text"
            className={`form-control ${formik.touched.overview && formik.errors.overview ? 'notValid' : ''}`}
            name="overview"
            id="overview"
            placeholder="Overview here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.overview}
          />
          {formik.touched.overview && formik.errors.overview && <ErrorMessage msg={formik.errors.overview}/>}
          <label htmlFor="runtime">Runtime</label>
          <input
            type="number"
            className={`form-control ${formik.touched.runtime && formik.errors.runtime ? 'notValid' : ''}`}
            name="runtime"
            id="runtime"
            placeholder="Runtime here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.runtime || undefined}
          />
          {formik.touched.runtime && formik.errors.runtime && <ErrorMessage msg={formik.errors.runtime}/>}
        </div>
        <div className={'d-flex justify-content-end'}>
          <button type="reset" className="btn reset" onClick={formik.resetForm}>
            Reset
          </button>

          {editMovie ? (
            <button type="submit" className="btn submit" onClick={formik.handleSubmit}>
              Save
            </button>
          ) : (
            <button type="submit" className="btn save" onClick={formik.handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
    )
}

AddMovie.propTypes = {
  activeId: PropTypes.number,
  movie: PropTypes.shape({
    title: PropTypes.string,

    release_date: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  handleClose: PropTypes.func.isRequired,
  editMovie: PropTypes.bool
}

const mapStateToProps = (state, {activeId}) => {
    if (!activeId) {
      return {
        movie: {
          title: '',
          release_date: '',
          genres: [],
          poster_path: '',
          overview: '',
          runtime: null,
        }
      }
    }
    const data = state.movies.find(item => item.id === activeId);
    
    return {
          movie: {
            id: data.id,
            title: data.title,
            release_date: data.release_date,
            genres: data.genres,
            poster_path: data.poster_path,
            overview: data.overview,
            runtime: data.runtime,
          },
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
