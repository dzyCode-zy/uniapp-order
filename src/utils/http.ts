// 添加拦截器
// 拦截request 请求
// 拦截uploadFile 文件上传

import { useMemberStore } from "@/stores";

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
        // console.log(options.timeout)
        // 3.添加小程序端请求标识 通常用于标识客户端来源
        //     小程序端： source - client: mini - program
        // •	Web 端： source - client: web
        // •	App 端： source - client: mobile - app

        options.header = {
            ...options.header,
            'source-client': "miniapp"
        }

        // 4.添加 token，请求头标识 // 登入成功后获取  存在profile中

        const store = useMemberStore()
        const token = store.profile?.token
        console.log(token)
        if (token) {
            options.header.Authorization = token
        }
    }

}
// 添加拦截器

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

