import React from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {

  it('should be able to render news articles to page', () => {
    const wrapper = shallow(<NewsContainer
      news={[]}
      filterSearchResults={jest.fn()}
      />)
    expect(wrapper).toMatchSnapshot();
  });

});
