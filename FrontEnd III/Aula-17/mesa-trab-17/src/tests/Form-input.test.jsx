import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('Test the Form sub-components', () => {
  test('It should expect a string value in the input when the event changes', () => {
    const { getByPlaceholderText } = render(<Form />);
    const input = getByPlaceholderText('Digite um valor');

    const expectedValue = 'Hello, World!';
    fireEvent.change(input, { target: { value: expectedValue } });

    expect(input.value).toBe(expectedValue);
  });

  test('It should not expect only letters or special chars in the input when the event changes', () => {
    const { getByPlaceholderText } = render(<Form />);
    const input = getByPlaceholderText('Enter a value');
  
    const invalidValue = 'ABC121';
    fireEvent.change(input, { target: { value: invalidValue } });
  
    expect(input.value).not.toMatch(/^\d+$/);
  });

  test('It should trigger the submit event when the submit button is clicked', () => {
    const submitForm = jest.fn();

    const { getByTestId } = render(<Form onSubmit={submitForm} />);

    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalled();
  });
});
