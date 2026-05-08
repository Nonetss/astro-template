import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth";

const loginSchema = z.object({
	email: z.string(),
	password: z.string(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage = () => {
	const form = useForm<LoginFormValues>({
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = async (data: LoginFormValues) => {
		await authClient.signIn
			.email({ email: data.email, password: data.password })
			.then(() => window.location.assign("/"));
	};

	const handleGoogleLogin = async () => {
		try {
			await authClient.signIn.social({ provider: "google", callbackURL: "/" });
		} catch (error) {
			console.error("Error en login con Google:", error);
		}
	};

	const handleSSOLogin = async () => {
		try {
			await authClient.signIn.oauth2({
				providerId: "keycloak",
				callbackURL: "/",
			});
		} catch (error) {
			console.error("Error en login con SSO:", error);
		}
	};

	return (
		<div className="w-full max-w-sm">
			{/* Header */}
			<div className="mb-8">
				<h1
					className="text-foreground text-2xl font-bold tracking-tight"
					style={{ fontFamily: "var(--font-bricolage, serif)" }}
				>
					Iniciar sesión
				</h1>
				<p className="text-muted-foreground mt-1.5 text-sm">
					Accede a tu cuenta para continuar
				</p>
			</div>

			{/* Form */}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="email"
										placeholder="tu@email.com"
										className="rounded-none"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="password"
										placeholder="••••••••"
										className="rounded-none"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="mt-1 w-full rounded-none">
						Entrar
					</Button>
				</form>
			</Form>

			{/* Divider */}
			<div className="my-6 flex items-center gap-3">
				<div className="bg-border h-px flex-1" />
				<span className="text-muted-foreground text-xs">o continuar con</span>
				<div className="bg-border h-px flex-1" />
			</div>

			{/* Social */}
			<div className="space-y-2">
				<Button
					variant="outline"
					className="w-full rounded-none"
					onClick={handleGoogleLogin}
				>
					<img src="/icons/google.svg" alt="" className="h-4 w-4" />
					Google
				</Button>
				<Button
					variant="outline"
					className="w-full rounded-none"
					onClick={handleSSOLogin}
				>
					SSO
				</Button>
			</div>
		</div>
	);
};
