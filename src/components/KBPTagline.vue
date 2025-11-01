<template>
  <div class="tagline-block" role="banner" aria-label="KB Powersport tagline">
    <img :src="logoUrl" alt="KB Powersport Logo" class="tagline-logo" />
    <p class="tagline-text">Driven by passion. Defined by precision.</p>
  </div>
</template>

<script>
import logoUrl from '../assets/logo.png?url'

export default {
  name: 'OurTagline',
  data() {
    return {
      logoUrl
    }
  }
}
</script>

<style scoped>
.tagline-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: transparent; /* header handles black/cream background */
  padding: 6px 12px; /* tightened spacing */
  margin-bottom: 8px;
  border-bottom: 3px solid var(--kb-red);
}

/* small logo next to the tagline */
.tagline-logo {
  width: 100px;
  height: auto;
  display: block;
  margin: 0;
}

/* tagline text */
.tagline-text {
  margin: 0;
  font-weight: 600;
  color: var(--kb-black);
  font-size: 2rem;
  letter-spacing: 0.4px;
}

/* on narrow screens stack them */
@media (max-width: 520px) {
  .tagline-block {
    flex-direction: column;
    gap: 6px;
    padding: 8px 10px;
  }
  .tagline-logo {
    width: 48px;
  }
  .tagline-text {
    font-size: 1rem;
    text-align: center;
  }
}
</style>
