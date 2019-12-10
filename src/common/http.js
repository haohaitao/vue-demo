import router from '@/router'
import axios from 'axios'

//请求拦截
// axios.interceptors.request.use(
// 	config => {
// 			Indicator.open();
// 			return config;
// 	},
// 	err => {
// 			return Promise.reject(err);
// 	});
// http 响应拦截器
// axios.interceptors.response.use(
// 	response => {
// 		Indicator.close(); 
// 		if(response.data.cscode == 10002){
// 				router.push('/login')
// 				sessionStorage.clear()
// 				localStorage.removeItem('login')
// 				MessageBox.alert('您的账号已在别处登录，\n请您重新登录！') 
// 		}else if(response.data.cscode == 10001){
// 				router.push('/login')
// 				sessionStorage.clear()
// 				localStorage.removeItem('login')
// 				MessageBox.alert( '您的账号登录已过期，\n请您重新登录！') 
// 		}
// 			return response;
// 	},
// 	error => {
// 		alert(JSON.stringify(error))
// 			return Promise.reject(error)   // 返回接口返回的错误信息
// 	});


export function get(uri, data, host) {
	let r_url = (host) ? (host+uri) : uri;
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