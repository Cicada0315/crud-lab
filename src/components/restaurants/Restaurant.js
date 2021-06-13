import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
  handleonClick=(e)=>{
    this.props.Deleterestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li key={restaurant.id}>
          {restaurant.text}
          <button onClick={this.handleonClick}> X </button>
          <ReviewsContainer restaurant={restaurant} restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
