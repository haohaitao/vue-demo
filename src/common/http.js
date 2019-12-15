import axios from 'axios'

export function get(url, data, host) {
	let r_url = (host) ? (host+url) : url;
	// handleUserMac(data);
	return axios.get(r_url, {
		params: data
	});
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

//拿地址栏参数，缺省为空
export function getUrlKeyT(name) {
	return (
	  decodeURIComponent(
		(new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
		  location.href
		) || [, ""])[1].replace(/\+/g, "%20")
	  ) || ""
	);
  }

export function postJson(uri, data, host) {
	return crossRequest(host,uri,"post",data);
}

export function putJson(uri, data, host) {
	return crossRequest(host,uri,"put",data);
}

//时间戳转时间 
export function timestampToTimes(timestamp) {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ?  + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = date.getDate() < 10 ?  + date.getDate()  : date.getDate() + '';
	var h = date.getHours() + ':';
	var m = date.getMinutes() ;
	
	return Y + M + D
}