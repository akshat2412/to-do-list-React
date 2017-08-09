import actions from '../constants'
import {combineReducers} from 'redux'

export const users = (state=[], action) =>{
	switch(action.type){
		case actions.ADD_USER:
			if(state.length===0){
				var new_state=JSON.parse(JSON.stringify(state))
				new_state.push(action.payload)
				return new_state
			}
			const userExists = state.some( user => action.payload.login_id === user.login_id )
		 	if(!userExists){
		 		var new_state=JSON.parse(JSON.stringify(state))
		 		new_state.push(action.payload)
		 		return new_state
		 	}
		 	return state

		case actions.ADD_TASK:
			var new_task=action.payload.tasks[0];
			console.log("new task is " + JSON.stringify(new_task))
			var new_state=JSON.parse(JSON.stringify(state))
			var d = Date()
			new_task["id"] = new_task.heading+new_task.description.substring(0,10)
			new_state=new_state.map(user=>{
				if(user.login_id===action.payload.login_id){
					user.tasks.push(new_task)
				}
				return user
			})
			return new_state

		case actions.DELETE_TASK:
			var task_to_delete=action.payload.tasks[0];
			var new_state=JSON.parse(JSON.stringify(state))
			new_state=new_state.map(user=>{
				if(user.login_id===action.payload.login_id){
					user.tasks=user.tasks.filter(task=>task.id!==task_to_delete.id)
				}
				return user
			})
			return new_state

		case actions.COMPLETE_TASK:
			var task_to_delete=action.payload.tasks[0];
			var new_state=JSON.parse(JSON.stringify(state))
			new_state=new_state.map(user=>{
				if(user.login_id===action.payload.login_id){
					user.tasks=user.tasks.filter(task=>task.id!==task_to_delete.id)
				}
				return user
			})
			return new_state

		default:
			return state
	}
}

export const current_user = (state=[], action)=>{
	switch(action.type){
		case actions.ADD_CURRENT_USER:
			var new_state=JSON.parse(JSON.stringify(state))
			new_state.name=action.payload.name
			new_state.login_id=action.payload.login_id
			return new_state
		default:
			return state;
	}
}

export const loggedIn = (state=[], action) =>{
	switch(action.type){
		case actions.TOGGLE_LOGGEDIN:
			console.log("received status = "+action.payload.status)
			var new_status = action.payload.status
			return new_status
		default:
			return state;
	}
}

const singleReducer = combineReducers({
	users,
	current_user,
	loggedIn
})

export default singleReducer