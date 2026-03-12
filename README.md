# Astro Fullstack Template

Plantilla fullstack para proyectos web con **Astro**, **React**, **TailwindCSS** y **shadcn/ui**. Incluye autenticación SSO con Keycloak, base de datos PostgreSQL con Drizzle ORM, y despliegue con Docker.

## Stack tecnológico

| Categoría | Tecnología |
|-----------|------------|
| Framework | [Astro](https://astro.build) 5 + [React](https://react.dev) 19 |
| Estilos | [TailwindCSS](https://tailwindcss.com) 4 |
| UI | [shadcn/ui](https://ui.shadcn.com) (Radix UI, Lucide) |
| Autenticación | [Better Auth](https://better-auth.com) + SSO Keycloak |
| Base de datos | [PostgreSQL](https://postgresql.org) + [Drizzle ORM](https://orm.drizzle.team) |
| Runtime | [Bun](https://bun.sh) |
| Despliegue | Docker + Nginx |

## Características

- **SSR** con Astro en modo servidor (`output: server`)
- **Autenticación** con Better Auth y OAuth genérico (Keycloak)
- **Formularios** con React Hook Form + Zod
- **Componentes UI** con shadcn/ui (Button, Card, Input, Label, Form)
- **Base de datos** con Drizzle y migraciones
- **Docker** multi-stage con Nginx como gateway
- **Husky** + lint-staged para formateo automático

## Requisitos previos

- [Bun](https://bun.sh) (o Node.js 18+)
- PostgreSQL 16 (o usar Docker Compose)
- Cuenta/configuración Keycloak para SSO

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd astro-fullstack-template

# Instalar dependencias
bun install

# Copiar variables de entorno
cp .env.example .env
```

## Variables de entorno

Edita `.env` con tus valores:

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | URL de conexión PostgreSQL |
| `SSO_CLIENT_ID` | Client ID de Keycloak |
| `SSO_CLIENT_SECRET` | Client Secret de Keycloak |
| `SSO_DISCOVERY_URL` | URL de discovery de Keycloak |
| `BETTER_AUTH_URL` | URL base de la app (ej: `http://localhost:4321`) |

## Desarrollo

```bash
# Servidor de desarrollo
bun run dev

# Build de producción
bun run build

# Vista previa del build
bun run preview
```

## Docker

```bash
# Levantar con Docker Compose (app + PostgreSQL)
docker compose up -d

# La app estará en http://localhost:4321
```

## Estructura del proyecto

```
src/
├── components/
│   ├── features/     # Componentes por feature (login, etc.)
│   └── ui/           # Componentes shadcn/ui
├── layouts/
├── lib/              # Auth, DB, utils
├── models/           # Esquemas Drizzle
├── pages/
│   ├── api/          # API routes (auth)
│   ├── dashboard/
│   ├── login/
│   └── index.astro
└── styles/
drizzle/              # Migraciones SQL
gateway/               # Config Nginx
```

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `bun run dev` | Servidor de desarrollo |
| `bun run build` | Build de producción |
| `bun run preview` | Preview del build |
| `bun run format` | Formatear con Prettier |

## Migraciones de base de datos

```bash
# Generar migración
bunx drizzle-kit generate

# Ejecutar migraciones (en tu flujo de deploy o manualmente)
bunx drizzle-kit migrate
```

## Licencia

MIT
