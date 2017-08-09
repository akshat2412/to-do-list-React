import React, { Component } from 'react';
import { Header } from './Header';
import {Link} from 'react-router-dom'
import Register from '../containers/Register'
import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export default class Login extends Component{
	validate=()=>{
		console.log("user name = "+this.refs.user_name.value)
		console.log("password = "+this.refs.password.value)
		var found = false
		this.props.state.users.map(user=>{
			if(user.login_id===this.refs.user_name.value){
				if(user.password===this.refs.password.value){
					console.log("password matched")
					this.props.toggleLoggedin(true)
					this.props.addCurrentUser(user.name, user.login_id)
					found=true;
				}
			}
		})
	}
	render(){
		return(
			<div className="body page-index clearfix">
				<Header />
				<div className="container login_container clearfix">
				  	<div className="container _element"></div>
				  	<form onSubmit={this.validate}>
					  	<div className="container _container container-11 clearfix">
					    	<p className="text generic_font text-9">User Name:</p>
					    	<input className="_input _input-2" type="text" ref="user_name"></input>
					  	</div>
					  	<div className="container _container container-12 clearfix">
					    	<p className="text generic_font text-10">Password:</p>
					    	<input className="_input _input-3" type="password" ref="password"></input>
					  	</div>
					  	<button className="_button _button-3" onClick={this.validate}>Submit</button>
					  	<Link to="/Register">
					  		<button className="_button _button-4">Register</button>
				  		</Link>
				  	</form>
				</div>
			</div>
		)
	}
}

