import React, { Component } from 'react';
import Header from './Header'
import Content from '../containers/Content'
import Selector from './Selector'

export default class All extends Component{
	render(){
		return(
			<div className="body page-index clearfix">
				<Header />
				<Selector selected="Active"/>
				<Content replace="Active"/>
			</div>
		)
	}
}