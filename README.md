# React Native starter

Minimal Expo + TypeScript app with file-based routing (Expo Router) and TanStack Query.

## Quick start

```bash
npm install
npm start
```

Use the Expo CLI prompt to open on Android, iOS, or web.

## Scripts

- `npm start` — start Expo dev server
- `npm run android` — open on Android
- `npm run ios` — open on iOS
- `npm run web` — open in a browser
- `npx tsc --noEmit` — type-check

## Structure

- `src/app/_layout.tsx` — root layout, query client provider
- `src/app/index.tsx` — home screen
- `src/app/posts.tsx` — example data-fetching screen
- `src/api/client.ts` — shared `fetch` wrapper
- `src/api/posts.ts` — example API calls
- `src/hooks/usePosts.ts` — example TanStack Query hook

Add a file under `src/app` to add a route. Replace the example posts API and screen with your own feature code.
