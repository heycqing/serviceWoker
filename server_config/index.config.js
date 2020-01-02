module.exports = {
    // 基本配置
    baseConfig: {
        prot:8888,
        www: './src/sw',
        tureUrl: function(e){
            return this.www + e;
        }
    },
    //添加MIME类型
    MIME_TYPE: {
        css: "text/css",
        gif: "image/gif",
        html: "text/html",
        ico: "image/x-icon",
        jpeg: "image/jpeg",
        jpg: "image/jpeg",
        js: "text/javascript",
        json: "application/json",
        pdf: "application/pdf",
        png: "image/png",
        svg: "image/svg+xml",
        swf: "application/x-shockwave-flash",
        tiff: "image/tiff",
        txt: "text/plain",
        wav: "audio/x-wav",
        wma: "audio/x-ms-wma",
        wmv: "video/x-ms-wmv",
        xml: "text/xml"
    },
    isImg: [
        'jpeg',
        'jpg',
        'png',
        'gif',
        'svg'
    ]
} 

