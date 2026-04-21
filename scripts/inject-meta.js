const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://koleczek-bellespowersport.com'
const DIST = path.join(__dirname, '../dist')

const routes = [
  {
    route: '/blog/2026/nmp-race-2',
    title: 'NMP Race 2: Survival, Setbacks, and a P8 | KB Powersport',
    description: 'A tough weekend turned into a solid result. Rebuilt, regrouped, and charged from P12 to a P8 finish with a 3-tenth gap at the line.',
    image: `${BASE_URL}/og-nmp-race-2.jpg`,
    type: 'article',
  },
]

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

for (const { route, title, description, image, type } of routes) {
  const url = `${BASE_URL}${route}`

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join('\n    ')

  const html = template
    .replace('<title>KB Powersport</title>', tags)

  const dir = path.join(DIST, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  console.log(`injected meta: ${route}`)
}
