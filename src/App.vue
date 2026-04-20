<template>
  <div id="app">
    <header class="site-header">

      <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/story" class="nav-link">Story</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/pictures" class="nav-link">Pictures</router-link>
        <router-link to="/driver-profiles" class="nav-link">Driver Profiles</router-link>
        <router-link to="/sponsors" class="nav-link">Sponsors</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <br><br>
      <div class="social-media-links">
        <a href="https://www.facebook.com/profile.php?id=61579824638892" target="_blank">
            <img src="@/assets/facebook.jpg" alt="Facebook" class="social-media-logo">
        </a>
        <a href="https://www.instagram.com/kbpowersport?igsh=bnQxcjlpMHA0ZjYx" target="_blank">
            <img src="@/assets/instagram.jpg" alt="Instagram" class="social-media-logo">
        </a>
        <!-- Add other social media links similarly -->
    </div>
      Made by <a href="https://www.facebook.com/profile.php?id=61587200002055">Renderly</a> in Vue.js
      <p>&copy;2026 All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.site-header {
  background-color: var(--kb-black);
  color: var(--kb-cream);
  text-align: center;
  padding: 1.2rem 1rem 1.4rem 1rem;
  border-bottom: 0; /* remove thick border here since Tagline uses bottom border */
}

.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.4rem;
}

.footer {
  background-color: var(--kb-cream);
  color: var(--kb-black);
}
footer .social-media-links a {
    display: inline-block; /* Align links in a line */
    margin: 0 10px; /* Add some horizontal spacing */
}

footer .social-media-links img {
    height: 70px; /* Set a fixed height for logos */
    width: auto; /* Maintain aspect ratio */
}
.social-media-logo {
    border-radius: 50%; /* Makes the image circular */
    width: 40px;  /* Set a fixed width */
    height: 40px; /* Set a fixed height, equal to width for a perfect circle */
    object-fit: cover; /* Ensures the image covers the area without stretching */
}

.logo {
  width: 140px;
  margin-bottom: 0.2rem;
}

.branding h1 {
  font-size: 1.7rem;
  margin: 0;
  letter-spacing: 1px;
  color: var(--kb-cream);
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  margin-top: 0.6rem;
}

.nav-link {
  color: var(--kb-cream);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.05rem;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--kb-red);
}

main {
  background-color: var(--kb-cream);
  min-height: 100vh;
  padding-top: 1rem; /* slightly reduced to tighten spacing under tagline */
}
</style>
