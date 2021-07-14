import useSWR from 'swr';
import API from '../api';

export default function useUser({ id } = {}) {
  const { data, error } = useSWR(id ? `user-${id}` : null, () =>
    API.getUser({ id })
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
}
