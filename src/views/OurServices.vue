<template>
  <div class="services-page">
    <Tagline />

    <div class="services-container">
      <div class="services-card">
        <div class="services-header">
          <h2 class="services-title">Services</h2>
          <div class="services-subtitle">Support, coaching, and partner programs</div>
        </div>

        <div class="services-content">
          <!-- INTRO -->
          <div class="intro-section">
            <h3>What we do</h3>
            <p>
              We provide race-weekend support and driver development for club and regional events.
              If you’re not sure what you need, tell us the track, date, and class — we’ll point you in the right direction.
            </p>
          </div>

          <!-- SERVICES -->
          <div class="feature-list">
            <!-- Tent Support -->
            <div class="feature-item feature-item-dark">
              <div class="feature-top">
                <div class="feature-text">
                  <h4>Tent Support</h4>
                  <p>Bring your kart. We handle pit work so you can focus on driving.</p>
                </div>
                <span class="badge badge-primary">Most popular</span>
              </div>

              <ul class="feature-bullets">
                <li>Chain &amp; sprocket changes</li>
                <li>Tire pressure and quick handling adjustments</li>
                <li>Fueling help and between-session checkovers</li>
                <li>MyChron support and basic data review</li>
                <li>Track-side troubleshooting</li>
              </ul>

              <div class="feature-cta">
                <RouterLink class="cta-link" :to="contactRoute">Request tent support</RouterLink>
                <div class="cta-note">Pricing varies by event length and class.</div>
              </div>
            </div>

            <!-- Coaching -->
            <div class="feature-item feature-item-dark">
              <div class="feature-top">
                <div class="feature-text">
                  <h4>Coaching</h4>
                  <p>Rental kart coaching focused on racing lines and defending.</p>
                </div>
                <span class="badge badge-outline">Rental only</span>
              </div>

              <ul class="feature-bullets">
                <li>Racing line optimization</li>
                <li>Defending and positioning</li>
                <li>Corner entry and exit technique</li>
                <li>Race awareness and decision making</li>
                <li>Consistency and confidence building</li>
              </ul>

              <div class="feature-cta">
                <RouterLink class="cta-link" :to="contactRoute">Ask about rental coaching</RouterLink>
                <div class="cta-note">
                  For LO206 coaching, we work through our partner RMS Kart &amp; Performance.
                </div>
              </div>
            </div>

            <!-- Arrive & Drive -->
            <div class="feature-item feature-item-dark feature-item-center">
              <div class="feature-top">
                <div class="feature-text">
                  <h4>Arrive &amp; Drive</h4>
                  <p>Turnkey seat time operated by our partners at RMS Kart &amp; Performance.</p>
                </div>
                <span class="badge badge-muted">Partner</span>
              </div>

              <ul class="feature-bullets">
                <li>Prepped kart package</li>
                <li>Setup changes and pit support</li>
                <li>Optional coaching add-on</li>
                <li>Consumables handled per agreement</li>
                <li>Limited availability</li>
              </ul>

              <div class="feature-cta">
                <a
                  class="cta-link"
                  :href="rmsFacebook"
                  target="_blank"
                  rel="noopener"
                >
                  View Arrive &amp; Drive options at RMS
                </a>
                <div class="cta-note">
                  Arrive &amp; Drive programs are run directly by RMS.
                </div>
              </div>
            </div>
          </div>

          <!-- CALLOUT -->
          <div class="preview-section preview-dark">
            <h4>Not sure what you need?</h4>
            <p>
              Tell us your track, date, and class and we’ll help you choose.
              For LO206 coaching or full arrive &amp; drive programs, RMS is the place to start.
            </p>

            <div class="preview-links">
              <RouterLink class="preview-link" :to="contactRoute">Contact KBP</RouterLink>
              <a
                class="preview-link"
                :href="rmsFacebook"
                target="_blank"
                rel="noopener"
              >
                RMS on Facebook
              </a>
            </div>
          </div>
        </div>

        <div class="services-footer">
            <p class="footer-text">
                Follow our updates:
                <a
                :href="kbpFacebook"
                target="_blank"
                rel="noopener"
                class="social-link"
                >
                Facebook
                </a>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'OurServices',
  components: { Tagline },
  data() {
    return {
      contactRoute: '/contact',
      rmsFacebook: 'https://www.facebook.com/profile.php?id=100076222208564',
      kbpFacebook: 'https://www.facebook.com/profile.php?id=61579824638892'
    }
  }
}
</script>

