import {Content} from '../components/Content'
import {connect} from 'react-redux'
import {deleteTask, completeTask} from '../actions'
import { bindActionCreators } from 'redux';

const mapStateToProps=(state,ownprops)=>{
	var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
	// console.log("selected user is "+JSON.stringify(curr_user))
	// console.log("returning  tasks: "+curr_user.name)
	// console.log("replace prop" + this.props.replace)
	// console.log("ownprops " +JSON.stringify(ownprops))
	if(typeof(curr_user)=="undefined"){
		curr_user={}
		curr_user.tasks=[]
	}
	return{
		tasks:curr_user.tasks,
		current_user:state.current_user,
		replace: ownprops.replace
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