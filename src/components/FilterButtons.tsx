import React from 'react';

interface FilterButtonsProps {
    onFilterTasks: (status: 'all' | 'done' | 'undone') => void;
    onSortByName: (reverse: boolean) => void;
    onSortByDate: (reverse: boolean) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterTasks, onSortByName, onSortByDate }) => {
    return (
        <div className="filt">
            <button onClick={() => onFilterTasks('done')}>Сделано</button>
            <button onClick={() => onFilterTasks('undone')}>Не сделано</button>
            <button onClick={() => onFilterTasks('all')}>Все</button>
            <button onClick={() => onSortByName(true)}>А-Я ↑</button>
            <button onClick={() => onSortByName(false)}>А-Я ↓</button>
            <button onClick={() => onSortByDate(true)}>Дата ↑</button>
            <button onClick={() => onSortByDate(false)}>Дата ↓</button>
        </div>
    );
};

export default FilterButtons;