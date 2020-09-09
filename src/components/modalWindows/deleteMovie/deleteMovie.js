import React, { Component }from 'react'

import './deleteMovie.css'

class DeleteMovie extends Component {
  constructor() {
    super()
  }

  render() {
  const {
    id,
    title,
    data,
    url,
    genre,
    overview,
    runtime,
  } = this.props;

    return (
      <form
        role="form"
        className="col-12"
        onSubmit={this.handleSignIn}
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
}

export default DeleteMovie
