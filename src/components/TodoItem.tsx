import React from 'react';
import  ListItem  from './ListItem';

interface TodoItemProps {
    todo: {
        id: string;
        text: string;
        date: string;
        isChecked: boolean;
    };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <h3>{todo.text}</h3>
            <p>Date: {todo.date}</p>
            <p>Checked: {todo.isChecked ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default TodoItem;