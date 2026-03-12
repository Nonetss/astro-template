import { api } from '@/lib/api';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FastAPIUser {
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  groups?: string[];
}

/**
 * Datos del usuario desde la API de FastAPI.
 * Se obtienen con JWT en el header Authorization. El backend verifica el token
 * con JWKS de Better Auth.
 */
export const TemplateUserDataFromFastAPI = () => {
  const [user, setUser] = useState<FastAPIUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get<FastAPIUser>('/api/v0/user/me');
        setUser(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Error al cargar');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Datos del usuario (FastAPI)</CardTitle>
          <CardDescription>Cargando...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive/50 w-full max-w-md">
        <CardHeader>
          <CardTitle>Datos del usuario (FastAPI)</CardTitle>
          <CardDescription className="text-destructive">
            {error}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Datos del usuario (FastAPI)</CardTitle>
        <CardDescription>
          Usuario obtenido del backend. El token JWT se envía en el header y se
          verifica con JWKS.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {user?.name && (
          <p>
            <span className="text-muted-foreground">Nombre:</span>{' '}
            <span className="font-medium">{user.name}</span>
          </p>
        )}
        {user?.email && (
          <p>
            <span className="text-muted-foreground">Email:</span>{' '}
            <span className="font-medium">{user.email}</span>
          </p>
        )}
        {user?.username && (
          <p>
            <span className="text-muted-foreground">Usuario:</span>{' '}
            <span className="font-medium">{user.username}</span>
          </p>
        )}
        {user?.groups && user.groups.length > 0 && (
          <p>
            <span className="text-muted-foreground">Grupos:</span>{' '}
            <span className="font-medium">{user.groups.join(', ')}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};
