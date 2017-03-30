import React from 'react';

const newsFeedArr = [
  'You believe your eyes!',
  'Ten things you are doing right',
  '742 reasons listicles are the worst',
  'Check out my stuff'
];

class NewsFeed extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      newsFeedArr: []
    };
  }

  componentDidMount () {
    Promise.resolve()
      .then(() => {
        this.setState({
          newsFeedArr: newsFeedArr
        });
      });
  }

  render () {
    return (
      <div>
        <h3>News Feed</h3>
        <ul>
          {
            this.state.newsFeedArr.map((newsStory, idx) => {
              return <li key={idx}>{ newsStory }</li>;
            })
          }
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default NewsFeed;
