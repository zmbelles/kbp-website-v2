<template>
  <div class="blog-page">
    <Tagline />

    <div class="blog-container">
      <div class="blog-card">
        <div class="blog-header">
          <h2 class="blog-title">Racing Journal</h2>
          <div class="blog-subtitle">Stories from the track</div>
        </div>

        <div class="blog-content">
          <div class="season-group">
            <h3 class="season-heading">2026 Season</h3>

            <router-link to="/blog/2026/nmp-race-2" class="post-link">
              <div class="post-item">
                <div class="post-item-header">
                  <span class="post-series-tag">Norway Motorsports Park</span>
                  <span class="post-result-tag">P8</span>
                  <span class="post-date-tag">Apr 21, 2026</span>
                </div>
                <h4 class="post-item-title">NMP Race 2: Survival, Setbacks, and a P8</h4>
                <p class="post-item-excerpt">
                  A tough weekend turned into a solid result. Rebuilt, regrouped, and charged from P12
                  to a P8 finish with a 3-tenth gap at the line.
                </p>
                <span class="post-read-more">Read more →</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'OurBlog',
  components: { Tagline }
}
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.blog-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.blog-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(51, 51, 51, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.blog-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--kb-red) 0%, var(--kb-red) 100%);
}

.blog-header {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.9) 100%);
  color: var(--kb-cream);
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  position: relative;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.blog-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 400;
  font-style: italic;
}

.blog-content {
  padding: 2.5rem 2rem;
  color: var(--kb-black);
}

.season-group {
  margin-bottom: 2rem;
}

.season-heading {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(51, 51, 51, 0.45);
  margin: 0 0 1.25rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-item {
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(51, 51, 51, 0.08);
  transition: all 0.2s ease;
  cursor: pointer;
}

.post-item:hover {
  border-color: rgba(220, 20, 60, 0.25);
  box-shadow: 0 4px 16px rgba(51, 51, 51, 0.08);
  transform: translateY(-1px);
}

.post-item-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.post-series-tag {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(51, 51, 51, 0.5);
}

.post-result-tag {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.15rem 0.55rem;
  border-radius: 20px;
  background: rgba(220, 20, 60, 0.1);
  color: var(--kb-red);
  border: 1px solid rgba(220, 20, 60, 0.25);
}

.post-date-tag {
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(51, 51, 51, 0.45);
  margin-left: auto;
}

.post-item-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--kb-black);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.post-item-excerpt {
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(51, 51, 51, 0.7);
  margin: 0 0 0.75rem 0;
}

.post-read-more {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--kb-red);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .blog-container {
    padding: 1rem 0.5rem;
  }

  .blog-card {
    border-radius: 16px;
    margin: 0 0.5rem;
  }

  .blog-header {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  .blog-title {
    font-size: 2rem;
  }

  .blog-subtitle {
    font-size: 1rem;
  }

  .blog-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .blog-container {
    padding: 0.5rem 0.25rem;
  }

  .blog-card {
    margin: 0 0.25rem;
  }

  .blog-header {
    padding: 1.5rem 1rem;
  }

  .blog-title {
    font-size: 1.75rem;
  }

  .blog-content {
    padding: 1.5rem 1rem;
  }

  .post-item {
    padding: 1.25rem;
  }
}
</style>
