<template>
  <div class="driver-profiles">
    <Tagline />
    <div class="profiles-container">
      <h1 class="profiles-title">Driver Profiles</h1>

      <div class="profiles-grid">
        <!-- Zach -->
        <div class="profile-card">
          <div class="profile-image">
            <img src="../assets/zachphoto.png" alt="Zachary Belles" />
          </div>
          <div class="profile-content">
            <h2 class="profile-name">Zachary Belles #24</h2>
            <p class="profile-meta">Yorkville, IL • Software Engineer • Ignite Sr</p>

            <div class="profile-bio">
              <p>
                Hailing from <strong>Yorkville, Illinois</strong>, Zachary Belles is a
                <strong>software engineer by trade</strong> and a <strong>racer by passion</strong>.
                With just one year of racing experience, Zach has already made a strong impression on
                the circuit — earning <strong>8 podium finishes</strong> and <strong>3 wins</strong> in
                his debut season, including a <strong>6-hour endurance race win with Alex</strong>.
              </p>

              <p>
                Growing up, Zach idolized <strong>Jeff Gordon</strong>, whose precision and consistency
                inspired his own approach behind the wheel. These days, he draws motivation from
                <strong>Max Verstappen’s “simply lovely” performance</strong> and often compares his
                driving style to that of Verstappen as well.
              </p>

              <p>
                Zach’s journey in motorsport is just beginning. His sights are set on climbing the local
                karting ranks — progressing from <strong>Ignite Senior</strong> to
                <strong>206 Senior</strong>, then into <strong>KA100</strong>, and ultimately aiming to
                compete in <strong>Spec BMW</strong> through <strong>SCCA</strong> or
                <strong>NASA</strong>. With a sharp mind for engineering and a growing list of results,
                Zach aims to be the face of <strong>passion and precision</strong>.
              </p>
            </div>
          </div>
        </div>

        <!-- Alex -->
				<div class="profile-card">
					<div class="profile-image-alex">
						<img src="../assets/alexphoto.png" alt="Alex 'Koolaid Man' Koleczek" />
					</div>
					<div class="profile-content">
						<h2 class="profile-name">Alex Koleczek #11</h2>
						<p class="profile-meta">Tinley Park, IL • EMT in Training • 206 Sr</p>

					<div class="profile-bio">
						<p>
							<strong>Alex’s passion for motorsport</strong> began six years ago when he first climbed into a <strong>cadet kart</strong> at 
							<strong>Accelerate Indoor Speedway</strong> — now part of <strong>K1 Speed</strong>. That first experience behind the wheel 
							sparked a deep obsession with karting and racing as a whole.
						</p>

						<p>
							In <strong>2025</strong>, Alex joined the <strong>Rental Championship at Norway Motorsports Park</strong>, marking his first full outdoor 
							karting season. Despite limited experience on outdoor circuits, he quickly found speed and consistency — earning an 
							<strong>impressive P3 finish in the championship</strong>, even after missing the final rounds due to career commitments.
						</p>

						<p>
							Now, Alex is focused on pushing his motorsport journey further. His sights are set on moving from <strong>4-stroke</strong> 
							into <strong>2-stroke competition</strong>, with long-term goals of reaching the top levels of karting and eventually transitioning 
							into cars. Through every challenge and milestone, Alex keeps one philosophy at the core of his racing journey: 
							<em><strong>“Always moving forward.”</strong></em>
						</p>
					</div>
					</div>
				</div>
      </div>
    </div>
  </div>
</template>
<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'DriverProfiles',
  components: { Tagline },
  data() {
    return {}
  }
}
</script>
<style scoped>
.driver-profiles {
  background: var(--kb-cream);
  min-height: 100vh;
  text-align: center;
  padding: 3rem 1rem;
}

.profiles-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.profiles-title {
  color: var(--kb-black);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Grid layout */
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

/* Profile Cards */
.profile-card {
  background: var(--kb-black);
  color: var(--kb-cream);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.profile-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

/* Headshot */
.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--kb-red);
  margin-bottom: 1.2rem;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.25);
}
/* Headshot */
.profile-image-alex img {
  width: 180%;
  height: 180%;
  object-fit: cover;
	margin-left: -5rem;
	margin-top: -4rem;
}
.profile-image-alex {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--kb-red);
  margin-bottom: 1.2rem;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.25);
}
.profile-image img {
  width: 120%;
  height: 120%;
  object-fit: cover;
	margin-left: -.75rem;
	margin-top: -1rem;
}

/* Text */
.profile-name {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--kb-red);
  margin-bottom: 0.2rem;
}

.profile-meta {
  font-size: 0.95rem;
  color: #bbb;
  margin-bottom: 1.4rem;
}

.profile-bio {
  text-align: justify;
  font-size: 1rem;
  line-height: 1.6;
  color: #f3f3f3;
}

.profile-bio strong {
  color: var(--kb-cream);
}

/* Responsive */
@media (max-width: 900px) {
  .profiles-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    padding: 1.6rem;
  }

  .profile-name {
    font-size: 1.6rem;
  }

  .profile-bio {
    font-size: 0.95rem;
  }
}
</style>
