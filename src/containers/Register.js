import {connect} from 'react-redux'
import Content from './Content'
import Register from '../components/Register'
import {addUser, addCurrentUser, toggleLoggedin} from '../actions'
import { bindActionCreators } from 'redux';

const mapStateToProps=(state)=>{
	// var curr_user=state.users.find(user=>user.name==="akshat")
	// var task=curr_user.tasks.find(task=>task.id==={this.props.match.params.id})
	// console.log("selected user is "+JSON.stringify(curr_user))
	// console.log("returning  tasks: "+task)
	// console.log("state in container"+JSON.stringify(state))
	return{
		state:state
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addUser: addUser,
    addCurrentUser: addCurrentUser, 
    toggleLoggedin: toggleLoggedin
  }, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Register)

export default Container