# KB Powersport — kbp-website-v2

Vue 3 SPA for the KB Powersport karting team. Deployed to GitHub Pages at [koleczek-bellespowersport.com](https://koleczek-bellespowersport.com).

---

## Setup

```bash
npm install
```

---

## Development

```bash
npm run serve
```

Starts a local dev server at `http://localhost:8080` with hot reload.

---

## Deploy to Production

```bash
npm run deploy
```

This single command:
1. Builds the app (`vue-cli-service build` → `dist/`)
2. Injects per-route OpenGraph/Twitter meta tags (`scripts/inject-meta.js`)
3. Pushes `dist/` to the `gh-pages` branch

Do not run `npm run build` separately before deploying — `npm run deploy` handles it.

---

## Project Structure

```
src/
  assets/          # Images and static files
  components/
    KBPTagline.vue # Shared header logo + tagline shown on every page
  views/
    HomePage.vue
    OurBlog.vue    # Blog index — list of posts
    OurStory.vue
    OurPictures.vue
    OurPictures2025.vue
    OurSponsors.vue
    DriverProfiles.vue
    blog/
      NmpRace2026Race2.vue   # /blog/2026/nmp-race-2
  router.js        # All routes + OpenGraph meta definitions
  main.js
  style.css        # Global CSS variables

public/
  og-nmp-race-2.jpg   # OG image for NMP Race 2 post (must be in public/ for known URL)

scripts/
  inject-meta.js   # Post-build script that writes per-route index.html with meta tags
```

---

## Color Scheme

Defined as CSS variables in `src/style.css`:

| Variable | Value | Usage |
|---|---|---|
| `--kb-cream` | `#f5efe6` | Page background |
| `--kb-black` | `#333333` | Text, headers |
| `--kb-red` | `#DC143C` | Accents, badges, highlights |

---

## Adding a Blog Post

### 1. Create the component

Add `src/views/blog/YourPost.vue`. Follow the pattern in `NmpRace2026Race2.vue`:
- `<Tagline />` at the top
- `.post-card` with dark header, hero images, session sections
- Sponsor sidebars (desktop) and mobile sponsor bar at the bottom
- `router-link to="/blog"` back link in the footer

### 2. Add the route

In `src/router.js`, import the component and add the route with full meta:

```js
import YourPost from './views/blog/YourPost.vue'

{
  path: '/blog/2026/your-post-slug',
  name: 'YourPost',
  component: YourPost,
  meta: {
    title: 'Post Title | KB Powersport',
    description: 'One or two sentence summary.',
    ogImage: 'https://koleczek-bellespowersport.com/og-your-post.jpg',
    ogType: 'article',
  }
}
```

### 3. Add the OG image

Copy the hero image to `public/` at the filename you used above:

```bash
cp src/assets/YourImage.jpg public/og-your-post.jpg
```

### 4. Register the meta injection

In `scripts/inject-meta.js`, add an entry to the `routes` array:

```js
{
  route: '/blog/2026/your-post-slug',
  title: 'Post Title | KB Powersport',
  description: 'One or two sentence summary.',
  image: 'https://koleczek-bellespowersport.com/og-your-post.jpg',
  type: 'article',
}
```

### 5. Add the card to the blog index

In `src/views/OurBlog.vue`, add a `<router-link>` card under the correct season heading following the existing pattern.

### 6. Deploy

```bash
npm run deploy
```

---

## Sponsors

The three current sponsors and their links:

| # | Sponsor | URL |
|---|---|---|
| 1 | RMS Kart and Performance | `https://www.facebook.com/profile.php?id=100076222208564` |
| 2 | Renderly | `https://renderly-consultants.com/` |
| 3 | Freedom Fridays | `https://freedom-fridays.vercel.app/` |

On blog post pages, sponsors appear as sticky sidebars on desktop (hidden below 1100px) and as a horizontal bar at the bottom on mobile.
