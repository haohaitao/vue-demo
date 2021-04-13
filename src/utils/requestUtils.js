/*
 * @Description  : 请求方法
 * @Author       : pacino
 * @Date         : 2021-04-13 10:36:54
 * @LastEditTime : 2021-04-13 13:52:13
 * @LastEditors  : pacino
 */
import axios from 'axios';

const pro = true; //是否为生产环境

const proUrl = 'https://www.haoht123.com';
const testUrl = '';
const apiURL = pro ? proUrl : testUrl;
const http = axios.create({
    baseURL: apiURL,
    timeout: 10000,
    headers: { ['Authorization']: 'Bearer ' + new Date().valueOf() },
});

/**
 * @Description GET请求
 * @param url 请求地址
 * @param params 请求参数  默认 {}
 */
export const get = (url, params = {}) => {
    return http.get(url, { params });
};

/**
 * @Description POST请求
 * @param url 请求地址
 * @param data 请求参数 默认 {}
 */
export const post = (url, params = {}) => {
    return http.post(url, { params });
};

export { apiURL as baseURL };
