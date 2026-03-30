import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function TabsDemo() {
  return (
    <Tabs defaultValue="cuenta" className="w-full">
      <TabsList className="rounded-none">
        <TabsTrigger value="cuenta" className="rounded-none">
          Cuenta
        </TabsTrigger>
        <TabsTrigger value="cursos" className="rounded-none">
          Cursos
        </TabsTrigger>
        <TabsTrigger value="notificaciones" className="rounded-none">
          Notificaciones
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cuenta" className="mt-4 space-y-2">
        <p className="text-foreground text-sm font-medium">Datos personales</p>
        <p className="text-muted-foreground text-sm">
          Nombre, correo y preferencias de idioma de tu cuenta.
        </p>
      </TabsContent>
      <TabsContent value="cursos" className="mt-4 space-y-2">
        <p className="text-foreground text-sm font-medium">Mis cursos</p>
        <p className="text-muted-foreground text-sm">
          Cursos activos, archivados y próximos del ciclo lectivo.
        </p>
      </TabsContent>
      <TabsContent value="notificaciones" className="mt-4 space-y-2">
        <p className="text-foreground text-sm font-medium">
          Preferencias de notificación
        </p>
        <p className="text-muted-foreground text-sm">
          Configurá qué eventos generan alertas por correo o en la plataforma.
        </p>
      </TabsContent>
    </Tabs>
  );
}