<style scoped>
/* Page shell */
.services-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.services-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}

.services-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(51, 51, 51, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.services-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--kb-red);
}

/* Header */
.services-header {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.9) 100%);
  color: var(--kb-cream);
  padding: 2.5rem 2rem 2rem;
  text-align: center;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
}

.services-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  font-style: italic;
}

.services-content {
  padding: 2.25rem 2rem;
}

/* Intro */
.intro-section {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.92) 100%);
  color: var(--kb-cream);
  padding: 1.75rem;
  border-radius: 16px;
  border-left: 4px solid var(--kb-red);
  margin-bottom: 2rem;
}

/* Grid */
.feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
  margin-bottom: 1.75rem;
}

/* Center the third card */
.feature-item-center {
  grid-column: 1 / -1;
  max-width: 360px;
  justify-self: center;
}

/* Cards */
.feature-item-dark {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.93) 100%);
  color: var(--kb-cream);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(245, 245, 220, 0.15);
  display: flex;
  flex-direction: column;
  text-align: center;
}

/* Top row */
.feature-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.55rem;
}

.feature-text h4 {
  margin: 0 0 0.2rem 0;
  font-size: 1.15rem;
  font-weight: 800;
}

.feature-text p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.45;
  opacity: 0.9;
}

/* CENTERED BULLETS */
.feature-bullets {
  list-style: none;
  margin: 0.6rem 0 0.85rem 0;
  padding: 0;
}

.feature-bullets li {
  position: relative;
  padding-left: 0;
  margin-bottom: 0.25rem;
  font-size: 0.92rem;
  line-height: 1.4;
  color: rgba(245, 245, 220, 0.92);
}

.feature-bullets li::before {
  content: '•';
  color: var(--kb-red);
  margin-right: 0.4rem;
}

/* Badges */
.badge {
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-weight: 800;
  white-space: nowrap;
}

.badge-primary {
  background: var(--kb-red);
  color: var(--kb-cream);
}

.badge-outline {
  border: 2px solid var(--kb-red);
  color: var(--kb-cream);
}

.badge-muted {
  background: rgba(245, 245, 220, 0.15);
  color: var(--kb-cream);
}

/* CTA */
.feature-cta {
  margin-top: auto;
}

.cta-link {
  color: var(--kb-cream);
  font-weight: 800;
  text-decoration: none;
  border-bottom: 2px solid var(--kb-red);
  font-size: 0.9rem;
}

.cta-note {
  font-size: 0.82rem;
  opacity: 0.8;
  margin-top: 0.15rem;
}

/* Callout */
.preview-dark {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.92) 100%);
  color: var(--kb-cream);
  padding: 1.75rem;
  border-radius: 16px;
  border-left: 4px solid var(--kb-red);
}

.services-footer {
  background: rgba(245, 245, 220, 0.35); /* cream */
  padding: 1.5rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(51, 51, 51, 0.12);
}

.footer-text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--kb-black);       /* 🔑 FIX */
  opacity: 0.85;
}

.social-link {
  color: var(--kb-red);         /* explicit */
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-link:hover {
  color: var(--kb-black);
  text-decoration: underline;
}


/* Mobile */
@media (max-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr;
  }

  .feature-item-center {
    grid-column: auto;
    max-width: none;
  }
}
</style>
