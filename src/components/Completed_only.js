import React, { Component } from 'react';
import Header from './Header'
import Completed from '../containers/Completed'
import Selector from './Selector'


export default class All extends Component{
	render(){
		return(
			<div className="body page-index clearfix">
				<Header />
				<Selector selected="Completed"/>
				<Completed replace="Completed"/>
			</div>
		)
	}
}