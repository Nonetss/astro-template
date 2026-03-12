import { api } from '@/lib/api';
import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';

export const Prueba = () => {
  const [token, setToken] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await authClient.token();
      const jwtToken = data?.token;
      setToken(jwtToken);

      if (!jwtToken) return;

      const response = await api.get('/api/v0/user/me');
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <h1>Prueba</h1>
      <p>{token}</p>
      <p>{user?.message ?? JSON.stringify(user)}</p>
    </div>
  );
};
