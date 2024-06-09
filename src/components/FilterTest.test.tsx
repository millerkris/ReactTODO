import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from './FilterButtons';

test('allows user to filter and sort tasks', () => {
  const mockOnFilterTasks = jest.fn();
  const mockOnSortByName = jest.fn();
  const mockOnSortByDate = jest.fn();

  render(
      <FilterButtons
          onFilterTasks={mockOnFilterTasks}
          onSortByName={mockOnSortByName}
          onSortByDate={mockOnSortByDate}
      />
  );

  const doneButtons = screen.queryAllByRole('button', { name: /Сделано/i });
  fireEvent.click(doneButtons[0]); // Assuming you want to click the first button
  expect(mockOnFilterTasks).toHaveBeenCalledWith('done');

  const sortByNameAscButton = screen.getByRole('button', { name: /А-Я ↑/i });
  fireEvent.click(sortByNameAscButton);
  expect(mockOnSortByName).toHaveBeenCalledWith(true);

  const sortByDateDescButton = screen.getByRole('button', { name: /Дата ↓/i });
  fireEvent.click(sortByDateDescButton);
  expect(mockOnSortByDate).toHaveBeenCalledWith(false);
});