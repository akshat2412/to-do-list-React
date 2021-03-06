import React, { Component } from 'react';
import Radium, { Style } from 'radium'

import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

class TrashIcon extends Component{
	test=()=>{
		return 'visible'
	}
	handleClick=()=>{
		this.props.deleteTask(
			this.props.current_user.login_id, this.props.id
		)
		
	}
	render(){
		return(
			<svg onClick={this.handleClick} className="svg-trash" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="40" width="40" viewBox="0 0 40 40" style="vertical-align: middle; color: red;">
				<Style
				  scopeSelector=".svg-trash"
				  rules={{
				    color: 'grey',
				    float: 'right'
				  }}
				/>
				<Style
				  scopeSelector=".svg-trash:hover"
				  rules={{
				    color: 'Red'
				  }}
				/>
				<g>
					<path d="m15.9 30.7v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 0v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.8 0v-15.7q0-0.3-0.2-0.5t-0.6-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.4 0 0.6-0.2t0.2-0.5z m-12.2-22.1h10l-1.1-2.6q-0.1-0.2-0.3-0.3h-7.1q-0.2 0.1-0.4 0.3z m20.7 0.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3h-18.6q-1.4 0-2.5-1.3t-1-3.1v-21.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h6.9l1.6-3.8q0.3-0.8 1.2-1.4t1.7-0.5h7.2q0.9 0 1.8 0.5t1.2 1.4l1.5 3.8h6.9q0.3 0 0.5 0.2t0.2 0.5z">
					</path>
				</g>
			</svg>
		)
	}
}

var Container = Radium(TrashIcon);
export default Container
