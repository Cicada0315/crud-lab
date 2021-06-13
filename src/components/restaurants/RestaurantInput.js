import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    text: ""
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.Addrestaurant(this.state.text)

    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="text" value={this.state.text}/>
        <input type="submit" value="Create Restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
