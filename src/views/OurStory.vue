<template>
  <div class="story-page">
    <Tagline />

    <div class="story-container">
      <div class="story-card">
        <div class="story-header">
          <h2 class="story-title">Our Story</h2>
          <div class="story-subtitle">The Journey Behind KB Powersport</div>
        </div>

        <div class="story-content">
          <div class="story-section">
            <h3>Our Beginning</h3>
            <p>
              Both Alex and Zach's stories begin at a very early age. For Zach it was the allure of watching Jeff Gordon's career in
              NASCAR during the early 2000's. For Alex, a trip to the Wisconsin Dell's in 2012. It was there at just 5 years old watching karts go around a track
              that he saw the potential of motorsports in his life. Alex has competed in multiple rental championships, both indoor and outdoor, with a 3rd place 
              finish in the 2025 Norway Motorsports Park Rental League Championship. 2025 was Zach's first year in rental racing and managed several wins and 
              many more podiums.
            </p>
          </div>

          <div class="story-section">
            <h3>Our Mission</h3>
            <p>
              Driven by passion. Defined by precision. These aren't just words to us – they represent our core philosophy.
              Every race, every podium finish, and every moment on the track is a testament to our commitment to excellence
              and the pursuit of karting perfection.
            </p>
          </div>

          <div class="story-section">
            <h3>Looking Forward</h3>
            <p>
              As we continue our journey in motorsports, we carry with us the lessons learned, the victories earned,
              and the unwavering determination to push further. Each season brings new challenges, new opportunities,
              and new chances to prove that passion and precision can drive extraordinary results both on and off the track.
            </p>
          </div>
        </div>

        <div class="story-footer">
          <p class="fb-link">
            Follow our journey:
            <a :href="fbPost" target="_blank" rel="noopener" class="social-link">Facebook</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'OurStory',
  components: { Tagline },
  data() {
    return {
      fbPost: 'https://www.facebook.com/profile.php?id=61579824638892'
    }
  }
}
</script>

<style scoped>
.story-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.story-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.story-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(51, 51, 51, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.story-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--kb-red) 0%, var(--kb-red) 100%);
}

.story-header {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.9) 100%);
  color: var(--kb-cream);
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  position: relative;
}

.story-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.story-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 400;
  font-style: italic;
}

.story-content {
  padding: 2.5rem 2rem;
  color: var(--kb-black);
}

.story-section {
  margin-bottom: 2rem;
}

.story-section:last-child {
  margin-bottom: 0;
}

.story-section h3 {
  color: var(--kb-red);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1rem;
}

.story-section h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: var(--kb-red);
  border-radius: 2px;
}

.story-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--kb-black);
  margin: 0;
  text-align: left;
}

.story-footer {
  background: rgba(245, 245, 220, 0.3);
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(51, 51, 51, 0.1);
  text-align: center;
}

.fb-link {
  margin: 0;
  color: var(--kb-black);
  font-size: 0.95rem;
  opacity: 0.8;
}

.social-link {
  color: var(--kb-red);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.social-link:hover {
  color: var(--kb-black);
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .story-container {
    padding: 1rem 0.5rem;
  }

  .story-card {
    border-radius: 16px;
    margin: 0 0.5rem;
  }

  .story-header {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  .story-title {
    font-size: 2rem;
  }

  .story-subtitle {
    font-size: 1rem;
  }

  .story-content {
    padding: 2rem 1.5rem;
  }

  .story-section h3 {
    font-size: 1.2rem;
  }

  .story-section p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .story-footer {
    padding: 1.25rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .story-container {
    padding: 0.5rem 0.25rem;
  }

  .story-card {
    margin: 0 0.25rem;
  }

  .story-header {
    padding: 1.5rem 1rem;
  }

  .story-title {
    font-size: 1.75rem;
  }

  .story-content {
    padding: 1.5rem 1rem;
  }

  .story-section {
    margin-bottom: 1.5rem;
  }
}
</style>
