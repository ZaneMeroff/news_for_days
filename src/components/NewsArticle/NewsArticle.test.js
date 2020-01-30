import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle.js';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {

  it('should be able to render news article to page', () => {
    const wrapper = shallow(<NewsArticle
      image={'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp'}
      headline={'Spider-Man Will Remain in the Marvel Cinematic Universe'}
      description={'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.'}
      url={'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'}
      key={1}
      />)
    expect(wrapper).toMatchSnapshot();
  });

});
