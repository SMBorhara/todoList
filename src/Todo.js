import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, task: this.props.task };
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleRemove() {
		this.props.remove(this.props.id);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleUpdate(e) {
		e.preventDefault();
		this.props.update(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}

	handleToggle(e) {
		this.props.toggle(this.props.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="Todo">
					<form onSubmit={this.handleUpdate}>
						<input
							type="text"
							value={this.state.task}
							name="task"
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Todo">
					<li
						className={
							this.props.completed ? 'Todo-task completed' : 'Todo-task'
						}
						onClick={this.handleToggle}
					>
						{this.props.task}{' '}
					</li>
					<div className="Todo-buttons">
						<button onClick={this.toggleForm}>
							<i class="fa-light fa-pen"></i>
						</button>
						<button onClick={this.handleRemove}>
							<i class="fa-duotone fa-trash"></i>
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
