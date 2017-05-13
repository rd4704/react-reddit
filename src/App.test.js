import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';
import jsonData from './database.json';

describe('App', () => {
  const app = shallow(<App dataStore={jsonData} />);

  it('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App dataStore={jsonData} />, div);
  });

  it('renders Title component', () => {
    expect(app.find(Title).length).toBe(1);
  });

  it('renders UserProfile component', () => {
    expect(app.find(UserProfile).length).toBe(1);
  });

  it('renders SubmitTopicForm component', () => {
    expect(app.find(SubmitTopicForm).length).toBe(1);
  });

  it('renders TopicList component', () => {
    expect(app.find(TopicList).length).toBe(1);
  });
});
