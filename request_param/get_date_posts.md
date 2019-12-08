### get_date_posts

## 描述
根据日期搜索文章

## 请求
方式：http get

url：/api/get_date_posts

Content-Type : application/json

## 必选参数
    {
    	date:2019-01
    } 

## 可选参数
    {
        page：1   //第几页
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", count: 10, count_total: 11, pages: 2,…}
        count:10
        count_total:11
        pages:2
        posts:[{id: 2136, type: "post", slug: "vue%e4%b8%ad%e7%9a%84%e6%9d%a1%e4%bb%b6%e6%b8%b2%e6%9f%93",…},…]
        status:"ok"
    ```
    失败返回
    ```
        {"status":"error","error":"Include 'date' var in your request."}
    ```
## 注释
    
    无
