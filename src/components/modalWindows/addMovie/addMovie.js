import React from 'react'

import './addMovie.css'

const AddMovie = (props) => {
  
    const handleSignIn = (event) => {
      event.preventDefault()
      const form = event.target;
      const newMovie = {
        id: `MO${new Date().valueOf()}VIE`,
        title: form[0].value,
        data: form[1].value,
        url: form[2].value,
        genre: form[3].value,
        overview: form[4].value,
        runtime: form[5].value,
      };
      // -----TEST FORM SUBMIT-----
      console.log(newMovie)
      // --------------------------

      props.handleClose();
    }

    return (
      <form
        role="form"
        className="col-12"
        onSubmit={handleSignIn}
      >
        <h2 className="title">Add movie</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Movie title here"
            required
          />
          <label htmlFor="date">Relase date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            id="date"
            placeholder="Select date"
            required
          />
          <label htmlFor="url">Movie url</label>
          <input
            type="url"
            className="form-control"
            name="url"
            id="url"
            placeholder="Movie URL here"
            required
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            list="genre"
            id="genreInput"
            placeholder="Select genre"
            required
          />
          <datalist id="genre">
            <option value="Documentary" />
            <option value="Comedy" />
          </datalist>
          <label htmlFor="overview">Overview</label>
          <input
            type="text"
            className="form-control"
            name="overview"
            id="overview"
            placeholder="Overview here"
            required
          />
          <label htmlFor="runtime">Runtime</label>
          <input
            type="text"
            className="form-control"
            name="runtime"
            id="runtime"
            placeholder="Runtime here"
            required
          />
        </div>
        <div className={'d-flex justify-content-end'}>
          <button type="reset" className="btn reset">
            Reset
          </button>
          <button type="submit" className="btn submit">
            Submit
          </button>
        </div>
      </form>
    )
}

export default AddMovie
