# QA Checklist

| Check                      | Status                       | Evidence / note                                                                                        |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| Install                    | PASS                         | `npm install` completed                                                                                |
| Astro check                | PASS                         | 0 errors, warnings, or hints                                                                           |
| ESLint                     | PASS                         | `npm run lint`                                                                                         |
| Prettier                   | PASS                         | `npm run format:check`                                                                                 |
| Unit tests                 | PASS                         | 2 mailto tests                                                                                         |
| Production build           | PASS                         | 2 static pages plus sitemap                                                                            |
| Local preview              | PASS                         | HTTP 200 at `127.0.0.1:4321`                                                                           |
| Console/hydration          | PASS                         | No browser warnings/errors; island state updated                                                       |
| Solution Finder            | PASS                         | Dashboard selection updated content and encoded mailto                                                 |
| Keyboard focus sequence    | REQUIRES MANUAL VERIFICATION | Native radio semantics and focus CSS are present; automated Tab/Arrow focus movement was inconclusive  |
| No-JS fallback             | PASS                         | All six directions exist in built `<noscript>` HTML                                                    |
| Mobile layout              | PASS                         | 390×844: no horizontal overflow; next section visible                                                  |
| Desktop layout             | PASS                         | No horizontal overflow after games CTA fix                                                             |
| Semantic/metadata          | PASS                         | One H1, canonical, description, JSON-LD, landmarks                                                     |
| Third-party logo exclusion | PASS                         | Microsoft, ThinkPad, GOTO, GitLab, and unidentified logo-strip assets remain outside production output |
| Sitemap/robots             | PASS                         | Generated sitemap and static robots present                                                            |
| Dependency audit           | PASS                         | 0 known vulnerabilities after fix                                                                      |
| Netlify config             | PASS                         | Offline deploy-preview dry run parsed the expected build flow                                          |
| Lighthouse                 | NOT AVAILABLE                | No Lighthouse executable/plugin used                                                                   |
| Screen reader              | REQUIRES MANUAL VERIFICATION | Semantic DOM reviewed; assistive technology not run                                                    |
| Real mobile device         | REQUIRES MANUAL VERIFICATION | Browser viewport only                                                                                  |
| Netlify response headers   | REQUIRES MANUAL VERIFICATION | Requires Deploy Preview                                                                                |
