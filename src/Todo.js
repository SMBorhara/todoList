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
				<div>
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
				<div>
					<button onClick={this.toggleForm}>Edit</button>
					<button onClick={this.handleRemove}>Delete</button>
					<li
						className={this.props.completed ? 'completed' : ''}
						onClick={this.handleToggle}
					>
						{this.props.task}{' '}
					</li>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
