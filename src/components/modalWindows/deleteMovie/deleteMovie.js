import React from 'react';
import { connect } from 'react-redux';
import { removeMovie } from './../../../services/requests';

import './deleteMovie.css';

const DeleteMovie = (props) => {

  const {
    id,
    handleClose,
    closeOptions,
    deleteMovie,
    handleCleanId
  } = props;

  const handleDelete = (event) => {
    event.preventDefault();

    deleteMovie(id);
    handleClose();
    closeOptions();
    handleCleanId();
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

const mapDispatchToProps = {
    deleteMovie: removeMovie,
};
    
const MemoizedDeleteMovie = React.memo(DeleteMovie);

export default connect(null, mapDispatchToProps)(MemoizedDeleteMovie)
