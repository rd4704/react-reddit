import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';
import TopicUtil from './TopicUtil';

const title = 'REACT REDDIT';
const username = 'anonymous';

class App extends Component {
    static propTypes = {
        topics: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            title,
            username,
            filter: 'Top',
            topics: props.topics,
        };
    }

    handleSubmit = (event, newTopic) => {
        const { topics, username } = this.state;
        const newTopics = TopicUtil.createTopic(topics, newTopic, username);
        this.setState({ topics: newTopics });
        event.preventDefault();
    }

    handleUpvote = (topic) => {
        const { topics, username } = this.state;
        const newTopics = TopicUtil.upvoteTopic(topics, topic, username);
        this.setState({ topics: newTopics });
    }

    handleDownvote = (topicId) => {
        const { topics, username } = this.state;
        const newTopics = TopicUtil.downvoteTopic(topics, topicId, username);
        this.setState({ topics: newTopics });
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
        event.preventDefault();
    }

    render() {
        const { title, username, topics, filter } = this.state;
        const sortedTopics = filter === 'Top' ?
            TopicUtil.getMostPopularTopics(topics) :
            TopicUtil.getAllTopicsSortedByVotes(topics);

        return (
            <div className='home'>
                <header>
                    <Title text={title} />
                    <UserProfile username={username} />
                </header>
                <main>
                    <SubmitTopicForm handleSubmit={this.handleSubmit} />
                    Filter:
                    <select value={filter} onChange={this.handleFilterChange}>
                        <option value="All">All</option>
                        <option value="Top">Top</option>
                    </select>
                    <TopicList topics={sortedTopics}
                        handleUpvote={this.handleUpvote}
                        handleDownvote={this.handleDownvote} />
                </main>
            </div>
        );
    }
}

export default App;
