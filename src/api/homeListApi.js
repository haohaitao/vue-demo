/*
 * @Description  : 首页请求相关接口
 * @Author       : pacino
 * @Date         : 2021-04-13 10:42:07
 * @LastEditTime : 2021-04-13 10:47:08
 * @LastEditors  : pacino
 */
import { get } from '@/utils/requestUtils';
export const posts = params => {
    return get('/wp-json/wp/v2/posts', params);
};
