<template>
  <div class="home">
    <Tagline />

    <div class="home-container">
      <div class="home-content">
        <section class="gallery">
          <h2 class="gallery-title">Newest Pictures</h2>
          <div class="gallery-grid">
            <div class="image-container" v-for="(image, index) in images" :key="index">
              <img
                :src="image.src"
                :alt="image.alt"
                @click="openLightbox(index)"
                loading="lazy"
                @load="onImageLoad(index)"
                @error="onImageError(index)"
                :class="{ 'loaded': imageStates[index].loaded, 'error': imageStates[index].error }"
              />
              <div v-if="!imageStates[index].loaded && !imageStates[index].error" class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Loading...</p>
              </div>
              <div v-if="imageStates[index].error" class="error-placeholder">
                <p>Failed to load image</p>
              </div>
            </div>
          </div>
        </section>

        <section class="cta">
          <h2>Wanna see more?</h2>
          <router-link to="/pictures" class="cta-button">View Our Gallery</router-link>
        </section>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-container" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <button class="lightbox-prev" @click="prevImage" v-if="currentImageIndex > 0">&#8249;</button>
        <img :src="currentImage.src" :alt="currentImage.alt" class="lightbox-image" />
        <button class="lightbox-next" @click="nextImage" v-if="currentImageIndex < images.length - 1">&#8250;</button>
        <div class="lightbox-caption">{{ currentImage.alt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'
// Import images as URL assets to ensure proper base path handling
import alexK3_1 from '../assets/alex_k3_1.jpg'
import alexK3_2 from '../assets/alex_k3_2.jpg'
import alexK3_3 from '../assets/alex_k3_3.jpg'
import alexK3_4 from '../assets/alex_k3_4.jpg'
import alexK3_5 from '../assets/alex_k3_5.jpg'
import zachK3_1 from '../assets/zach_k3_1.jpg'
import zachK3_2 from '../assets/zach_k3_2.jpg'
import zachK3_3 from '../assets/zach_k3_3.jpg'
import zachK3_4 from '../assets/zach_k3_4.jpg'
import zachK3_5 from '../assets/zach_k3_5.jpg'
import zachK3_6 from '../assets/zach_k3_6.jpg'

export default {
  name: 'OurHome',
  components: { Tagline },
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0,
      imageStates: []
    }
  },
  computed: {
    images() {
      // Use imported image modules
      return [
        { src: alexK3_1, alt: 'Alex K3 Action Shot 1' },
        { src: alexK3_2, alt: 'Alex K3 Action Shot 2' },
        { src: alexK3_3, alt: 'Alex K3 Action Shot 3' },
        { src: alexK3_4, alt: 'Alex K3 Action Shot 4' },
        { src: alexK3_5, alt: 'Alex K3 Action Shot 5' },
        { src: zachK3_1, alt: 'Zach K3 Action Shot 1' },
        { src: zachK3_2, alt: 'Zach K3 Action Shot 2' },
        { src: zachK3_3, alt: 'Zach K3 Action Shot 3' },
        { src: zachK3_4, alt: 'Zach K3 Action Shot 4' },
        { src: zachK3_5, alt: 'Zach K3 Action Shot 5' },
        { src: zachK3_6, alt: 'Zach K3 Action Shot 6' }
      ]
    },
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  },
  created() {
    // Initialize loading states for all images
    this.imageStates = this.images.map(() => ({
      loaded: false,
      error: false
    }))
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = 'auto'
    },
    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    onImageLoad(index) {
      this.imageStates[index].loaded = true
      this.imageStates[index].error = false
    },
    onImageError(index) {
      this.imageStates[index].loaded = false
      this.imageStates[index].error = true
    }
  },
  mounted() {
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.lightboxOpen) {
        if (e.key === 'Escape') {
          this.closeLightbox()
        } else if (e.key === 'ArrowRight') {
          this.nextImage()
        } else if (e.key === 'ArrowLeft') {
          this.prevImage()
        }
      }
    })
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  min-height: 100vh;
  background: var(--kb-cream);
}

.home-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.home-content {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  width: 100%;
  margin: 1.8rem 0;
  padding: 0 1rem;
}

.gallery-title {
  color: var(--kb-black);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.6rem;
}

.image-container {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background: var(--kb-cream);
}

.gallery-grid img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.18);
  transition: transform .25s, opacity .3s;
  object-fit: cover;
  cursor: pointer;
  opacity: 0;
}

.gallery-grid img.loaded {
  opacity: 1;
}

.gallery-grid img:hover {
  transform: scale(1.03);
}

.loading-placeholder, .error-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  color: var(--kb-black);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--kb-cream);
  border-top: 4px solid var(--kb-red);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

.error-placeholder {
  background: rgba(255, 200, 200, 0.9);
  color: #cc0000;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.cta {
  background: var(--kb-black);
  color: var(--kb-cream);
  padding: 2.2rem 1rem;
  margin-top: 1.6rem;
  width: 100%;
  border-radius: 12px;
}

.cta-button {
  background: var(--kb-red);
  color: var(--kb-cream);
  padding: 0.7rem 1.4rem;
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: #FF4466;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem 0.5rem;
  }

  .home-content {
    margin: 0 0.5rem;
  }

  .gallery {
    margin: 1rem 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .loading-spinner {
    width: 30px;
    height: 30px;
  }

  .gallery-title {
    font-size: 1.5rem;
  }
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.lightbox-container {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: -20px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1001;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.lightbox-close:hover {
  opacity: 0.7;
}

.lightbox-prev, .lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 20px 15px;
  border-radius: 8px;
  transition: all 0.3s;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}

.lightbox-prev {
  left: -80px;
}

.lightbox-next {
  right: -80px;
}

.lightbox-prev:hover, .lightbox-next:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-caption {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  white-space: nowrap;
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Mobile lightbox adjustments */
@media (max-width: 768px) {
  .lightbox-prev {
    left: 10px;
    padding: 15px 10px;
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
  }

  .lightbox-next {
    right: 10px;
    padding: 15px 10px;
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
    font-size: 2rem;
  }

  .lightbox-caption {
    bottom: 10px;
    font-size: 0.8rem;
    max-width: 90%;
  }

  .lightbox-image {
    max-height: 70vh;
  }
}
</style>
