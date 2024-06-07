import React from 'react';

interface ListItemProps {
    item: {
        id: string;
        text: string;
        date: string;
        isChecked: boolean;
    };
    toggleChecked: (itemId: string) => void;
    deleteListItem: (itemId: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, toggleChecked, deleteListItem }) => {
    const handleToggleChecked = () => {
        toggleChecked(item.id);
    };

    const handleDeleteItem = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent the event from bubbling up to the checkbox
        deleteListItem(item.id);
    };

    return (
        <li className={item.isChecked ? 'checked' : ''} onClick={handleToggleChecked}>
            {item.text} <br />
            <span className="date">{item.date}</span>
            <span className="close" onClick={handleDeleteItem}>&times;</span>
        </li>
    );
};

export default ListItem;