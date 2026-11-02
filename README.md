# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Firebase Hosting

The production build prerenders the site into `.output/public`, the directory
configured for Firebase Hosting. This project uses static hosting; server-side
routes and server functions are not deployed.

1. Create a Firebase project and sign in to Firebase CLI:

   ```sh
   npx firebase-tools login
   ```

2. Install dependencies and build the site:

   ```sh
   bun install --frozen-lockfile
   bun run build
   ```

3. Deploy Hosting, replacing the placeholder with your Firebase project ID:

   ```sh
   npx firebase-tools deploy --only hosting --project <firebase-project-id>
   ```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
