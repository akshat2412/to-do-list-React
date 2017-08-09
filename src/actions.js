import actions from './constants'

export function addUser(name, login_id, password, tasks=[]){
	return {
		type: actions.ADD_USER,
		payload:{name, login_id, password, tasks}
	}
}

export function addTask(login_id, tasks=[]){
	return {
		type: actions.ADD_TASK,
		payload:{login_id, tasks}
	}
}

export function deleteTask(login_id, task_id){
	return {
		type: actions.DELETE_TASK,
		payload:{login_id, task_id}
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