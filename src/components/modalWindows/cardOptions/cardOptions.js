import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from './../modalWindow';
import AddMovie from './../addMovie';
import DeleteMovie from './../deleteMovie';


import './cardOptions.css'

const CardOptions = (props) => {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShowEdit = useCallback(() => setShowEdit(true), []);
  const handleCloseEdit = useCallback(() => setShowEdit(false), []);
  const handleShowDelete = useCallback(() => setShowDelete(true), []);
  const handleCloseDelete = useCallback(() => setShowDelete(false), []);

  const { handleClose, id, handleCleanId} = props;

  return (
    <div className={'options'}>
      <span onClick={handleClose}>x</span>
      <p onClick={handleShowEdit}>Edit</p>
      <ModalWindow 
        handleClose={handleCloseEdit} 
        show={showEdit}
      >
        <AddMovie 
          activeId={id}
          handleClose={handleClose} 
          editMovie
        />
      </ModalWindow>
      <p onClick={handleShowDelete}>Delete</p>
      <ModalWindow 
        handleClose={handleCloseDelete} 
        show={showDelete}
      >
        <DeleteMovie 
          id={id} 
          handleClose={handleCloseDelete}
          handleCleanId={handleCleanId}
          closeOptions={handleClose}
        />
      </ModalWindow>
    </div>
  )
}

CardOptions.propTypes = {
  id: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCleanId: PropTypes.func.isRequired,
}

const MemoizedACardOptions = React.memo(CardOptions);

export default MemoizedACardOptions
