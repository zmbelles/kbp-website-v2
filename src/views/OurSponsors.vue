<template>
  <div class="sponsors-page">
    <!-- Use explicit close tag to avoid any template compiler edge cases -->
    <Tagline></Tagline>

    <div class="sponsors-container">
      <div class="sponsors-card">
        <div class="sponsors-header">
          <h2 class="sponsors-title">Our Partners</h2>
          <div class="sponsors-subtitle">Supporting KB Powersport's racing journey</div>
        </div>

        <div class="sponsors-content">
          <div class="thank-you-section">
            <h3>Thank You to Our Sponsors!</h3>
            <p>
              Racing isn't cheap, and we couldn't do what we do without the support of these amazing companies.
              They believe in what we're doing on the track, and we're proud to represent them.
            </p>
          </div>

          <div class="sponsors-grid">
            <div class="sponsor-card">
              <div class="sponsor-top">
                <div class="sponsor-logo">
                  <img :src="rmsLogo" alt="RMS Logo" />
                </div>

                <div class="sponsor-header">
                  <h4>RMS Kart & Performance LLC</h4>
                  <div class="sponsor-category">Kart Racing Team & Performance Engineering</div>
                </div>
              </div>

              <div class="sponsor-content">
                <p>
                  RMS Kart & Performance LLC is the primary Margay Ignite dealer at Norway Motorsports
                  Park and offers a multitude of motorsports services including kart sales, rentals,
                  performance tuning, and race team support. RMS is dedicated to providing top-notch
                  service and expertise to help racers of all levels achieve their goals on the track.
                </p>

                <div class="sponsor-specialties">
                  <div class="specialty-tag">Kart Racing Team</div>
                  <div class="specialty-tag">Engine Tuning & Performance</div>
                  <div class="specialty-tag">Arrive-and-Drive Programs</div>
                  <div class="specialty-tag">Trackside Race Support</div>
                </div>
              </div>
            </div>

            <div class="sponsor-card">
              <div class="sponsor-top">
                <div class="sponsor-logo">
                  <img :src="renderlyLogo" alt="Renderly Logo" />
                </div>

                <div class="sponsor-header">
                  <h4>Renderly Web Consultants</h4>
                  <div class="sponsor-category">Website Development and Managed Services</div>
                </div>
              </div>

              <div class="sponsor-content">
                <p>
                  Renderly is a team of professional developers with over 15 years of combined experience 
                  in front-end and back-end development. We build fast, reliable, and scalable websites 
                  tailored to your business needs
                </p>

                <div class="sponsor-specialties">
                  <div class="specialty-tag">Web Development</div>
                  <div class="specialty-tag">Managed Services</div>
                  <div class="specialty-tag">Custom Solutions</div>
                  <div class="specialty-tag">Performance Optimization</div>
                </div>
              </div>
            </div>

            <!-- waiting for confirmation
            <div class="sponsor-card">
              <div class="sponsor-top">
                <div class="sponsor-logo">
                  <img :src="liveWireLogo" alt="LiveWire Construction Logo" />
                </div>
                <div class="sponsor-header">
                  <h4>LiveWire Construction</h4>
                  <div class="sponsor-category">Electrical Contractor</div>
                </div>
              </div>

              <div class="sponsor-content">
                <p>
                  A full-service electrical work contractor providing a wide range of electrical system solutions
                  in the healthcare, educational, industrial and utility markets. LiveWire serves customers in the
                  private, public, and government sectors with professional excellence and reliability.
                </p>

                <div class="sponsor-specialties">
                  <div class="specialty-tag">Healthcare Systems</div>
                  <div class="specialty-tag">Educational Facilities</div>
                  <div class="specialty-tag">Industrial Solutions</div>
                  <div class="specialty-tag">Utility Services</div>
                </div>
              </div>
            </div>
            -->
          </div>

          <div class="partnership-section">
            <h4>Interested in Sponsoring?</h4>
            <p>
              We're always looking to partner with businesses that share our passion for excellence and performance.
              If you're interested in supporting KB Powersport and getting your brand in front of racing enthusiasts,
              let's talk about what we can do together.
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
  name: 'OurSponsors',
  components: { Tagline },
  data() {
    return {
      // require() is the most compatible approach across Vue CLI/Webpack setups
      // and guarantees a string URL for <img src="">
      rmsLogo: require('@/assets/rms_logo.jpg'),
      // liveWireLogo: require('@/assets/livewire_logo.png'),
      renderlyLogo: require('@/assets/renderly.png')
    }
  }
}
</script>

