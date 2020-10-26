import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoMoatch from './noMatch';

Enzyme.configure({ adapter: new Adapter() });


describe('Test NoMoatch component', () => {
  it('<NoMoatch> test snapshot', () => {
    const wrapper = shallow(<NoMoatch />)

    expect(wrapper).toMatchSnapshot()
  })
});