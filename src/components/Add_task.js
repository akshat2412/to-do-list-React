import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export default class Add_task extends Component{
	
	setHeading(state, id){
		if(id==0){	
			return "Heading"
		}
		if(this.props.match.params.replace==="Completed_from_All"||this.props.match.params.replace==="Completed"){
			console.log("-----------------------if statement running")
			var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
			var task=curr_user.completed.find(task=>String(task.id)===id)
			return task.heading
		}
		var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
		console.log("curr_user "+JSON.stringify(curr_user))
		var task=curr_user.tasks.find(task=>String(task.id)===id)
		return task.heading
	}

	setDescription(state, id){
		if(id==0){
			return "Description"
		}
		if(this.props.match.params.replace==="Completed_from_All"||this.props.match.params.replace==="Completed"){
			var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
			var task=curr_user.completed.find(task=>String(task.id)===id)
			return task.description
		}
		var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
		console.log("curr_user "+JSON.stringify(curr_user))
		var task=curr_user.tasks.find(task=>String(task.id)===id)
		return task.description
	}

	submitTask=()=> {
    	if(this.refs.heading.value!==""||this.refs.description.value!==""){
    		console.log("empty task added")
	    	this.props.addTask(
				this.props.state.current_user.login_id,
				[
					{
						"heading":this.refs.heading.value,
						"description":this.refs.description.value
					}
				]
			)
			if(this.props.match.params.id!=0){
				this.props.deleteTask(
					this.props.state.current_user.login_id,
					this.props.match.params.id
				)
			}
		}
		if(this.props.match.params.replace==="Completed_from_All"){
			this.props.history.replace("/All")
		}
		else{
			this.props.history.replace("/"+this.props.match.params.replace)
  		}
	}
  	moveBack=()=>{
  		if(this.props.match.params.replace==="Completed_from_All"){
			this.props.history.replace("/All")
		}
		else{
			this.props.history.replace("/"+this.props.match.params.replace)
  		}
  	}
  	checkRenderSubmit=()=>{
  		if(this.props.match.params.replace==="All"||this.props.match.params.replace=="Active"){
  			console.log("******Condition satisfied******")
  			return(
  				<button className="_button _button-1" onClick={this.submitTask} >Done</button>
  			)
  			return null
  		}
  	}
	render(){
		return(
			<div className="container large_note clearfix">
			    <img className="image" src={require("./images/Post-it-note-transparent(2).png")} />
			    <input className="_input" placeholder={this.setHeading(this.props.state, this.props.match.params.id)} type="text" ref="heading"/>
			    <textarea className="_textarea" placeholder={this.setDescription(this.props.state, this.props.match.params.id)} ref="description"></textarea>
			    {this.checkRenderSubmit()}
			    <button className="_button _button-2" onClick={this.moveBack} >Cancel</button>
			 </div>
		)
	}
}
