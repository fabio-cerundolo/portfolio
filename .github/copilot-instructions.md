# Repository instructions

## Commands

Use Bun for the project scripts and install from the committed lockfile:

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run lint
bun run test
bun run test:watch
```

Run one test file, or narrow it to a test name:

```sh
bun run test src/test/app-routing.test.tsx
bun run test src/test/app-routing.test.tsx -t "matches a page for /"
```

`bun run preview` serves the production build locally. For deployment, build first and deploy Firebase Hosting with `npx firebase-tools deploy --only hosting --project <firebase-project-id>`. Hosting serves `.output/public`; server routes and functions are not deployed.

## Architecture

- This is a React and TypeScript application built with TanStack Start. `src/routes/` uses file-based routing; `src/routes/__root.tsx` defines the document shell, shared query-client provider, and root error/not-found UI. `src/router.tsx` creates a fresh `QueryClient` for each router.
- `src/routeTree.gen.ts` is generated from route files. Add routes under `src/routes/` and let the TanStack Router plugin update the tree; do not edit the generated file.
- `src/start.ts` configures request middleware, including server-function CSRF protection and error handling. `src/server.ts` wraps the TanStack server entry and converts catastrophic SSR failures to the shared HTML error page in `src/lib/error-page.ts`; error capture/reporting helpers are in `src/lib/`.
- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`, which supplies the TanStack, React, Tailwind, path-alias, and Nitro plugins. It prerenders the site for static Firebase Hosting output. Extend the wrapper configuration rather than re-adding its plugins.
- The portfolio content is centralized in `src/lib/profile.ts` and rendered by the home route. The site styling uses Tailwind CSS v4, with theme tokens and terminal-style utilities in `src/styles.css`; shared Radix/shadcn UI primitives live in `src/components/ui/`.

## Repository-specific conventions

- Follow the route filename and URL conventions in `src/routes/README.md`. The root route is `__root.tsx` and must keep its `<Outlet />` so child routes render.
- Import source modules through the `@/` alias when appropriate; it resolves to `src/`.
- Tests live under `src/` as `*.test.*` or `*.spec.*` files and run in jsdom with `src/test/setup.ts`. The routing test matches routes without rendering, since rendering can depend on stylesheet loading and loaders may require server or network access.
- Preserve the terminal-themed visual language by reusing the CSS theme tokens and utilities instead of introducing unrelated styling conventions.
- This repository is connected to Lovable. Do not rewrite published history by force-pushing or rebasing, amending, or squashing published commits; commits pushed to the connected branch sync to Lovable.
