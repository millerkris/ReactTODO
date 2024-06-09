import React from 'react';
import ListItem from './ListItem';

interface TodoListProps {
    items: {
        id: string;
        text: string;
        date: string;
        isChecked: boolean;
    }[];
    ToggleChecked: (itemId: string) => void;
    DeleteListItem: (itemId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, ToggleChecked, DeleteListItem }) => {
    return (
        <div>
            <ul>
            {items.map(item => (
    <ListItem 
        key={item.id} 
        item={item} 
        toggleChecked={() => ToggleChecked(item.id)} 
        deleteListItem={() => DeleteListItem(item.id)} 
    />
))}
            </ul>
        </div>
    );
    
};

export default TodoList;