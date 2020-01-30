import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {

  it('should be able to render SearchForm to page', () => {
    const wrapper = shallow(<SearchForm
    filterSearchResults={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  });

  it('expect filterSearchResults to be called on button click', () => {
    const mockFilterSearchResults = jest.fn();
    const wrapper = shallow(<SearchForm
    filterSearchResults={mockFilterSearchResults}
    />)
    wrapper.find('button').simulate('click')
    expect(mockFilterSearchResults).toHaveBeenCalled();
  });

  it('should update state when onSearchChange is called', () => {
    const wrapper = shallow(<SearchForm
    filterSearchResults={jest.fn()}
    />)
    const mockEvent = {
      target: {
        value: 'chicken'
      }
    }
    wrapper.instance().onSearchChange(mockEvent)
    expect(wrapper.state('query')).toEqual('chicken')
  });

});
