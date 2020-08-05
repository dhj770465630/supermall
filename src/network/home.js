
import {request} from './request'

export function getHomes() {
  return request({
    url:'/home/multidata'
  })
}