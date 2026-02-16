import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { navigate } from 'astro/virtual-modules/transitions-router.js';

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    await authClient.signIn
      .email({
        email: data.email,
        password: data.password,
      })
      .then(() => {
        navigate('/');
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
      });
    } catch (error) {
      console.error('Error en login con Google:', error);
    }
  };

  const handleSSOLogin = async () => {
    try {
      await authClient.signIn.oauth2({
        providerId: 'keycloak',
        callbackURL: '/',
      });
    } catch (error) {
      console.error('Error en login con SSO:', error);
    }
  };

  return (
    <div className="bg-background text-foreground flex min-h-screen w-full items-center justify-center px-4 font-sans">
      <Card className="w-full max-w-md rounded-none">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="mt-4 w-full rounded-none"
            onClick={handleSSOLogin}
          >
            <p>SSO</p>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
