const CACHE='rict-guide-v7';
const FILES=['./','./index.html','./favicon.svg','./favicon.ico','./apple-touch-icon.png','./styles.css','./data.js?v=20261124-hartford-transfer','./app.js?v=20261124-hartford-transfer','./providence.jpg','./hartford.jpg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('rict-guide-')&&k!==CACHE).map(k=>caches.delete(k)))))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).catch(()=>caches.match(event.request).then(cached=>cached||Response.error())))});
