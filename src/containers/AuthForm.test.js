import { render, act, fireEvent } from '@testing-library/react';
import API from '../api';
import { StoreProvider } from '../store/Store';
import AuthForm from './AuthForm';

jest.mock('../api');

describe('Login', () => {
  test('display error for incorrect username and password', async () => {
    await act(async () => {
      const { findByText, findByPlaceholderText } = render(
        <StoreProvider>
          <AuthForm />
        </StoreProvider>
      );

      const username = await findByPlaceholderText(/username/);
      const password = await findByPlaceholderText(/password/);
      const submit = await findByPlaceholderText(/submit/);

      API.login.mockRejectedValue('Invalid data');

      fireEvent.change(username, {
        target: {
          value: 'Gustavo',
        },
      });
      fireEvent.change(password, {
        target: {
          value: '123456',
        },
      });
      fireEvent.click(submit);

      expect(await findByText('Incorrect username or password')).toBeTruthy();
    });
  });
});
