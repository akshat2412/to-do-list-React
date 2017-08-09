import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export default class Add_task extends Component{
	setHeading(state, id){
		var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
		console.log("curr_user "+JSON.stringify(curr_user))
		var task=curr_user.tasks.find(task=>String(task.id)===id)
		return task.heading
	}

	setDescription(state, id){
		var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
		console.log("curr_user "+JSON.stringify(curr_user))
		var task=curr_user.tasks.find(task=>String(task.id)===id)
		return task.description
	}

	submitTask=()=> {
    	if(this.refs.heading.value!==""||this.refs.description.value!==""){
    		console.log("empty task added")
	    	this.props.addTask(
				"abc",
				"abc","passwordabc",
				[
					{
						"heading":this.refs.heading.value,
						"description":this.refs.description.value
					}
				]
			)
    	}
  	}
	render(){
		return(
			<div className="container large_note clearfix">
			    <img className="image" src={require("./images/Post-it-note-transparent(2).png")} />
			    <input className="_input" placeholder={this.setHeading(this.props.state, this.props.match.params.id)} type="text" ref="heading"/>
			    <textarea className="_textarea" placeholder={this.setDescription(this.props.state, this.props.match.params.id)} ref="description"></textarea>
			    <Link to="/" >
			    	<button className="_button _button-1" onClick={this.submitTask} >Done</button>
			    </Link>
			    <Link to="/" >
			    	<button className="_button _button-2">Cancel</button>
			    </Link>
			 </div>
		)
	}
}
