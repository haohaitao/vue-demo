### get_category_index

## 描述
返回分类的索引

## 请求
方式：http get

url：/api/get_category_index

Content-Type : application/json

## 必选参数
    {
    	无
    } 

## 可选参数
    {
        无
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", count: 12,…}
        categories:[{id: 22, slug: "git", title: "Git", description: "", parent: 4, post_count: 2},…]
        count:12
        status:"ok"
    ```
    失败返回
    ```
        无
    ```
## 注释
    
    无
