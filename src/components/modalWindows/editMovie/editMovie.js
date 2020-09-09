import React, { Component }from 'react'

import './editMovie.css'

class EditMovie extends Component {
  constructor() {
    super()

    this.handleSignIn = (event) => {
      event.preventDefault()
      const form = event.target;
      const newMovie = {
        id: this.props.id,
        title: form[0].value,
        data: form[1].value,
        url: form[2].value,
        genre: form[3].value,
        overview: form[4].value,
        runtime: form[5].value,
      };
      
      console.log(newMovie)
    }

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
              <h2 className="title">Edit movie</h2>
              <div className="form-group">
                <label htmlFor="id">Movie ID</label>
                <p 
                  name="id"
                  id="id">
                  {id}
                </p>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="Movie title here"
                  value={title}
                  required
                />
                <label htmlFor="date">Relase date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  id="date"
                  placeholder="Select date"
                  value={data}
                  required
                />
                <label htmlFor="url">Movie url</label>
                <input
                  type="url"
                  className="form-control"
                  name="url"
                  id="url"
                  placeholder="Movie URL here"
                  value={url}
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
                  value={genre}
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
                  value={overview}
                  required
                />
                <label htmlFor="runtime">Runtime</label>
                <input
                  type="text"
                  className="form-control"
                  name="runtime"
                  id="runtime"
                  placeholder="Runtime here"
                  value={runtime}
                  required
                />
              </div>
              <div className={'d-flex justify-content-end'}>
                <button type="reset" className="btn reset">
                  Reset
                </button>
                <button type="submit" className="btn save">
                  Save
                </button>
              </div>
            </form>
    )
  }
}

export default EditMovie
