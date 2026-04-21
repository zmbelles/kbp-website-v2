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
  {
    path: '/blog/2026/nmp-race-2',
    name: 'NmpRace2026Race2',
    component: NmpRace2026Race2,
    meta: {
      title: 'NMP Race 2: Survival, Setbacks, and a P8 | KB Powersport',
      description: 'A tough weekend turned into a solid result. Rebuilt, regrouped, and charged from P12 to a P8 finish with a 3-tenth gap at the line.',
      ogImage: 'https://koleczek-bellespowersport.com/img/Round_2_Zach.jpg',
      ogType: 'article',
    }
  },
  { path: '/pictures', name: 'Pictures', component: OurPictures },
  { path: '/pictures/2025', name: 'Pictures2025', component: OurPictures2025 },
  { path: '/sponsors', name: 'Sponsors', component: OurSponsors },
  { path: '/driver-profiles', name: 'DriverProfiles', component: DriverProfiles },
]

const BASE_URL = 'https://koleczek-bellespowersport.com'

const DEFAULT_META = {
  title: 'KB Powersport',
  description: 'Driven by passion. Defined by precision. Follow KB Powersport through the 2026 karting season.',
  ogImage: `${BASE_URL}/img/logo.png`,
  ogType: 'website',
}

function setMeta(tag, attr, value) {
  let el = document.querySelector(`meta[${attr}="${tag}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, tag)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const m = { ...DEFAULT_META, ...to.meta }

  document.title = m.title

  setMeta('description', 'name', m.description)
  setMeta('og:title', 'property', m.title)
  setMeta('og:description', 'property', m.description)
  setMeta('og:image', 'property', m.ogImage)
  setMeta('og:type', 'property', m.ogType)
  setMeta('og:url', 'property', `${BASE_URL}${to.path}`)
  setMeta('twitter:card', 'name', 'summary_large_image')
  setMeta('twitter:title', 'name', m.title)
  setMeta('twitter:description', 'name', m.description)
  setMeta('twitter:image', 'name', m.ogImage)
})

export default router
