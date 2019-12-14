// 包含多个接口请求函数模块
// 1、根据经纬度获取位置详情
import ajax from "./ajax";
// 1、根据经纬度获取位置详情
export const reqAddress=(longitude, latitude)=>ajax(`/position/${latitude},${longitude}`)
// 2. 获取食品分类列表
export const ss=()=>ajax('/index_category')
// 3. 根据经纬度获取商铺列表
export const aa=({longitude,latitude})=>ajax('/shops',{params:{longitude, latitude}})

