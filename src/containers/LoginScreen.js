import React, { Component } from 'react';
import Login from '../components/Login'
import Content from './Content'
import Completed from './Completed'
import {toggleLoggedin} from '../actions'

export default class LoginScreen extends Component{
	validate=()=>{
		console.log("validate is running")
		if(!this.props.state.loggedIn){
			console.log("state is false")
			return <Login state={this.props.state} toggleLoggedin={this.props.toggleLoggedin} addCurrentUser={this.props.addCurrentUser}/>
		}
		return (
				<div>
					<Content />
					<Completed />
				</div>
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
