import type { userInfo } from '@/lib/auth-client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TemplateUserDataFromBetterAuthProps {
  user: userInfo | null;
}

/**
 * Datos del usuario desde la sesión de Better Auth.
 * Provienen del middleware (auth.api.getSession) y se pasan via Astro.locals.
 */
export const TemplateUserDataFromBetterAuth = ({
  user,
}: TemplateUserDataFromBetterAuthProps) => {
  if (!user) return null;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Datos de sesión (Better Auth)</CardTitle>
        <CardDescription>
          Usuario obtenido del middleware. Verifica la sesión con cookies en el
          servidor.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <span className="text-muted-foreground">Nombre:</span>{' '}
          <span className="font-medium">{user.name}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Email:</span>{' '}
          <span className="font-medium">{user.email}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Usuario:</span>{' '}
          <span className="font-medium">{user.username}</span>
        </p>
        {user.groups?.length > 0 && (
          <p>
            <span className="text-muted-foreground">Grupos:</span>{' '}
            <span className="font-medium">{user.groups.join(', ')}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};
