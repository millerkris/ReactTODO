import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders correct content on the home page', () => {
  render(<App />);

  // Проверяем заголовок
  const headerElement = screen.getByText("To Do List");
  expect(headerElement).toBeDefined();

  // Проверяем количество кнопок и их содержимое
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(9); // Предполагаем, что должно быть 9 кнопок

  // Проверяем каждую кнопку на наличие
  buttons.forEach(button => {
    expect(button).toBeDefined();
  });

  // Проверяем количество и содержимое полей ввода
  const inputFields = screen.getAllByRole('textbox');
  expect(inputFields.length).toBe(1); // Предполагаем, что должно быть 1 поле ввода
  expect(screen.getByPlaceholderText('Название...')).toBeDefined();

  // Проверяем отображение всех элементов на домашней странице
  expect(screen.getByText('Элемент 1')).toBeDefined();
  expect(screen.getByText('Элемент 2')).toBeDefined();
  expect(screen.getByText('Элемент 3')).toBeDefined();
});