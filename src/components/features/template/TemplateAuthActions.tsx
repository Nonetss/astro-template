import { Button } from '@/components/ui/button';
import { ButtonLogOut } from '@/components/features/login/buttonLogOut';

interface TemplateAuthActionsProps {
  isAuthenticated: boolean;
}

export const TemplateAuthActions = ({
  isAuthenticated,
}: TemplateAuthActionsProps) => {
  return (
    <div className="mt-10 flex w-full justify-center">
      {isAuthenticated ? (
        <ButtonLogOut client:only="react" />
      ) : (
        <Button asChild className="w-full max-w-xs rounded-lg sm:max-w-sm">
          <a href="/login" className="w-full">
            Iniciar sesión
          </a>
        </Button>
      )}
    </div>
  );
};
