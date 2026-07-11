# Asset Inventory and Provenance

All 27 source assets are preserved unchanged under `archive/angular-working-tree/src/assets/`. Assets that were part of the pre-Astro visual source of truth are reused selectively in `public/assets/`: both existing backgrounds, Kantara and Sanlog compositions, and four existing UX/value illustrations. Unused and third-party-logo assets remain excluded from deploy output rather than deleted.

| Asset                            | Type / dimensions | Approximate content                   | Existing use                      | Decision          | Approval                                                             |
| -------------------------------- | ----------------- | ------------------------------------- | --------------------------------- | ----------------- | -------------------------------------------------------------------- |
| `background.png`                 | PNG, 1512×770     | Jakarta night cityscape               | Angular hero/project compositions | REUSE             | Existing source visual; provenance TODO                              |
| `Background-2.png`               | PNG, 1919×1223    | Abstract dark tosca gradient          | Legacy background                 | REUSE             | Low visible claim risk; provenance still TODO                        |
| `competitive_research.svg`       | SVG, 46×46        | Research icon                         | Legacy feature content            | REUSE             | Confirm original design source                                       |
| `computer-active.svg`            | SVG, 24×22        | Active desktop state                  | Legacy controls                   | ARCHIVE           | None visible                                                         |
| `computer-deactive.svg`          | SVG, 24×24        | Inactive desktop state                | Legacy controls                   | ARCHIVE           | None visible                                                         |
| `Device-Macbook-Pro.png`         | PNG, 663×418      | Kantara/DSM interface mockup          | Legacy project visual             | REQUIRES APPROVAL | Possible NDA/client-sensitive                                        |
| `helpfull_animation.svg`         | SVG, 32×32        | Helpful/motion icon                   | Legacy value card                 | REUSE             | Confirm original design source                                       |
| `image_20.png`                   | PNG, 267×51       | Microsoft logo                        | Legacy trust/logo strip           | REQUIRES APPROVAL | Do not publish as client/partner                                     |
| `image_21.png`                   | PNG, 138×51       | ThinkPad logo                         | Legacy trust/logo strip           | REQUIRES APPROVAL | Do not publish as client/partner                                     |
| `image_22.png`                   | PNG, 120×51       | GOTO logo                             | Legacy trust/logo strip           | REQUIRES APPROVAL | Do not publish as client/partner                                     |
| `image_23.png`                   | PNG, 200×51       | GitLab logo                           | Legacy trust/logo strip           | REQUIRES APPROVAL | Do not publish as client/partner                                     |
| `image_24.png`                   | PNG, 111×51       | Unidentified multicolor mark          | Legacy trust/logo strip           | REQUIRES APPROVAL | Identity and relationship unknown                                    |
| `intuitive.svg`                  | SVG, 32×32        | Intuitive value icon                  | Legacy value card                 | REUSE             | Existing source-of-truth illustration                                |
| `iphone-device.png`              | PNG, 270×559      | Empty phone device frame              | Legacy demo visual                | ARCHIVE           | Reusable after provenance review                                     |
| `iphone-showcase.png`            | PNG, 312×556      | Prime finance UI on phone             | Legacy demo visual                | REQUIRES APPROVAL | Product/design ownership unknown                                     |
| `item-dummy-1.png`               | PNG, 300×450      | Kantara/DSM composition               | Current Angular hero/work         | REUSE             | Existing source; final client approval TODO                          |
| `src/assets/hero/background.png` | PNG, 1774×887     | Dark tosca city/interface atmosphere  | Current Astro hero background     | REUSE             | User-supplied hero asset; moved losslessly from `src/background.png` |
| `src/assets/hero/frontimage.png` | PNG, 1536×1024    | Responsive product/device composition | Current Astro hero foreground     | REUSE             | User-supplied hero asset; moved losslessly from `src/frontimage.png` |
| `item-dummy-2.png`               | PNG, 300×450      | Microsoft-branded finance UI          | Legacy project visual             | REQUIRES APPROVAL | Third-party trademark/content                                        |
| `Photo-1.png`                    | PNG, 819×460      | Laptop with colored lighting          | Legacy content visual             | ARCHIVE           | Photography ownership unknown                                        |
| `Photo-2.png`                    | PNG, 244×156      | Technology photo                      | Legacy content visual             | ARCHIVE           | Photography ownership unknown                                        |
| `Photo-3.png`                    | PNG, 244×156      | Technology photo                      | Legacy content visual             | ARCHIVE           | Photography ownership unknown                                        |
| `Photo-4.png`                    | PNG, 244×156      | Technology photo                      | Legacy content visual             | ARCHIVE           | Photography ownership unknown                                        |
| `proffesional.svg`               | SVG, 33×32        | Professional value icon               | Legacy value card                 | REUSE             | Existing source-of-truth illustration                                |
| `sanlog-logistic.png`            | PNG, 300×450      | Santoso/Sanlog website composition    | Current Angular work              | REUSE             | Existing source; name/permission still TODO                          |
| `smartphone-active.svg`          | SVG, 24×24        | Active mobile state                   | Legacy controls                   | ARCHIVE           | None visible                                                         |
| `smartphone-deactive.svg`        | SVG, 24×24        | Inactive mobile state                 | Legacy controls                   | ARCHIVE           | None visible                                                         |
| `user_proven.svg`                | SVG, 33×32        | Proven/user value icon                | Legacy value card                 | REUSE             | Existing source-of-truth illustration                                |
| `user_understand.svg`            | SVG, 32×32        | Understanding/user icon               | Legacy value card                 | REUSE             | Existing source-of-truth illustration                                |

## Logo search result

No dedicated Intuise logo file was found by filename, SVG content, template reference, CSS background, current tracked history, or public assets. The production migration therefore uses a centralized temporary textual wordmark in `src/components/brand/BrandLogo.astro`. It is not an approved master logo and must be replaced when the brand authority file is supplied.

## Legacy route usage

`/legacy/` reuses only the two approved-for-reference backgrounds and four existing value icons already published under `public/assets/`. It does not publish archived third-party logos, placeholder testimonial portraits, Prime/Kantara device imagery, or photography with unclear ownership. The omitted visual regions use neutral CSS placeholders rather than duplicate assets.
