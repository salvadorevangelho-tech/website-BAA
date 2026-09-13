# Building Above Average

Next.js 14 (App Router) site for Building Above Average, styled with Tailwind CSS and built to
deploy on Vercel.

## Stack

- Next.js 14, App Router, TypeScript
- Tailwind CSS
- Fonts: Playfair Display (headings), Caveat (handwritten accents), Inter (body) — loaded via
  `next/font/google`
- Design tokens: cream `#F6F2E9`, charcoal `#1E1E1C`, charcoal soft `#262622`, lime `#CFF43A`,
  lime dark `#8FAE1F` (see `tailwind.config.ts` and `app/globals.css`)

## Pages

| Route                    | Purpose                                             |
| ------------------------- | ---------------------------------------------------- |
| `/`                       | Homepage, recreated from the approved landing page  |
| `/about`                  | About Salvador Evangelho                            |
| `/newsletter`             | Newsletter signup + archive of past editions        |
| `/planner`                | Weekly Planner (free)                               |
| `/time-stack`             | The Time Stack ($29, currently building, waitlist)  |
| `/life-os`                | Life OS ($5.99/mo, currently building, waitlist)     |
| `/privacy-policy`         | Privacy policy                                      |
| `/terms-and-conditions`   | Terms and conditions                                |

`Navbar` and `Footer` (in `components/`) are shared across every page.

## Forms

All newsletter and lead magnet forms (`components/NewsletterForm.tsx`) POST the subscriber's
email to:

```
https://building-above-average.lemonsqueezy.com/email-subscribe/external
```

with the field name `email`, opened in a new tab, matching the original landing page's
behavior. No API keys or server-side code are required for this.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

- Newsletter archive editions: `app/newsletter/page.tsx` (`editions` array) — add a new entry
  each time an edition goes out.
- Site-wide links (Lemon Squeezy checkout URLs, LinkedIn, Instagram, contact email):
  `lib/constants.ts`.
- Logo and favicon: `public/images/logo.png` and `app/icon.png`.
- About page headshot: `public/images/headshot.png`.

## Deploying to Vercel with a custom domain (domain is on Cloudflare)

1. Push this project to your GitHub repository.
2. In Vercel, click **Add New → Project**, import the repository. Vercel auto-detects Next.js;
   the included `vercel.json` pins the build/install commands explicitly.
3. Deploy. Vercel gives you a `*.vercel.app` URL immediately.
4. To connect **buildingaboveaverage.com** while its DNS lives on Cloudflare:
   - In the Vercel project, go to **Settings → Domains** and add the domain. Vercel shows the
     records to add (an **A record** for the apex domain, a **CNAME** pointing to
     `cname.vercel-dns.com` for `www`).
   - Add those exact records in the Cloudflare DNS dashboard for the zone.
   - Important: set each of those records' proxy status to **DNS only** (grey cloud, not
     orange) while Vercel is issuing the SSL certificate and verifying the domain. Cloudflare's
     proxy (orange cloud) in front of Vercel can block domain verification and certificate
     issuance. Once Vercel shows the domain as verified with a valid certificate, you can
     switch it back to Proxied if you want Cloudflare's CDN/WAF in front of the site — just
     re-verify it still resolves correctly after switching.
   - Wait for DNS to propagate (usually minutes on Cloudflare, sometimes longer).
   - Optionally set your apex or `www` domain as the primary domain and redirect the other to
     it, from the same Domains screen.
5. Update `SITE_URL` in `lib/constants.ts` if the final domain differs from
   `https://buildingaboveaverage.com` (it feeds page metadata, Open Graph tags, and the
   sitemap).

## Analytics

Vercel Analytics (`@vercel/analytics`) is wired into `app/layout.tsx` already. It activates
automatically the moment this project is deployed on Vercel — no environment variables needed.
Enable it for the project under the **Analytics** tab in the Vercel dashboard if it doesn't
show data within a day of traffic.

## Notes

- `app/robots.ts` and `app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml` automatically
  from the routes above.
- Legal page dates are set to this project's build date — update them if you materially change
  either policy later.
- The Time Stack and Life OS are both pre-launch: every CTA on `/time-stack` and `/life-os`
  (and the matching cards on the homepage) collects an email via the waitlist form rather than
  linking to a live Lemon Squeezy checkout. `LEMON_SQUEEZY_TIME_STACK_CHECKOUT` and
  `LEMON_SQUEEZY_LIFEOS_CHECKOUT` are still defined in `lib/constants.ts` for when those
  products actually go live — swap the relevant CTA's `href` back to the checkout URL (and drop
  the `NewsletterForm` in favor of an `<a>`) once a real product exists in Lemon Squeezy.