<style scoped>
/* (unchanged styles) */
.sponsors-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.sponsors-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.sponsors-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(51, 51, 51, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.sponsors-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--kb-red) 0%, var(--kb-red) 100%);
}

.sponsors-header {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.9) 100%);
  color: var(--kb-cream);
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  position: relative;
}

.sponsors-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.sponsors-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 400;
  font-style: italic;
}

.sponsors-content {
  padding: 2.5rem 2rem;
  color: var(--kb-black);
}

.thank-you-section {
  text-align: center;
  margin-bottom: 3rem;
}

.thank-you-section h3 {
  color: var(--kb-red);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.thank-you-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--kb-black);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.sponsors-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.sponsor-card {
  background: rgba(245, 239, 231, 0.3);
  border-radius: 16px;
  padding: 2rem;
  border-left: 5px solid var(--kb-red);
  transition: all 0.3s ease;
}

.sponsor-card:hover {
  background: rgba(245, 239, 231, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(51, 51, 51, 0.1);
}

.sponsor-top {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sponsor-logo {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(51, 51, 51, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-logo img {
  max-width: 120px;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  color: var(--kb-black);
  background: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.sponsor-header {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.sponsor-header h4 {
  color: var(--kb-red);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.sponsor-category {
  color: var(--kb-black);
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.7;
}

.sponsor-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--kb-black);
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.sponsor-specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.specialty-tag {
  background: rgba(220, 20, 60, 0.1);
  color: var(--kb-red);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(220, 20, 60, 0.2);
}

.partnership-section {
  background: rgba(220, 20, 60, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid var(--kb-red);
  text-align: center;
}

.partnership-section h4 {
  color: var(--kb-red);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.partnership-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--kb-black);
  margin: 0;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .sponsors-container {
    padding: 1rem 0.5rem;
  }

  .sponsors-card {
    border-radius: 16px;
    margin: 0 0.5rem;
  }

  .sponsors-header {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  .sponsors-title {
    font-size: 2rem;
  }

  .sponsors-subtitle {
    font-size: 1rem;
  }

  .sponsors-content {
    padding: 2rem 1.5rem;
  }

  .thank-you-section h3 {
    font-size: 1.7rem;
  }

  .sponsor-card {
    padding: 1.5rem;
  }

  .sponsor-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .sponsor-logo {
    width: 80px;
    height: 80px;
    padding: 0.75rem;
  }

  .sponsor-logo img {
    max-width: 60px;
    max-height: 60px;
  }

  .sponsor-header h4 {
    font-size: 1.3rem;
  }

  .specialty-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .partnership-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .sponsors-container {
    padding: 0.5rem 0.25rem;
  }

  .sponsors-card {
    margin: 0 0.25rem;
  }

  .sponsors-header {
    padding: 1.5rem 1rem;
  }

  .sponsors-title {
    font-size: 1.75rem;
  }

  .sponsors-content {
    padding: 1.5rem 1rem;
  }

  .thank-you-section {
    margin-bottom: 2rem;
  }

  .sponsors-grid {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .sponsor-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .sponsor-logo {
    width: 70px;
    height: 70px;
    padding: 0.5rem;
  }

  .sponsor-logo img {
    max-width: 50px;
    max-height: 50px;
  }

  .specialty-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }

  .partnership-section {
    padding: 1.25rem;
  }
}
</style>
