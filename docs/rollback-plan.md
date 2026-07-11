# Rollback Plan

Do not rewrite history or use `git reset --hard`.

1. Preserve current migration work in a normal commit or patch.
2. Create a follow-up rollback commit that restores files from `archive/angular-working-tree/` to their original root locations.
3. Restore the archived `package.json`, lockfile, TypeScript configs, Angular config, README, PostCSS config, and `src/` tree.
4. Remove Astro-only runtime files in that rollback commit, run `npm install`, `npm run build`, and browser smoke tests.
5. Restore the previous Netlify build/publish values only after a successful Angular build and Deploy Preview.

The archive represents the working tree captured immediately before migration, including user modifications, rather than only Git `HEAD`.
