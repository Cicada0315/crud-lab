import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={
    text: ""
  }

  handleonChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="text" value={this.state.text} onChange={this.handleonChange}/>
        <input type="submit" value="Create Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
