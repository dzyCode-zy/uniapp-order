import { http } from "@/utils/http";
import type { bannerItem, classifyItems, hotList } from '@/types/home'
// 投放的区域位置distributionSite，1 放在主页，2 放在商品页
export const getHomeBannerApi = (distributionSite = 1) => {
    return http<bannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite,// 接口定义的入参
        }
    })
}

export const getClassifyApi = () => {
    return http<classifyItems[]>({
        method: 'GET',
        url: '/home/category/mutli'

    })
}

export const getHotApi = () => {
    return http<hotList[]>({
        method: 'GET',
        url: '/home/hot/mutli'
    })
}
