import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Select from 'react-select';

import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export default class Selector extends Component{
	setSelected(value){
		if(this.props.selected===value){
			return "pressed"
		}
		return null
	}

	setRoute(event,value){
		console.log("Akshat")
	}

	render(){
		return(
			<div>
				<Link to="/All">
					<button className="_button _button-6 " id={this.setSelected("All")}>All</button>
				</Link>
				<Link to="/Active">
					<button className="_button _button-7" id={this.setSelected("Active")}>Active</button>
				</Link>
				<Link to="/Completed">
					<button className="_button _button-8" id={this.setSelected("Completed")}>Completed</button>
				</Link>
			</div>
		)
	}
}