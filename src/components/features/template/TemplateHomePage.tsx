import type { userInfo } from '@/lib/auth-client';
import { TemplateWelcomeHero } from './TemplateWelcomeHero';
import { TemplateAuthActions } from './TemplateAuthActions';
import { TemplateUserDataFromBetterAuth } from './TemplateUserDataFromBetterAuth';
import { TemplateUserDataFromFastAPI } from './TemplateUserDataFromFastAPI';

interface TemplateHomePageProps {
  user: userInfo | null;
}

export const TemplateHomePage = ({ user }: TemplateHomePageProps) => {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
      <main className="flex w-full max-w-4xl flex-col items-center gap-12 text-center">
        <div>
          <TemplateWelcomeHero userName={user?.name} />
          <TemplateAuthActions isAuthenticated={!!user} />
        </div>

        {user && (
          <div className="grid w-full grid-cols-2 gap-8">
            <TemplateUserDataFromBetterAuth user={user} />
            <TemplateUserDataFromFastAPI />
          </div>
        )}
      </main>
    </div>
  );
};
