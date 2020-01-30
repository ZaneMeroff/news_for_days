import React from 'react';
import Menu from './Menu'
import { shallow } from 'enzyme';

describe('Menu', () => {

  it('should be able to render menu to page', () => {
    const wrapper = shallow(<Menu
      setNewsType={jest.fn()}
      selectedNewsType={'local'}
      />)
    expect(wrapper).toMatchSnapshot();
  });

  it('expect selectNewsType to be called on button click', () => {
    const mockSetNewsType = jest.fn();
    const wrapper = shallow(<Menu
      setNewsType={mockSetNewsType}
      selectedNewsType={'local'}
      />)
    wrapper.find('button').at(0).simulate('click')
    expect(mockSetNewsType).toHaveBeenCalled();
  });

});
