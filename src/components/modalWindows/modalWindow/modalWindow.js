import React from 'react'
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './modalWindow.css'

const ModalWindow = props => {
  const { handleClose, show, children } = props

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      centered
      dialogClassName='modalWindow'
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

ModalWindow.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}


const MemoizedModalWindow = React.memo(ModalWindow);

export default MemoizedModalWindow
