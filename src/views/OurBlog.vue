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
          <div class="coming-soon-section">
            <h3>Blog Coming Soon!</h3>
            <p>
              New team, new experiences, new stories. We're working hard to bring you the best content possible starting in the 2026 season.
              The good, the bad, the ugly, and all the behind the scenes look into what makes us tick.
            </p>

            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-text">
                  <h4>Race Day Stories</h4>
                  <p>What actually happened out there (and what went wrong)</p>
                </div>
              </div>

              <div class="feature-item">
                <div class="feature-text">
                  <h4>Setup Notes</h4>
                  <p>Things we learned the hard way</p>
                </div>
              </div>

              <div class="feature-item">
                <div class="feature-text">
                  <h4>Random Photos</h4>
                  <p>Pit shenanigans and track memories</p>
                </div>
              </div>

              <div class="feature-item">
                <div class="feature-text">
                  <h4>Win Celebrations</h4>
                  <p>Those sweet podium moments (when they happen)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="preview-section">
            <h4>For now...</h4>
            <p>
              Check our Facebook for the latest drama and victories. We post way too much there anyway,
              but hey, that's where all the good stuff is happening right now.
            </p>
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

.coming-soon-section {
  text-align: center;
  margin-bottom: 2.5rem;
}

.coming-soon-section h3 {
  color: var(--kb-red);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.coming-soon-section > p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: var(--kb-black);
  opacity: 0.8;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-item {
  padding: 1.5rem;
  background: rgba(245, 245, 220, 0.3);
  border-radius: 12px;
  text-align: left;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(245, 245, 220, 0.5);
  transform: translateY(-2px);
}

.feature-text h4 {
  color: var(--kb-red);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.feature-text p {
  font-size: 0.95rem;
  color: var(--kb-black);
  opacity: 0.7;
  margin: 0;
  line-height: 1.5;
}

.preview-section {
  background: rgba(220, 20, 60, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid var(--kb-red);
}

.preview-section h4 {
  color: var(--kb-red);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.preview-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--kb-black);
  margin: 0;
  opacity: 0.8;
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

  .coming-soon-section h3 {
    font-size: 1.7rem;
  }

  .feature-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .feature-item {
    padding: 1.25rem;
  }

  .preview-section {
    padding: 1.5rem;
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

  .coming-soon-section {
    margin-bottom: 2rem;
  }

  .preview-section {
    padding: 1.25rem;
  }
}
</style>
