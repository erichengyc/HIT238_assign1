const staticCache = 'static-cache';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/materialize.min.js',
    '/css/materialize.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons'

]

// install process
self.addEventListener('install', e => {
    e.wa
    caches.open(staticCache).then(cache => {
        cache.addAll(assets)
    })
})

// activate process
self.addEventListener('activate', e => {
    console.log('sw is activated')
})

self.addEventListener('fetch', e=>{
    console.log('sw fetch event', e)
})