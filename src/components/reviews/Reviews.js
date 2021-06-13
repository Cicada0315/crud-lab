import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relevantReviews=this.props.reviews.filter(review=> review.restaurantId===this.props.restaurantId)
    const reviews=relevantReviews.map(review=> <Review review={review} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;