import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoMovies from './noMovies';

Enzyme.configure({ adapter: new Adapter() });

describe('Test noMovies component', () => {
  it('<noMovies> test snapshot', () => {
    const wrapper = shallow(<NoMovies />)

    expect(wrapper).toMatchSnapshot()
  })
});