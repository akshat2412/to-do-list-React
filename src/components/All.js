import React, { Component } from 'react';
import Header from './Header'
import Content from '../containers/Content'
import Completed from '../containers/Completed'
import Selector from './Selector'

export default class All extends Component{
	render(){
		return(
			<div className="body page-index clearfix">
				<Header />
				<Selector selected="All"/>
				<Content replace="All" />
				<Completed replace="Completed_from_All"/>
			</div>
		)
	}
}