import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/standardize.css';
import '../css/index-grid.css';
import '../css/index.css';

export default class Add_task_icon extends Component{
	render(){
		return(
			<img className="image image-1" src={require("./images/if_plus_1646001.png")} />
		)
	}
}