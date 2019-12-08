### get_category_posts

## 描述
根据分类搜索文章

## 请求
方式：http get

url：/api/get_category_posts

Content-Type : application/json

## 必选参数
    {
    	slug=php  or id=6
    } 

## 可选参数
    {
        page：1   //第几页
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", count: 2, pages: 2,…}
        category:{id: 221, slug: "php", title: "php", description: "", parent: 212, post_count: 12}
        count:2
        pages:2
        posts:[{id: 2618, type: "post", slug: "php%e5%9f%ba%e7%a1%80%e5%ad%a6%e4%b9%a02",…},…]
        status:"ok"
    ```
    失败返回
    ```
        {"status":"error","error":"Include 'id' or 'slug' var in your request."}
    ```
## 注释
    
    无
