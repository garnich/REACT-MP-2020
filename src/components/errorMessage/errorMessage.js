import React from 'react';

import './errorMessage.css';

const ErrorMessage = (props) => {
    return (
      <p className={'error'}>
        {props.msg}
      </p>
    )
  }

export default ErrorMessage
