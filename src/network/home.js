import { request } from "./request";

export function getHomeMuItidata(){
    return request({
        url:'/home/multidata'
    })
}