### get_tag_posts

## 描述
根据标签搜索文章

## 请求
方式：http get

url：/api/get_tag_posts

Content-Type : application/json

## 必选参数
    {
    	id:15 or slug:php学习
    } 

## 可选参数
    {
        page：1   //第几页
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", count: 10, pages: 2,…}
        count:10
        pages:2
        posts:[{id: 2666, type: "post",…},…]
        status:"ok"
        tag:{id: 222, slug: "php%e5%ad%a6%e4%b9%a0", title: "php学习", description: "", post_count: 12}
    ```
    失败返回
    ```
        {"status":"error","error":"Include 'id' or 'slug' var in your request."}
    ```
## 注释
    
    无
