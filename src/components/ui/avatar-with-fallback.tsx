import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Props {
  initials: string;
  className?: string;
}

export function AvatarWithFallback({ initials, className }: Props) {
  return (
    <Avatar className={cn('rounded-none', className)}>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
