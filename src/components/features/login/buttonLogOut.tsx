import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth";

export const ButtonLogOut = () => {
	const handleLogout = async () => {
		await authClient.signOut();
		window.location.assign("/login");
	};
	return (
		<Button className="w-full rounded-none" onClick={handleLogout}>
			Logout
		</Button>
	);
};
