/*
 * @Description:
 * @Author: pacino
 * @Date: 2022-06-29 17:05:38
 * @LastEditTime: 2022-07-09 21:20:28
 * @LastEditors: pacino
 */
import axios from "axios";
import { Notification } from "element-ui";
const service = axios.create({
    timeout: 10000, // request timeout
});

// respone拦截器
service.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            Notification({
                title: "提示",
                message: "数据异常，请稍后重试",
                type: "error",
            });
            return Promise.reject(response || "error");
        }
    },
    (error) => {
        Notification({
            title: "提示",
            message: "数据异常，请稍后重试",
            type: "error",
        });
        return Promise.reject(error);
    }
);

export function get(url, data, host) {
    let r_url = host ? host + url : url;
    return service.get(r_url, {
        params: data,
    });
}

export function postJson(uri, data, host) {
    return crossRequest(host, uri, "post", data);
}

function crossRequest(host, uri, method, data) {
    if (!data) data = {};

    let r_url = host ? host + uri : uri;
    return service({
        method: method,
        url: r_url,
        data: data,
        crossDomain: true,
        xhrFields: {
            withCredentials: true,
        },
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
}

//获取时间
export function timestampToTimes(date) {
    var Y = date.getFullYear();
    var M =
        date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    var D = date.getDate() < 10 ? +date.getDate() : date.getDate() + "";
    return Y + "年" + M + "月" + D + "日";
}
