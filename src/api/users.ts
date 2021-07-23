import http from '../utils/http';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Id, User, UserParams } from './types'

function formatUser(user: User): User {
  //const dateCreatedAt = formatRelative(new Date(user.createdAt), new Date());
  const dateCreatedAt = `${format(new Date(user.createdAt), 'MMMM', {
    locale: es,
  })} de ${format(new Date(user.createdAt), 'yyyy')}`;

  return {
    ...user,
    id: user._id,
    dateCreatedAt,
  };
}

export async function login({ username = '', password = '' }: { username: string, password: string }) {
  const response = await http.post(`/users/login`, {
    username,
    password,
  });
  const { data, message } = response.data;

  if (message === 'ok') {
    return Promise.resolve(data);
  } else {
    return Promise.reject(message);
  }
}

export async function getUser({ id }: Id) {
  const response = await http.get(`/users/${id}`);
  const { data } = response.data;
  return formatUser(data);
}

export async function updateUser({
  id,
  name,
  username,
  email,
  password,
  passwordConfirmation,
}: UserParams & Id) {
  return await http.put(`/users/${id}`, {
    name,
    username,
    email,
    password,
    passwordConfirmation,
  });
}

export async function createUser({
  name,
  username,
  email,
  password,
  passwordConfirmation,
}: UserParams) {
  const response = await http.post(`/users`, {
    name,
    username,
    email,
    password,
    passwordConfirmation,
  });
  const { data } = response.data;
  return formatUser(data);
}
