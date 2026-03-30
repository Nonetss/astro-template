import { authClient } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface Props {
  name: string;
  email: string;
}

export function NavUser({ name, email }: Props) {
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.assign('/login');
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-end">
        <span className="text-foreground text-xs leading-none font-medium">
          {name}
        </span>
        <span className="text-muted-foreground mt-0.5 text-xs leading-none">
          {email}
        </span>
      </div>
      <Button
        variant="ghost"
        onClick={handleLogout}
        className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors"
      >
        <LogOut size={16} />
      </Button>
    </div>
  );
}
