import React, { Component } from 'react';
import { Header } from './Header';
import Add_task_icon from './Add_task_icon'
import { Small_notes_row } from './Small_notes_row';
import {tasks, tasks_completed, no_of_tasks} from '../initialstate.json'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export class Content extends Component{
	componentWillUpdate(nextProps, nextState){
		console.log("something changed")
		console.log(nextProps)
		console.log(nextState)
	}
	renderContent(tasks){
		if(tasks.length===0){
			return null
		}
		return(
			<div>
				<p className="text main-heading-2 text-2">Tasks to be Completed</p>
				{this.renderRow(this.props.tasks)}
			</div>
		)
	}
	renderRow(tasks){
		var three_tasks_list=[]
		var no_of_tasks = tasks.length
		return(tasks.map((task,i)=>{
			if((i+1)%3===1){
				three_tasks_list=[]
			}
			three_tasks_list.push(task)
			if(i+1===no_of_tasks || (i+1)%3===0){
				return (<Small_notes_row three_tasks_list={three_tasks_list} deleteTask={this.props.deleteTask} current_user={this.props.current_user} completeTask={this.props.completeTask} key={i} type="to-be-completed" replace={this.props.replace} />)
			}
			return null
		}))
	}


	render(){
		return(
			<div>
				<Link to={"/add-task/0/All"}>
					<Add_task_icon />
				</Link>
				{this.renderContent(this.props.tasks)}
			</div>
		)
	}

}