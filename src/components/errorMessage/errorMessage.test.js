import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from './ErrorMessage';

Enzyme.configure({ adapter: new Adapter() });


describe('Test ErrorMessage component', () => {
  it('<ErrorMessage> test message', () => {
    const string = 'errorMessage';
    const wrapper = shallow(<ErrorMessage msg={string}/>)
    const text = wrapper.find('.error').text();

    expect(text).toBe(string)
  })
});