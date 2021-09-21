// install process
self.addEventListener('install', e => {
    console.log('sw is installed')
})

// activate process
self.addEventListener('activate', e => {
    console.log('sw is activated')
})