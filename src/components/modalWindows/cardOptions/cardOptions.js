import React, { useState } from 'react';
import ModalWindow from './../modalWindow';
import EditMovie from './../editMovie';
import DeleteMovie from './../deleteMovie';


import './cardOptions.css'

const CardOptions = (props) => {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleCloseDelete = () => setShowDelete(false);

  const { handleClose, id,title, date, genre } = props;

  return (
    <div className={'options'}>
      <span onClick={handleClose}>x</span>
      <p onClick={handleShowEdit}>Edit</p>
      <ModalWindow 
        handleClose={handleCloseEdit} 
        show={showEdit}
      >
        <EditMovie 
          id={id}
          title={title}
          date={date}
          genre={genre}
          handleClose={handleCloseEdit}
          closeOptions={handleClose} 
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
          closeOptions={handleClose}
        />
      </ModalWindow>
    </div>
  )
}

export default CardOptions
