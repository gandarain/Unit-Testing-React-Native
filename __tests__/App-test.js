import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('should render the Text Element', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });
});
