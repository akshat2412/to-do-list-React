import actions from '../constants.js'
import appreducer from './reducers'
import {createStore, applyMiddleware } from 'redux'

const consoleMessages = function(state){
	return function(next){
		return function(action){
			let result

			//dispatches the action
			result = next(action)

			//register the state change
			return result
		}
	}
}

export default (initialState={})=>{
	return applyMiddleware(consoleMessages)(createStore)(appreducer, initialState)
}