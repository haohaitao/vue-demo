### get_page

## 描述
返回某个页面的数据（例如关于）

## 请求
方式：http get

url：/api/get_page

Content-Type : application/json

## 必选参数
    {
    	id:80
    } 

## 可选参数
    {
        无
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok",…}
        page:{id: 80, type: "page", slug: "comments", url: "https://www.haoht123.com/comments.html",…}
        status:"ok"
    ```
    失败返回
    ```
        {"status":"error","error":"Include 'id' or 'slug' var in your request."}
    ```
## 注释
    
    无
