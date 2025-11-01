<template>
  <div class="pictures-page">
    <OurTagline />

    <section class="gallery">
      <!-- P3 Podiums -->
      <div class="category-section">
        <h3>P3 Podiums</h3>
        <div class="gallery-row">
          <figure v-for="picture in p3Pictures" :key="picture.src" class="thumb">
            <img :src="picture.src" :alt="picture.alt" />
          </figure>
        </div>
      </div>

      <!-- P2 Podiums -->
      <div class="category-section">
        <h3>P2 Podiums</h3>
        <div class="gallery-row">
          <figure v-for="picture in p2Pictures" :key="picture.src" class="thumb">
            <img :src="picture.src" :alt="picture.alt" />
          </figure>
        </div>
      </div>

      <!-- P1 Podiums -->
      <div class="category-section">
        <h3>P1 Podiums</h3>
        <div class="gallery-row">
          <figure v-for="picture in p1Pictures" :key="picture.src" class="thumb">
            <img :src="picture.src" :alt="picture.alt" />
          </figure>
        </div>
      </div>

      <!-- Endurance Win -->
      <div class="category-section">
        <h3>Endurance Victory</h3>
        <div class="gallery-row">
          <figure class="thumb">
            <img :src="enduranceImage" alt="Endurance Victory" />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OurTagline from '../components/KBPTagline.vue'
// Import images as URL assets to ensure proper base path handling
import enduranceImage from '../assets/Endurance.jpg'
import alexP3_1 from '../assets/Alex_P3_1.jpg'
import alexP3_2 from '../assets/Alex_P3_2.jpg'
import alexP3_3 from '../assets/Alex_P3_3.jpg'
import zachP3_1 from '../assets/Zach_P3_1.jpg'
import zachP3_2 from '../assets/Zach_P3_2.jpg'
import zachP3_3 from '../assets/Zach_P3_3.jpg'
import zachP3_4 from '../assets/Zach_P3_4.jpg'
import alexP2_1 from '../assets/Alex_P2_1.jpg'
import zachP1_1 from '../assets/ZachP11.png'
import zachP1_2 from '../assets/Zach_P1_2.jpg'

export default {
  name: 'OurPictures2025',
  components: { OurTagline },
  computed: {
    enduranceImage() {
      return enduranceImage
    },
    p3Pictures() {
      return [
        { src: alexP3_1, alt: 'Alex P3 Podium 1' },
        { src: alexP3_2, alt: 'Alex P3 Podium 2' },
        { src: alexP3_3, alt: 'Alex P3 Podium 3' },
        { src: zachP3_1, alt: 'Zach P3 Podium 1' },
        { src: zachP3_2, alt: 'Zach P3 Podium 2' },
        { src: zachP3_3, alt: 'Zach P3 Podium 3' },
        { src: zachP3_4, alt: 'Zach P3 Podium 4' }
      ]
    },
    p2Pictures() {
      return [
        { src: alexP2_1, alt: 'Alex P2 Podium 1' }
      ]
    },
    p1Pictures() {
      return [
        { src: zachP1_1, alt: 'Zach P1 Podium 1' },
        { src: zachP1_2, alt: 'Zach P1 Podium 2' }
      ]
    }
  }
}
</script>

<style scoped>
.pictures-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.gallery { padding: 2rem 0; }
.category-section { margin-bottom: 3rem; }
.category-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--kb-black);
  font-weight: 600;
}
.gallery-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
}
.thumb img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.thumb img:hover {
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .thumb img { width: 90%; height: auto; }
  .category-section h3 { font-size: 1.4rem; color: var(--kb-black); }
}
</style>