import React from 'react';

interface HeaderProps {
    onAddItem: (text: string) => void;
    onClearList: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddItem, onClearList }) => {
    const handleAddItem = () => {
        const inputElement = document.getElementById('myInput') as HTMLInputElement;
        onAddItem(inputElement.value);
        inputElement.value = '';
    };

    return (
        <div className="header">
            <h2>To Do List</h2>
            <input type="text" id="myInput" placeholder="Название..." autoComplete="off" />
            <button onClick={handleAddItem}>Создать</button>
            <button onClick={onClearList}>Очистить все</button>
        </div>
    );
};

export default Header;