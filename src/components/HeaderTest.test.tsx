import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom'; // Import the testing library jest-dom extension

// Your test code
test('allows user to input data and submit', () => {
  const mockOnAddItem = jest.fn();
  const mockOnClearList = jest.fn();

  render(<Header onAddItem={mockOnAddItem} onClearList={mockOnClearList} />);

  const inputElement = screen.getByPlaceholderText('Название...'); // Updated placeholder text
  const createButton = screen.getByText('Создать');
  const clearButton = screen.getByText('Очистить все');

  expect(clearButton).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'Новая задача' } });
  fireEvent.click(createButton);

  expect(mockOnAddItem).toHaveBeenCalledWith('Новая задача');
  expect(inputElement).toHaveValue('');

  fireEvent.click(clearButton);

  expect(mockOnClearList).toHaveBeenCalled();
});