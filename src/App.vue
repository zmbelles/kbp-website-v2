<template>
  <div id="app">
    <header class="site-header">

      <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/story" class="nav-link">Story</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/pictures" class="nav-link">Pictures</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
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
