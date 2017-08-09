import actions from './constants'

export function addUser(name, login_id, password, tasks=[]){
	return {
		type: actions.ADD_USER,
		payload:{name, login_id, password, tasks}
	}
}

export function addTask(name, login_id, password, tasks=[]){
	return {
		type: actions.ADD_TASK,
		payload:{name, login_id, password, tasks}
	}
}

export function deleteTask(name, login_id, password, tasks=[]){
	return {
		type: actions.DELETE_TASK,
		payload:{name, login_id, password, tasks}
	}
}

export function completeTask(name, login_id, password, tasks=[]){
	return {
		type: actions.COMPLETE_TASK,
		payload:{name, login_id, password, tasks}
	}
}

export function addCurrentUser(name, login_id){
	return {
		type: actions.ADD_CURRENT_USER,
		payload:{name, login_id}
	}
}

export function toggleLoggedin(status){
	return {
		type: actions.TOGGLE_LOGGEDIN,
		payload:{status}
	}
}