import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      likes: 0,
      loves: 0
    };

    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleLoveClick = this.handleLoveClick.bind(this);
  }

  handleLikeClick () {
    this.setState({like: this.state.likes++});
  }
  
  handleLoveClick () {
    this.setState({love: this.state.loves++});
  }

  render () {

    const children = this.props.children;
    const props = Object.assign({}, this.state, {
      handleLikeClick: this.handleLikeClick,
      handleLoveClick: this.handleLoveClick 
    });
    return (
      <div>
        <h1>Cody's Page</h1>
        <Link to="/reactions" className="btn btn-default">Reactions</Link>
        <Link to="/news" className="btn btn-default">News</Link>
        { children && React.cloneElement(children, props) }
      </div>
    );
  }
}

