import React, { Component } from 'react';
import {note_photo} from './images/Post-it-note-transparent(2).png'
import {Link} from 'react-router-dom'

export class Small_notes_row extends Component{
	renderNotes = function(three_tasks_list){
		return(three_tasks_list.map((task, i)=>{
			if(i===0){
				return(
					<Link to={"/add-task/"+task.id}>
						<div className="container small_note_1 clearfix" key={i}>
						  	<img className="image" src={require("./images/Post-it-note-transparent(2).png")}></img>
						  	<p className="text small_note_heading">{task.heading.substring(0,16)}..</p>
						  	<p className="text small_note_description">{task.description.substring(0,33)}..</p>
						</div>
					</Link>
				)
			}
			else if(i===1){
				return(
					<Link to={"/add-task/"+task.id}>
						<div className="container small_note_2 clearfix" key={i}>
						  	<img className="image" src={require("./images/Post-it-note-transparent(2).png")}></img>
						  	<p className="text small_note_heading">{task.heading.substring(0,16)}..</p>
						  	<p className="text small_note_description">{task.description.substring(0,33)}..</p>
						</div>
					</Link>
				)
			}
			else{
				return(
					<Link to={"/add-task/"+task.id}>
						<div className="container small_note_3 container-5 clearfix" key={i}>
						  	<img className="image" src={require("./images/Post-it-note-transparent(2).png")}></img>
						  	<p className="text small_note_heading">{task.heading.substring(0,16)}..</p>
						  	<p className="text small_note_description">{task.description.substring(0,33)}..</p>
						</div>
					</Link>
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