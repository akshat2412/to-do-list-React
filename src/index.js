import React from 'react';
import ReactDOM from 'react-dom';
import Content  from './containers/Content';
import Landing  from './containers/Landing';
import Add_task  from './containers/Add_task';
import Register  from './containers/Register';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './store'
import {addUser, addTask, deleteTask, completeTask, addCurrentUser, toggleLoggedin} from './actions'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import initialstate from './initialstate'
window.React = React
var local_storage={}
var newstate = (local_storage['redux_store']) ? JSON.parse(local_storage['redux_store']):initialstate


const savestate = () =>{
	const state = JSON.stringify(store.getState())
	local_storage['redux-store'] = state
}

const store = storeFactory(newstate)

store.subscribe(savestate)

// store.dispatch(
// 	addUser("abc","abc","passwordabc",[])
// )
store.dispatch(
	addUser("akshat","akshat2412","passworddef",[])
)

store.dispatch(
	addCurrentUser("abc","abc")
)




// const tasks=[
// 		{
// 			"heading": "heading of the task",
// 			"description": "description of the task",
// 			"key":1
// 		},
// 		{
// 			"heading": "heading of the task 2",
// 			"description": "description of the task second",
// 			"key":2
// 		},
// 		{
// 			"heading": "heading of the task 3",
// 			"description": "description of the task third",
// 			"key":3
// 		},
// 		{
// 			"heading": "heading of the task 4",
// 			"description": "description of the task fourth",
// 			"key":4
// 		},
// 		{
// 			"heading": "heading of the task 5",
// 			"description": "description of the task fifth",
// 			"key":5
// 		}
// ]
// console.log(BrowserRouter)
ReactDOM.render(<Provider store = {store}>
					<Router history={createHistory} >
						<div>
							<Route exact path="/" component={Landing} />
							<Route exact path="/add-task/:id" component={Add_task} />
							<Route exact path="/Register" component={Register} />
						</div>
					</Router>
				</Provider>, 
				document.getElementById('root')
				);
registerServiceWorker();
