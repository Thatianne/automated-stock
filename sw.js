importScripts('/automated-stock/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/automated-stock/_nuxt/5b0ac7fad5e39c9bc7e7.js",
    "revision": "4943634b91a14fd69edcf3fe9b5cef18"
  },
  {
    "url": "/automated-stock/_nuxt/93dfd0d646ad66074940.js",
    "revision": "c6d93680a0f9409ce5bfbdca4596a215"
  },
  {
    "url": "/automated-stock/_nuxt/96a1980a593993cdbaa3.js",
    "revision": "e924e9830f13a1c1908d8a631bf5a598"
  },
  {
    "url": "/automated-stock/_nuxt/ab920def13ab906ee7a5.js",
    "revision": "099a00d715f48ed249a7018fca2af9d1"
  },
  {
    "url": "/automated-stock/_nuxt/ae7ebe020462a9820f49.js",
    "revision": "fefeb6c814f60ed1a68546cbc6732bff"
  },
  {
    "url": "/automated-stock/_nuxt/c7e2d58a96ca574d307c.js",
    "revision": "2f8bd38320577240780f1369385e2374"
  }
], {
  "cacheId": "estoque",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/automated-stock/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/automated-stock/.*'), workbox.strategies.networkFirst({}), 'GET')
