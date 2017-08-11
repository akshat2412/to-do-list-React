import {Completed} from '../components/Completed'
import {connect} from 'react-redux'
import {deleteTask, completeTask} from '../actions'
import { bindActionCreators } from 'redux';

const mapStateToProps=(state)=>{
	var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
	// console.log("selected user is "+JSON.stringify(curr_user))
	// console.log("returning  tasks: "+curr_user.name)
	return{
		tasks:curr_user.completed,
		current_user:state.current_user
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteTask: deleteTask
  }, dispatch)
}

const Container = connect(mapStateToProps,mapDispatchToProps)(Completed)

export default Container