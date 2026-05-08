import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

export const ThemeToggle = () => {
	const toggle = (e: React.MouseEvent) => {
		const isDark = document.documentElement.classList.contains("dark");
		const next = !isDark;

		const apply = () => {
			document.documentElement.classList.toggle("dark", next);
			localStorage.setItem("theme", next ? "dark" : "light");
		};

		if (!document.startViewTransition) {
			flushSync(apply);
			return;
		}

		const x = e.clientX;
		const y = e.clientY;
		const endRadius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y),
		);

		const transition = document.startViewTransition(() => flushSync(apply));

		transition.ready.then(() => {
			document.documentElement.animate(
				{
					clipPath: [
						`circle(0px at ${x}px ${y}px)`,
						`circle(${endRadius}px at ${x}px ${y}px)`,
					],
				},
				{
					duration: 450,
					easing: "ease-in-out",
					pseudoElement: "::view-transition-new(root)",
				},
			);
		});
	};

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label="Cambiar tema"
			className="border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground flex h-9 w-9 items-center justify-center border transition-colors"
		>
			<Sun size={16} className="hidden dark:block" />
			<Moon size={16} className="block dark:hidden" />
		</button>
	);
};
