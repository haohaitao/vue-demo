import axios from 'axios'

export function get(url, data, host) {
	let r_url = (host) ? (host+url) : url;
	return axios.get(r_url, {
		params: data
	});
}

export function postJson(uri, data, host) {
	return crossRequest(host,uri,"post",data);
}

function crossRequest(host,uri,method,data){
	if (!data) data = {};

	let r_url = (host) ? (host+uri) : uri;
	return axios({
		method: method,
		url: r_url,
		data: data,
		crossDomain: true, 
		xhrFields: {
				withCredentials: true
		},
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		}
	});
}

//获取时间
export function timestampToTimes(date) {
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = date.getDate() < 10 ?  + date.getDate()  : date.getDate() + '';
	return Y + '年' + M + '月' + D + '日'
}