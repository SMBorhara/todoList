import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.createTask = this.createTask.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);
	}

	remove(id) {
		this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
	}

	update(id, updatedTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			} else {
				return todo;
			}
		});
		this.setState({ todos: updatedTodos });
	}

	createTask(task) {
		this.setState({ todos: [...this.state.todos, task] });
	}

	toggleComplete(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		});
		this.setState({ todos: updatedTodos });
	}

	render() {
		const todoList = this.state.todos.map((todo) => (
			<Todo
				key={todo.id}
				id={todo.id}
				task={todo.task}
				remove={this.remove}
				update={this.update}
				completed={todo.completed}
				toggle={this.toggleComplete}
			/>
		));
		return (
			<div className="TodoList">
				<h1>
					Your Todo List! <span>A Simple React Todo List App.</span>{' '}
				</h1>
				<ul>{todoList}</ul>
				<NewTodoForm createTask={this.createTask} />
				
			</div>
		);
	}
}

export default TodoList;
