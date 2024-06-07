import './style.2.0.css';
import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import  ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';


type Item = {
    id: string;
    text: string;
    date: string;
    isChecked: boolean;
}

function App() {
    const [items, setItems] = useState<Item[]>([
        { id: uuidv4(), text: 'Элемент 1', date: '11.1.2024', isChecked: false },
        { id: uuidv4(), text: 'Элемент 2', date: '10.1.2024', isChecked: false },
        { id: uuidv4(), text: 'Элемент 3', date: '9.1.2024', isChecked: false }
    ]);

    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    useEffect(() => {
        setFilteredItems(items);
    }, [items]);

    const addListItem = (text: string) => {
        if (!text.trim()) {
            alert('Введите текст элемента!');
            return;
        }

        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const currentDateStr = `${day}.${month}.${year}`;

        const newItem: Item = {
            id: uuidv4(),
            text: text,
            date: currentDateStr,
            isChecked: false
        };

        setItems([...items, newItem]);
        filterTasks('all');
    };

    const toggleChecked = (itemId: string) => {
        const updatedItems = items.map((item) =>
            item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
        );

        setItems(updatedItems);
        filterTasks('all');
    };

    const deleteListItem = (itemId: string) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);

        const updatedFilteredItems = filteredItems.filter(item => item.id !== itemId);
        setFilteredItems(updatedFilteredItems);
    };

    const clearList = () => {
        setItems([]);
        setFilteredItems([]);
    };

    const sortItemsByName = (reverse: boolean) => {
        const sortedItems = [...items].sort((a, b) =>
            reverse ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
        );

        setItems(sortedItems);
        filterTasks('all');
    };

    const sortItemsByDate = (reverse: boolean) => {
        const sortedItems = [...items].sort((a, b) =>
            reverse ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setItems(sortedItems);
        filterTasks('all');
    };

    const filterTasks = (status: 'all' | 'done' | 'undone') => {
        let filteredItems: Item[] = [];
    
        if (status === 'done') {
            filteredItems = items.filter((item) => item.isChecked);
        } else if (status === 'undone') {
            filteredItems = items.filter((item) => !item.isChecked);
        } else {
            filteredItems = items; // Показать все элементы
        }
    
        setFilteredItems(filteredItems);
    };

    return (
        <div>
            <Header onAddItem={addListItem} onClearList={clearList} />
            <TodoList items={filteredItems} ToggleChecked={toggleChecked} DeleteListItem={deleteListItem} />
            <FilterButtons onFilterTasks={filterTasks} onSortByName={sortItemsByName} onSortByDate={sortItemsByDate} />
        </div>
    );
}

export default App;