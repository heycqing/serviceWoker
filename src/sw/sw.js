var CACHE_NAME_ = 'service-cache-by-cqing-v1';
var urlToCache = [
    '',
    'js/main.js',
    'css/main.css',
    'img/test.png'
]

if ('serviceWorker' in navigator) {
    // 注册service Woker事件；
    navigator.serviceWorker.register('./sw.js').then(data => {
        console.log('执行注册事件！', data)
    }).catch(error => {
        console.log('错误：', error);
    })
}
// console.log('pppp')
// 安装事件
self.addEventListener('install', function (event) {
    console.log('jjjjj')
    event.waitUntil(
        caches.open(CACHE_NAME_).then(function (cache) {
            console.log('hahaha')
            return cache.addAll(urlToCache)
        }).catch(e => {
            console.log(e)
        })
    )
})

// // 更新事件
self.addEventListener('fetch',function(event){
    // 请求缓存并且响应;
    console.log('fetch')
    event.respondWith(
        caches.match(event.request).then(function(res){
            if(res){
            console.log('响应！')
            console.log(res)
                return res;

            }

            return fetch(event.request)
        })
    )
})

