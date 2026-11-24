# How to update the website

## Where the text lives

All text is in the `content/` folder. You do not need to touch the `components/` or `app/` folders.

| To change                                  | Edit this file                               |
| ------------------------------------------ | -------------------------------------------- |
| Phone, email, address, hours, social links | `content/school.ts`                          |
| Events and news                            | `content/events.ts`                          |
| Home page text                             | `content/home.ts`                            |
| About page text                            | `content/about.ts`, `content/about-extra.ts` |
| Admissions details, fees, FAQ              | `content/admissions-page.ts`                 |
| Academics (sections, learning domains)     | `content/programs.ts`                        |
| Pre-Primary text                           | `content/pre-primary.ts`                     |
| Branches                                   | `content/branches.ts`                        |
| Principal and staff                        | `content/faculty.ts`                         |
| Gallery photos                             | `content/gallery-page.ts`                    |

## How to change one event

1. Open `content/events.ts`.
2. Copy an existing event block, paste it below, and change the title, date and text. Give it a unique `id`.
3. Save the file.

## How to add a photo

1. Put the photo in `photos-original/`.
2. Run `node scripts/optimize-folder.mjs photos-original/<folder> public/images/gallery`.
3. Add a line for it in `content/gallery-page.ts`.

## How to publish a change

1. Run `npm run build`. It must finish with no errors.
2. Commit and push to GitHub: `git add .`, `git commit -m "Update content"`, `git push`.
3. The site rebuilds and goes live in about two minutes.

## Contacts

Forms are sent by Web3Forms to the email set in the Web3Forms account. The key is in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`.
