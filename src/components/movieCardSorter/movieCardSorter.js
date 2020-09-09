import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MovieCardSorter extends PureComponent {
  constructor(props){
    super()

    this.state = {
      options: [
        {
          name: 'Select…',
          value: null,
        },
        {
          name: 'RELEASE DATE',
          value: 'RELEASE DATE',
        },
      ],
      value: '?',
    };
  
    this.handleChange = (event) => {
      this.setState({ value: event.target.value });
      this.props.onSorterChange(event.target.value )
    };
  }
  

  render() {
    const { options, value } = this.state;

    return (
      <div className={'d-flex align-items-center'}>
        <label>SORT BY </label>
        <select onChange={this.handleChange} value={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

MovieCardSorter.propTypes = {
    onSorterChange: PropTypes.func.isRequired,
}

export default MovieCardSorter
