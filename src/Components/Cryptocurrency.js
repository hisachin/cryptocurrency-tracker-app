import React, { Component } from 'react';
import './Cryptocurrency.css';
import Singlecurrency from './Singlecurrency';

import axios from 'axios'

class Cryptocurrency extends Component {
	constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }

         componentDidMount() {
	        this.fetchCryptocurrencyData();
	        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 5 * 1000);
	    }

        fetchCryptocurrencyData() {
	        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10")
	            .then(response => {
	                var wanted = ["bitcoin", "ethereum", "litecoin","ripple"];
	                var result = response.data.filter(currency => wanted.includes(currency.id));
	                this.setState({ data: result});
	            })
	            .catch(err => console.log(err));
	    }


	render() {

		let cryptocurrency_type = this.state.data.map((currency) =>
				<Singlecurrency data = {currency} key = {currency.id}/>
			); 
    	return (
      		<div className="cryptocurrency-div">
      			<div className="container">
      				<div className="row">
      					{cryptocurrency_type}
      				</div>
      			</div>
      		</div>
    	);
  	}
}

export default Cryptocurrency;
