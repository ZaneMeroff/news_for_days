import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  

});



describe('Card', () => {
  it ('renders the title of the idea in an <h3> tag', () => {
    const wrapper = shallow(<Card
      title='Bananas'
      id={5}
      description='yellow fruit'
      removeIdea={jest.fn()}
      />)

    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.contains(title)).toEqual(true);
  });

});


describe('Idea', () => {
  it ('renders the idea', () => {
    const wrapper = shallow(<Ideas
      ideas={[{id: 5, title: 'Cat', description: 'meow' },
              {id: 2, title: 'Dog', description: 'woof' }]}
      removeIdea={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})
