import React, { useState } from 'react';
import TodoTable from './TodoTable';
import { Todo } from './interfaces';

function Todolist() {
    const [todo, setTodo] = useState<Todo>({} as Todo);
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <div>
            <h1>Simple Todolist</h1>
            <h2>Add todo:</h2>
            <form onSubmit={addTodo}>
                <label>Description: </label>
                <input type="text" name="description" onChange={inputChanged} value={todo.description} />
                <label>Date: </label>
                <input type="text" name="date" onChange={inputChanged} value={todo.date} />
                <label>Priority: </label>
                <input type="text" name="priority" onChange={inputChanged} value={todo.priority} />
                <input type="submit" value="Add" />
            </form>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Todolist;