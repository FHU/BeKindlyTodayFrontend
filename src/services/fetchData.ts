import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

/**
 * A fancy Fetch abstraction for DRY principles
 * @param endpoint The endpoint on the backend the fetch is ran against
 * @param method The method used in the request
 * @param data If a method requires body data, this is that data
 * @returns Returns are dynamic depending on method.
 */
export default async function fancyFetch(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: object
) {
  const inDev = import.meta.env.VITE_ENVIRONMENT === 'dev';

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const API_VERSION = '/api/v1';
  const url = BACKEND_URL + API_VERSION + endpoint;

  if (!inDev) {
    const { getToken } = useKindeAuth();
    try {
      const accessToken = await getToken();

      const res: any = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
          'Access-Control-Allow-Methods':
            'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      return await res.json();
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  } else {
    const res = await fetch(url, { method, body: JSON.stringify(data) });
    return await res.json();
  }
}
