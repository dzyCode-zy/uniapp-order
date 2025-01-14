
// 类型说明文件，定义获取到的轮播图数据的类型
export type bannerItem = {
    /** 跳转链接 */
    hrefUrl: string
    /** id */
    id: string
    /** 图片链接 */
    imgUrl: string
    /** 跳转类型 */
    type: number

}

// 定义分类接口的泛型

export type classifyItems = {
    id: string,
    name: string,
    icon: string


}

export type hotItems = {
    alt: string,
    id: string,
    pictures: string[]
    target: string
    title: string
    type: number
}
