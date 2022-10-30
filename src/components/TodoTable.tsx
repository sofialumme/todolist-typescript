import React from 'react';
import { Todo } from './interfaces';

interface TodoTableProps {
    todos: Array<Todo>,
    deleteTodo: (index: number) => void
}

function TodoTable({ todos, deleteTodo }: TodoTableProps) {
    const itemRows = todos.map((todo, index) =>
        <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td>{todo.priority}</td>
            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
        </tr>
    );

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th></th>
                    </tr>
                    {itemRows}
                </tbody>
            </table>
        </div>
    );
};

export default TodoTable;