import * as config from './config'

let WebsocketUrl = config.default.WebsocketUrl;
export function initWebsocket() {   //websocket入口
    // let token = sessionStorage.getItem('token')
    if ('WebSocket' in window){
        const wsurl = WebsocketUrl;   //wss地址
        var websock = new WebSocket(wsurl);//这里面的this都指向vue
        if(websock.readyState !== 1){
            websock.onopen = websocketopen;
            websock.onmessage = websocketonmessage;
            websock.onclose = websocketclose;
            websock.onerror = websocketerror; 
        }
    }else {
        alert('当前浏览器 Not support websocket')
        }

    // 实例对象的onopen属性，用于指定连接成功后的回调函数。
function websocketopen(evt) {
    console.log("连接成功...onopen方法",evt)
}

// 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。    
function websocketonmessage(evt) {
    let chatObj = JSON.parse(evt.data)
    console.log('收到消息：',chatObj)
}

//实例对象的onerror属性，用于指定报错时的回调函数。   
function websocketerror(evt) {
    console.log("连接出现错误：",evt);
}

//实例对象的onclose属性，用于指定连接关闭后的回调函数 
function websocketclose(evt) {
    console.log('已关闭：',evt)
    }
}

  
  