<template>
  <div class="pictures-page">
    <Tagline />

    <section class="folder-gallery">
      <h2>Picture Galleries</h2>
      <div class="folder-grid">
        <router-link to="/pictures/2025" class="folder-card">
          <div class="folder-icon">
            📁
          </div>
          <div class="folder-content">
            <h3>2025</h3>
            <p>Podium finishes and victories</p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'OurPictures',
  components: { Tagline }
}
</script>

<style scoped>
.pictures-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.folder-gallery {
  padding: 2rem;
  max-width: 1200px;
  color: var(--kb-black);
  margin: 0 auto;
}

.folder-gallery h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  color: var(--kb-black);
  font-weight: 600;
}

.folder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.folder-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  min-width: 250px;
  cursor: pointer;
}

.folder-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  border-color: #007bff;
}

.folder-icon {
  font-size: 4rem;
  margin-bottom: -2.5rem;
  margin-top: -2rem;;
  display: block;
}

.folder-content h3 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: -.5rem;
  color: #333;
  text-align: center;
}

.folder-content p {
  font-size: 2rem;
  color: #666;
  text-align: center;
  margin: 0;
}

@media (max-width: 768px) {
  .folder-gallery {
    padding: 1rem;
  }

  .folder-gallery h2 {
    font-size: 1.8rem;
  }

  .folder-card {
    min-width: 200px;
    padding: 1.5rem;
  }

  .folder-icon {
    font-size: 3rem;
  }

  .folder-content h3 {
    font-size: 2rem;
  }
}
</style>
