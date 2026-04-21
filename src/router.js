import { createRouter, createWebHistory } from 'vue-router'
import OurHome from './views/HomePage.vue'
import OurStory from './views/OurStory.vue'
import OurBlog from './views/OurBlog.vue'
import OurPictures from './views/OurPictures.vue'
import OurPictures2025 from './views/OurPictures2025.vue'
import OurSponsors from './views/OurSponsors.vue'
import DriverProfiles from './views/DriverProfiles.vue'
import NmpRace2026Race2 from './views/blog/NmpRace2026Race2.vue'

const routes = [
  { path: '/', name: 'Home', component: OurHome },
  { path: '/story', name: 'Story', component: OurStory },
  { path: '/blog', name: 'Blog', component: OurBlog },
  { path: '/blog/2026/nmp-race-2', name: 'NmpRace2026Race2', component: NmpRace2026Race2 },
  { path: '/pictures', name: 'Pictures', component: OurPictures },
  { path: '/pictures/2025', name: 'Pictures2025', component: OurPictures2025 },
  { path: '/sponsors', name: 'Sponsors', component: OurSponsors },
  { path: '/driver-profiles', name: 'DriverProfiles', component: DriverProfiles },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
