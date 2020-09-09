import React from 'react';

import './deleteMovie.css';

const DeleteMovie = (props) => {

  const {
    id,
    handleClose,
    closeOptions,
  } = props;

  const handleDelete = (event) => {
    event.preventDefault()
   
    // -----TEST FORM SUBMIT-----
    console.log(`MOVIE ID=${id} DELETED!`);
    // --------------------------

    handleClose();
    closeOptions();
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

export default DeleteMovie
