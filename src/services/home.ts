import { http } from "@/utils/http";
import type {
    bannerItem,
    classifyItems,
    hotItems,
    guessLikeItems,

} from "@/types/home";
import type { GuessItem, pageParams } from '@/types/global'
// 投放的区域位置distributionSite，1 放在主页，2 放在商品页
export const getHomeBannerApi = (distributionSite = 1) => {
    return http<bannerItem[]>({
        method: "GET",
        url: "/home/banner",
        data: {
            distributionSite, // 接口定义的入参
        },
    });
};

export const getClassifyApi = () => {
    return http<classifyItems[]>({
        method: "GET",
        url: "/home/category/mutli",
    });
};

export const getHotApi = () => {
    return http<hotItems[]>({
        method: "GET",
        url: "/home/hot/mutli",
    });
};

export const getGuessLikeApi = (data: pageParams) => {
    return http<guessLikeItems<GuessItem>>({
        method: "GET",
        url: "/home/goods/guessLike",
        data
    });
};
