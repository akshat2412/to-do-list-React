import React, { Component } from 'react';
import Login from '../components/Login'
import All from '../components/All'
import Header from '../components/Header'
import Content from './Content'
import Completed from './Completed'
import {toggleLoggedin} from '../actions'

export default class LoginScreen extends Component{
	validate=()=>{
		console.log("validate is running")
		if(!this.props.state.loggedIn){
			return <Login state={this.props.state} toggleLoggedin={this.props.toggleLoggedin} addCurrentUser={this.props.addCurrentUser}/>
		}
		return (
				<All />
		)
	}
	render(){
		return(
			<div>
				{this.validate()}
			</div>
		)
	}
}
