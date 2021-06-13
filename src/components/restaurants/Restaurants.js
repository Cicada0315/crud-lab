import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants=this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} Deleterestaurant={this.props.Deleterestaurant}/>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;