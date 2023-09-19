import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.enterTask = this.enterTask.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	enterTask(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const newTask = { ...this.state, id: uuidv4(), completed: false };
		this.props.createTask(newTask);
		this.setState({ task: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="task">Enter Task:</label>
					<input
						type="text"
						name="task"
						placeholder="New Task"
						value={this.state.task}
						onChange={this.enterTask}
						
					/>
					<button>Add Task</button>
				</div>
			</form>
		);
	}
}

export default NewTodoForm;
