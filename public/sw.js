self.addEventListener("install", () => {
    console.log("Service Worker installed");
});

self.addEventListener("activate", () => {
    console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return (
                res ||
                fetch(event.request).then((response) => {
                    return caches.open("v1").then((cache) => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                })
            );
        })
    );
});
