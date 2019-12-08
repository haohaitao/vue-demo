### v

## 描述
返回控制器以及方法和一串随机数

## 请求
方式：http get

url：/api/get_nonce

Content-Type : application/json

## 必选参数
    {
    	method：get_post
        controller:core
    } 

## 可选参数
    {
        无
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", controller: "core", method: "get_post", nonce: "28e6b5368f"}
        controller:"core"
        method:"get_post"
        nonce:"28e6b5368f"
        status:"ok"
    ```
    失败返回
    ```
        {"status":"error","error":"Include 'controller' and 'method' vars in your request."}
    ```
## 注释
    
    无
