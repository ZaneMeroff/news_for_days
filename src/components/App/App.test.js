import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import { shallow } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be able to render app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  it('setNewsType should update state', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().setNewsType('health')
    expect(wrapper.state('data')).toEqual(health)
  });

});
