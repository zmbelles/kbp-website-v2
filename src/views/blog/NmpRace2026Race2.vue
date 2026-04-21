<template>
  <div class="post-page">
    <Tagline />

    <div class="post-layout">
      <aside class="sponsor-col sponsor-col--left">
        <a href="https://www.facebook.com/profile.php?id=100076222208564" target="_blank" rel="noopener" class="sponsor-item">
          <img src="../../assets/rms_logo.jpg" alt="RMS Kart and Performance" class="sponsor-img" />
        </a>
        <a href="https://renderly-consultants.com/" target="_blank" rel="noopener" class="sponsor-item">
          <img src="../../assets/renderly.png" alt="Renderly" class="sponsor-img" />
        </a>
        <a href="https://freedom-fridays.vercel.app/" target="_blank" rel="noopener" class="sponsor-item sponsor-text">
          <span>Freedom</span>
          <span>Fridays</span>
        </a>
      </aside>

      <div class="post-container">
      <div class="post-card">
        <div class="post-header">
          <div class="post-meta">
            <span class="post-series">Norway Motorsports Park</span>
            <span class="post-date">2026 Season · Race 2</span>
            <span class="post-date">April 21, 2026</span>
          </div>
          <h1 class="post-title">NMP Race 2: Survival, Setbacks, and a P8</h1>
          <div class="post-subtitle">Zachary Belles(#24) post-race debrief</div>
        </div>

        <div class="post-hero">
          <img src="../../assets/nmp_national.png" alt="National Layout - Norway Motorsports Park" class="post-hero-img post-hero-img--contain" />
          <img src="../../assets/Round_2_Zach.jpg" alt="Zachary Belles #24 at NMP Race 2" class="post-hero-img" />
        </div>

        <div class="post-content">
          <p class="post-intro">
            Heading into race weekend, we were still working through a few lingering items: a brake rotor
            issue and some minor quirks from other components carried over from an accident a few weeks 
            back that had bent our axle. On the bright side, we had a freshly rebuilt engine from RMS Kart 
            and Performance LLC under the hood, which had already made a noticeable difference in lap times 
            over the past few outings.
          </p>

          <div class="session">
            <h2 class="session-title">
              <span class="session-label">Free Practice 1</span>
              <span class="session-result no-time">No Time</span>
              <span class="session-result place">P12</span>
            </h2>
            <p>

              Cold, windy conditions meant a cautious outlap to build tire temps; just 48F in the first 
              session. Starting lap one I had two karts a second up the road from me, one missed turn one 
              by a mile and went off into the grass while the other locked up at turn 2 and spun
              around directly into me, bending the rear axle before a timed lap was even set.
              Thankfully, RMS came in clutch once more with a replacement axle the moment I needed it, 
              (and a pep talk that got me back in the right mindset to tackle the rest of the weekend).
            </p>
          </div>

          <div class="session">
            <h2 class="session-title">
              <span class="session-label">Free Practice 2</span>
              <span class="session-result dns">DNS</span>
              <span class="session-result place">DNS</span>
            </h2>
            <p>
              Did not manage to make it out on track for FP2 as the team and I were busy replacing the
              rear axle that got bent in FP1. Thankfully the lunch break after FP2 gave us ample time to
              get the kart fixed up before Qualifying.
            </p>
          </div>

          <div class="session">
            <h2 class="session-title">
              <span class="session-label">Qualifying</span>
              <span class="session-result time">57.094</span>
              <span class="session-result place">P12</span>
            </h2>
            <p>
              In qualifying I realized we were not hitting the limiter on the back straight at all. This
              meant there was a lot of time left out on track, even still nursing a bent brake rotor,
              resulting in a qualifying position of 12 out of 13.
            </p>
          </div>

          <div class="session">
            <h2 class="session-title">
              <span class="session-label">Heat Race</span>
              <span class="session-result time">56.580</span>
              <span class="session-result place">P9</span>
            </h2>
            <p>
              The heat race was a testament to survival of Turn 2 on the first lap (it almost always is).
              From P12 to P9 in one corner, the rest of the race was running clean laps to ensure the
              faster driver that spun behind me did not overtake me. Managed to keep it clean and
              consistent and finished with that P9 I inherited at the beginning.
            </p>
          </div>

          <div class="session">
            <h2 class="session-title">
              <span class="session-label">Final</span>
              <span class="session-result time">56.424</span>
              <span class="session-result place">P8</span>
            </h2>
            <p>
              After tightening the brake calipers up, removing the front torsion bar, and going up a
              sprocket tooth, managed to squeeze another tenth out and had a great battle with the #13
              kart for the majority of the race. A new gremlin revealed itself on the last lap, the choke
              engaging randomly out of hard corners.
              Nursed it through the last lap and crossed the line P9, beating P10 by just 3 tenths.
              Post-race penalties for the #33 kart bumped me to a final result of P8 in the final.
            </p>
            <p>
              More to work on, but a solid result given the weekend we had.
            </p>
          </div>

          <div class="post-footer">
            <router-link to="/blog" class="back-link">← Back to Racing Journal</router-link>
          </div>

          <div class="mobile-sponsors">
            <a href="https://www.facebook.com/profile.php?id=100076222208564" target="_blank" rel="noopener" class="mobile-sponsor-item">
              <img src="../../assets/rms_logo.jpg" alt="RMS Kart and Performance" class="mobile-sponsor-img" />
            </a>
            <a href="https://renderly-consultants.com/" target="_blank" rel="noopener" class="mobile-sponsor-item">
              <img src="../../assets/renderly.png" alt="Renderly" class="mobile-sponsor-img" />
            </a>
            <a href="https://freedom-fridays.vercel.app/" target="_blank" rel="noopener" class="mobile-sponsor-item mobile-sponsor-text">
              <span>Freedom</span>
              <span>Fridays</span>
            </a>
          </div>
        </div>
      </div>
      </div>

      <aside class="sponsor-col sponsor-col--right">
        <a href="https://renderly-consultants.com/" target="_blank" rel="noopener" class="sponsor-item">
          <img src="../../assets/renderly.png" alt="Renderly" class="sponsor-img" />
        </a>
        <a href="https://freedom-fridays.vercel.app/" target="_blank" rel="noopener" class="sponsor-item sponsor-text">
          <span>Freedom</span>
          <span>Fridays</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100076222208564" target="_blank" rel="noopener" class="sponsor-item">
          <img src="../../assets/rms_logo.jpg" alt="RMS Kart and Performance" class="sponsor-img" />
        </a>
      </aside>
    </div>
  </div>
</template>

<script>
import Tagline from '../../components/KBPTagline.vue'

export default {
  name: 'NmpRace2026Race2',
  components: { Tagline }
}
</script>

<style scoped>
.post-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.post-layout {
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.post-container {
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
}

.sponsor-col {
  width: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-self: stretch;
}

.sponsor-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.5rem;
  transition: opacity 0.2s;
}

.sponsor-item:hover {
  opacity: 0.7;
}

.sponsor-img {
  width: 80px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.sponsor-text {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--kb-black);
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.6;
}

@media (max-width: 1100px) {
  .sponsor-col {
    display: none;
  }
}

.post-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(51, 51, 51, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--kb-red);
}

