interface TemplateWelcomeHeroProps {
  userName?: string | null;
}

export const TemplateWelcomeHero = ({ userName }: TemplateWelcomeHeroProps) => {
  const displayName = userName ?? 'Visitante';
  return (
    <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl">
      Hola, {displayName}
    </h1>
  );
};
