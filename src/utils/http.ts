// 添加拦截器
// 拦截request 请求
// 拦截uploadFile 文件上传


//TODO
// 1.非 http 开头的请求需要需要拼接地址
const baseURL: string = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        // 2.请求超时
        options.timeout = 10000
        console.log(options.timeout)

    }

}
// 添加拦截器

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