.post-header {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.9) 100%);
  color: var(--kb-cream);
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
}

.post-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.post-series,
.post-date {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;
}

.post-series {
  color: var(--kb-red);
  opacity: 1;
}

.post-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.post-subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  font-style: italic;
}

.post-hero {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 5px;
}

.post-hero-img {
  width: 315px;
  height: 210px;
  display: block;
  object-fit: cover;
  border-radius: 6px;
}

.post-hero-img--contain {
  object-fit: contain;
  background: #1a1a1a;
}

.post-content {
  padding: 2.5rem 2rem;
  color: var(--kb-black);
}

.post-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: var(--kb-black);
  opacity: 0.85;
  border-left: 4px solid var(--kb-red);
  padding-left: 1.25rem;
}

.session {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(51, 51, 51, 0.08);
}

.session:last-of-type {
  border-bottom: none;
}

.session-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.session-label {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--kb-black);
}

.session-result {
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  letter-spacing: 0.03em;
}

.session-result.time {
  background: rgba(220, 20, 60, 0.1);
  color: var(--kb-red);
  border: 1px solid rgba(220, 20, 60, 0.3);
}

.session-result.no-time,
.session-result.dns {
  background: rgba(51, 51, 51, 0.08);
  color: rgba(51, 51, 51, 0.6);
  border: 1px solid rgba(51, 51, 51, 0.15);
}

.session-result.place {
  background: rgba(51, 51, 51, 0.06);
  color: var(--kb-black);
  border: 1px solid rgba(51, 51, 51, 0.2);
}

.session p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--kb-black);
  opacity: 0.85;
  margin: 0;
}

.post-footer {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(51, 51, 51, 0.1);
}

.back-link {
  color: var(--kb-red);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.back-link:hover {
  opacity: 0.75;
}

.mobile-sponsors {
  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(51, 51, 51, 0.1);
}

.mobile-sponsor-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem;
  min-height: 44px;
  min-width: 44px;
  transition: opacity 0.2s;
}

.mobile-sponsor-item:hover {
  opacity: 0.7;
}

.mobile-sponsor-img {
  width: 60px;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
}

.mobile-sponsor-text {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--kb-black);
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.6;
}

@media (max-width: 1100px) {
  .mobile-sponsors {
    display: flex;
  }
}

@media (max-width: 768px) {
  .post-layout {
    padding: 0.75rem 0.5rem;
  }

  .post-card {
    border-radius: 14px;
  }

  .post-header {
    padding: 1.75rem 1.25rem 1.25rem;
  }

  .post-meta {
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .post-series,
  .post-date {
    font-size: 0.75rem;
  }

  .post-title {
    font-size: 1.6rem;
  }

  .post-subtitle {
    font-size: 0.95rem;
  }

  .post-hero {
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
  }

  .post-hero-img {
    width: 100%;
    max-width: 340px;
    height: 200px;
  }

  .post-content {
    padding: 1.5rem 1.25rem;
  }

  .post-intro {
    font-size: 1rem;
    margin-bottom: 1.75rem;
    padding-left: 1rem;
  }

  .session {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .session-label {
    font-size: 1.1rem;
  }

  .session p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .post-footer {
    margin-top: 1.75rem;
  }

  .back-link {
    display: block;
    text-align: center;
    padding: 0.75rem;
    border: 1.5px solid var(--kb-red);
    border-radius: 8px;
  }

  .mobile-sponsors {
    padding: 0 1.25rem 1.5rem;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .post-layout {
    padding: 0.5rem 0;
  }

  .post-card {
    border-radius: 0;
  }

  .post-header {
    padding: 1.5rem 1rem 1rem;
  }

  .post-title {
    font-size: 1.35rem;
  }

  .post-content {
    padding: 1.25rem 1rem;
  }

  .mobile-sponsors {
    padding: 0 1rem 1.25rem;
  }
}
</style>
