### get_post

## 描述
搜索文章接口（完全匹配）

## 请求
方式：http get

url：/api/get_post

Content-Type : application/json

## 必选参数
    {
    	id:404 or slug:从输入网址到页面呈现都发生了什么？
    } 

## 可选参数
    {
        page：1   //第几页
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", post: {id: 404, type: "post",…}, previous_url: "https://www.haoht123.com/381.html",…}
        next_url:"https://www.haoht123.com/426.html"  //下篇文章地址
        post:{id: 404, type: "post",…}
        previous_url:"https://www.haoht123.com/381.html" //上篇文章地址
        status: "ok"
    ```
    失败返回
    ```
        {"status":"error","error":"Not found."}
    ```
## 注释
    
    无
