"use strict"
if(navigator.serviceWorker){
    window.addEventListener('load',function(){
        // 注册service Woker事件；
        navigator.serviceWorker.register('./sw.js').then(registeration => {
            console.log('执行注册事件！')
           
        }).catch(error => {
            console.log('错误：',error);
        })
    })
   
}

const CACHE_NAME = 'service cache by cqing';
const urlToCache =[
    '/sw/',
    '/sw/js/main.js',
    '/sw/css/main.css',
    '/sw/img/test.png'
]

// 安装事件
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(urlToCache)
        })
    )
})

// 更新事件
self.addEventListener('fetch',function(event){
    // 请求缓存并且响应;
    event.respondWith(
        caches.match(event.request).then(function(res){
            if(response){
            console.log('响应！')
                
                return res;
                
            }
            
            return fetch(event.request)
        })
    )
})

