import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput Addrestaurant={this.props.Addrestaurant} />
        <Restaurants restaurants={this.props.restaurants} Deleterestaurant={this.props.Deleterestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Addrestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
    Deleterestaurant: restaurantId => dispatch({ type: 'DELETE_RESTAURANT', restaurantId })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
