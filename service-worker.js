self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open("pwa-cache").then((cache)=>{
            return caches.addAll([
                "/",
                "/index.html",
                "/styles.css",
                "/manifest.json",
                "/assets/favicon.png",
                "/about_us.html",
                "/contact_us.html",
                "/conversation.html",
                "/faq.html",
                "/guide.html",
                "/sealing.html"
            ]);
        })
    );
});

self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    );
});