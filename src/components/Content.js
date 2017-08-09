import React, { Component } from 'react';
import { Header } from './Header';
import Add_task_icon from './Add_task_icon'
import { Small_notes_row } from './Small_notes_row';
import {tasks, tasks_completed, no_of_tasks} from '../initialstate.json'
import {connect} from 'react-redux'
import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export class Content extends Component{
	renderRow(tasks){
		// console.log("received tasks are "+tasks)
		var three_tasks_list=[]
		var no_of_tasks = tasks.length
		console.log(no_of_tasks)
		return(tasks.map((task,i)=>{
			if((i+1)%3===1){
				three_tasks_list=[]
			}
			three_tasks_list.push(task)
			if(i+1===no_of_tasks || (i+1)%3===0){
				console.log(three_tasks_list,i)
				return (<Small_notes_row three_tasks_list={three_tasks_list} key={i}/>)
			}
			return null
		}))
	}


	render(){
		return(
			<div className="body page-index clearfix">
				<Header />
				<Add_task_icon />
				<p className="text main-heading-2 text-2">Tasks to be Completed</p>
				{this.renderRow(this.props.tasks)}
			</div>
		)
	}

}