import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardOptions from './../modalWindows/cardOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import './movieCard.css';

const MovieCard = props => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { title, date, genre, img } = props;

  return (
    <li className="card w-30 mb-3">
      <Button 
        onClick={handleShow}
        variant="basic" 
        className={'card-options mr-2'} >
          <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
      {show && <CardOptions handleClose={handleClose} />}
      <img className="card-img" src={img} alt="poster" />
      <div className={"card-body"}>
        <div className="d-flex justify-content-between pt-3">
          <span className={"h5 font-weight-light mb-0"}>{title}</span>
          <div>
            <span className={"date px-3 py-1"}>{date}</span>
          </div>
        </div>
        <span className={"h6 font-weight-light"}>{genre}</span>
      </div>
    </li>
  )
}

MovieCard.defaultProps = {
  img: 'https://lh3.googleusercontent.com/proxy/IDYZil4pcksXb86bIQtmBR-utVw2WLcXMrws4jMfCjQDke4q1Y-tsnrOJlcBalFRIogugGnj_j8iotbwuiivSwg0W8EUiNg5OjmLNdMjAVlerA'
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.number,
    genre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default MovieCard
