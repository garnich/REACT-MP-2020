import React from 'react';
import { connect } from 'react-redux';
import { removeMovie } from './../../../services/requests';
import { movieHideDetails } from './../../../actions/actions';

import './deleteMovie.css';

const DeleteMovie = (props) => {

  const {
    id,
    handleClose,
    closeOptions,
    deleteMovie,
    hideDetails,
  } = props;

  const handleDelete = (event) => {
    event.preventDefault();

    handleClose();
    closeOptions();
    hideDetails();
    deleteMovie(id);
  }

  return (
    <form
      role="form"
      className="col-12"
      onSubmit={handleDelete}
    >
      <h2 className="title">Delete movie</h2>
      <p>Are you sure you want to deletethis movie?</p>
      <div className={'d-flex justify-content-end'}>
        <button type="submit" className="btn confirm">
          Confirm
        </button>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => {dispatch(removeMovie(id))},
    hideDetails: () => {dispatch(movieHideDetails())},
  }
}
    
const MemoizedDeleteMovie = React.memo(DeleteMovie);

export default connect(null, mapDispatchToProps)(MemoizedDeleteMovie)
