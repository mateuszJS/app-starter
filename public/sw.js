if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,a,c)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}})).then(e=>{const s=c(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TVo7MO8Jblq14QXVHaEj4/_buildManifest.js",revision:"26c2e81b0fc0462d4132de36a9842954"},{url:"/_next/static/TVo7MO8Jblq14QXVHaEj4/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/TVo7MO8Jblq14QXVHaEj4/pages/_app.js",revision:"8c6e8c647f04a55054c0ac7ae682fcc6"},{url:"/_next/static/TVo7MO8Jblq14QXVHaEj4/pages/_error.js",revision:"7e8b901986ed793e93e9d7f7c4d0a4dc"},{url:"/_next/static/TVo7MO8Jblq14QXVHaEj4/pages/about.js",revision:"c3ad4fc3997f557bca045b8e407d7909"},{url:"/_next/static/TVo7MO8Jblq14QXVHaEj4/pages/index.js",revision:"3edec65844c1ad0fedfb64e90c18894c"},{url:"/_next/static/chunks/3dff6f7772235bb6aaa617b6dad30c1cfc488fca.25080cbaf19380786829.js",revision:"59b101f2db02ecfb430764fb6e2f0b28"},{url:"/_next/static/chunks/commons.020a96d8a8e71e9e3362.js",revision:"04f0577a5e9051f03506862353ab6be9"},{url:"/_next/static/chunks/framework.e84fa698c7ee940652bd.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/runtime/main-9685dd235c1fec741373.js",revision:"3b7c417ae69f59c0bdd341cff9d7afb5"},{url:"/_next/static/runtime/polyfills-b10afcedf826ebd862ad.js",revision:"73747fb253edba922d720d89d48a9ffa"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/icons/icon-128x128.png",revision:"6c56a4937309be207e137ea7653a2e94"},{url:"/icons/icon-144x144.png",revision:"b8e733e372e9587d1f9d38757cd5bba3"},{url:"/icons/icon-152x152.png",revision:"5e39fd7b53bdde0fa496ff5a750a7f3c"},{url:"/icons/icon-192x192.png",revision:"ae732dac2f1e56813b288f48844aa0c7"},{url:"/icons/icon-384x384.png",revision:"5cef59c2cc45f5131dfeb688def100b6"},{url:"/icons/icon-512x512.png",revision:"3952dc056a9ae8cc9e60df62895a260c"},{url:"/icons/icon-72x72.png",revision:"d55916033de519a9c5c21939f938bd7f"},{url:"/icons/icon-96x96.png",revision:"88a8cd227de484e69dd8ea383c75319d"},{url:"/manifest.json",revision:"edc91f6a23c4a26132f18478c8a20cd7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
