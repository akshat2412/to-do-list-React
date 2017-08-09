import React, { Component } from 'react';



export class Header extends Component{
	render(){
		return(
			<div className="container page_header clearfix">
				<div className="container _element"></div>
			  	<p className="text main-heading">To- Do List</p>
			  	<p className="text- subheadings">A Dynamic To-Do List Application so that you never forget something</p>
			</div>
		);
	}
}