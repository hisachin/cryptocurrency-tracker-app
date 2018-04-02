import React, { Component } from 'react';

class Singlecurrency extends Component {
  render() {

    var {id,name,symbol,price_usd,price_inr,percent_change_1h,percent_change_24h,percent_change_7d} = this.props.data;

    return (
      <div className="col-md-4">
                <div className="single-currency-div" key = {id}>
                    <p className="cryptocurrency-name">{name} ({symbol})</p>
                          <h1><i className="fas fa-rupee-sign"></i>{ (+price_inr).toFixed(2) }</h1>
                          <p> <span className = {percent_change_1h >= 0 ? 'green' : 'red'}>{percent_change_1h}% </span> 1hr</p>
                          <p> <span className = {percent_change_1h >= 0 ? 'green' : 'red'}>{percent_change_24h}% </span> 24hrs</p>
                          <p> <span className = {percent_change_1h >= 0 ? 'green' : 'red'}>{percent_change_7d}% </span>7days</p>
                </div>
              </div>
    );
  }
}

export default Singlecurrency;