### get_recent_posts 

## 描述
获取最新文章接口

## 请求
方式：http get

url：/api/get_recent_posts

Content-Type : application/json

## 必选参数
    {
    	无
    } 

## 可选参数
    {

    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", count: 10, count_total: 152, pages: 16,…}
        count:10
        count_total:152
        pages:16
        posts:[{id: 2670, type: "post",…}, {id: 2666, type: "post",…},…]
        status:"ok"
    ```

## 注释
    
    无
