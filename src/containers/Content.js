import {Content} from '../components/Content'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>{
	var curr_user=state.users.find(user=>user.login_id===state.current_user.login_id)
	// console.log("selected user is "+JSON.stringify(curr_user))
	// console.log("returning  tasks: "+curr_user.name)
	return{
		tasks:curr_user.tasks
	}
}

const Container = connect(mapStateToProps)(Content)

export default Container