import {Content} from '../components/Content'
import {connect} from 'react-redux'
import {deleteTask, completeTask} from '../actions'
import { bindActionCreators } from 'redux';

const mapStateToProps=(state)=>{
	var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
	// console.log("selected user is "+JSON.stringify(curr_user))
	// console.log("returning  tasks: "+curr_user.name)
	return{
		tasks:curr_user.tasks,
		current_user:state.current_user
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteTask: deleteTask,
    completeTask: completeTask
  }, dispatch)
}

const Container = connect(mapStateToProps,mapDispatchToProps)(Content)

export default Container