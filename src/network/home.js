//所有对首页的请求i
import { request } from "./request";

export function getHomeMuItidata(){
    return request({
        url:'/home/multidata'
    })
}

//获取首页，针对三个不同的概况获取数据需要传参数，不同的类型还有对应的页面
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

