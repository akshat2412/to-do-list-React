import React, { Component } from 'react';
import {note_photo} from './images/Post-it-note-transparent(2).png'
import {Link} from 'react-router-dom'
import CheckIcon from './CheckIcon';
import TrashIcon from './TrashIcon';

export class Small_notes_row extends Component{
	setTrashicon=(id)=>{
		if(this.props.type==='completed'){
			return null
		}
		return(
			<TrashIcon deleteTask={this.props.deleteTask} current_user={this.props.current_user} id={id} />
		)
	}

	setCheckicon=(id)=>{
		if(this.props.type==='completed'){
			return null
		}
		return(
			<CheckIcon completeTask={this.props.completeTask} current_user={this.props.current_user} id={id}/>
			
		)
	}
	handleDelete=()=>{
		console.log("handleDelete running")
	}
	renderNotes = function(three_tasks_list){
		// console.log("current user received is "+JSON.stringify(this.props.current_user))
		console.log("received current_user is "+JSON.stringify(this.props.current_user))
		console.log("received deleteTask is "+this.props.deleteTask)
		return(three_tasks_list.map((task, i)=>{
			if(i===0){
				return(
					<div className="container small_note_1 clearfix" key={i}>
						{this.setTrashicon(task.id)}
						{this.setCheckicon(task.id)}
						<Link to={"/add-task/"+task.id}>
						  	<img className="image" src={require("./images/Post-it-note-transparent(2).png")}></img>
						  	<p className="text small_note_heading">{task.heading.substring(0,16)}..</p>
						  	<p className="text small_note_description">{task.description.substring(0,33)}..</p>
						</Link>
					</div>
				)
			}
			else if(i===1){
				return(
					<div className="container small_note_2 clearfix" key={i}>
						{this.setTrashicon(task.id)}
						{this.setCheckicon(task.id)}
						<Link to={"/add-task/"+task.id}>
						  	<img className="image" src={require("./images/Post-it-note-transparent(2).png")}></img>
						  	<p className="text small_note_heading">{task.heading.substring(0,16)}..</p>
							<p className="text small_note_description">{task.description.substring(0,33)}..</p>
						</Link>
					</div>
				)
			}
			else{
				return(
					<div className="container small_note_3 container-5 clearfix" key={i}>
						{this.setTrashicon(task.id)}
						{this.setCheckicon(task.id)}
						<Link to={"/add-task/"+task.id}>
						  	<img className="image" src={require("./images/Post-it-note-transparent(2).png")}></img>
						  	<p className="text small_note_heading">{task.heading.substring(0,16)}..</p>
						  	<p className="text small_note_description">{task.description.substring(0,33)}..</p>
						</Link>
					</div>
				)
			}
		}))
	}
	render(){
		
		return(
			<div className="container small_notes_row clearfix">
				<div className="container _element"></div>
				{this.renderNotes(this.props.three_tasks_list)}
			</div>
		)
	}
}