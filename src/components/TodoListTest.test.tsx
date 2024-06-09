import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { within } from '@testing-library/react';

test('allows user to delete list items', () => {
  const mockItems = [
    { id: '1', text: 'Test Item 1', date: '12.06.2024', isChecked: false },
    { id: '2', text: 'Test Item 2', date: '11.06.2024', isChecked: true }
  ];

  let deletedItemId = '';

  const mockToggleChecked = jest.fn();
  const mockDeleteListItem = (itemId: string) => {
    deletedItemId = itemId;
  };

  render(<TodoList items={mockItems} ToggleChecked={mockToggleChecked} DeleteListItem={mockDeleteListItem} />);

  const listItems = screen.getAllByRole('listitem');
  for (const item of listItems) {
    const deleteButton = within(item).getByText('×'); // Assuming the delete button has the content '×'
    fireEvent.click(deleteButton);

    // Extract the ID of the deleted item
    const itemId = mockItems.find((mockItem) => mockItem.id === item.id)?.id;
    if (itemId) {
      expect(mockDeleteListItem).toHaveBeenCalledWith(itemId);
    }
  }

  expect(deletedItemId).toBe('1'); 
});





