import React, { Component } from 'react';
import { Header } from './Header';
import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export default class Register extends Component{
	validate=()=>{
		console.log("akshat")
		console.log(this.refs.login_id.value)
		console.log(this.refs.password.value)
	}

	render(){
		console.log(this.validate)
		return(
			<div className="body page-index clearfix">
				<Header />
					<div className="container register_container clearfix">
					  	<div className="container _element"></div>
					<form onSubmit={this.validate}>
					  	<p className="text main-heading-2">Register</p>
					  	<div className="container _container container-15 clearfix">
					    	<p className="text generic_font text-12">User Name:</p>
					    	<input className="_input _input-4" type="text" ref = "name"></input>
					  	</div>
					 	<div className="container _container container-16 clearfix">
					    	<p className="text generic_font text-13">Login ID:</p>
					    	<input className="_input _input-5" type="text" ref="login_id"></input>
					  	</div>
					  	<div className="container _container container-17 clearfix">
					    	<p className="text generic_font text-14">Password:</p>
					    	<input className="_input _input-6" type="password" ref="password"></input>
					  	</div>
					  	<button className="_button" onClick={this.validate}>Submit</button>
					</form>
					</div>
			</div>
		)
	}
}