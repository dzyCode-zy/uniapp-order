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

//请求函数
// @param UniApp.RequestOptions
// @return promise
// 1.返回一个 promise对象
// 2.请求成功
//   提取核心数据
//   添加类型，支持泛型
// 3.请求失败
//   网络错误
//   401 错误 未提供有效的认证凭据而被服务器拒绝。通常发生在需要身份验证的 API 请求中
//   其他错误
interface data<T> {
    code: string,
    msg: string,
    data: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<data<T>>((resolve, rejects) => {
        uni.request({
            ...options,
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as data<T>)

                } else if (res.statusCode === 401) {
                    // 校验错误
                    const store = useMemberStore()
                    store.clearProfile()
                    // 跳转到登入页面
                    uni.navigateTo({ url: '/pages/login/login' })
                    rejects(res)
                } else {
                    uni.showToast({
                        title: (res.data as data<T>).msg || '请求错误',
                        duration: 2000,
                        icon: 'none'
                    })


                }
            },
            fail(error) {
                uni.showToast({
                    title: '网络错误',
                    duration: 2000,
                    icon: 'none'
                })
                // 请求错误
                rejects(error)


            }

        })

    })
}
