### get_search_results

## 描述
搜索接口（模糊匹配）

## 请求
方式：http get

url：/api/get_search_results

Content-Type : application/json

## 必选参数
    {
    	search:vue
    } 

## 可选参数
    {
        page：1   //第几页
    } 

## 响应
    Content-Type : application/json
    成功返回
    ```
        {status: "ok", count: 10, count_total: 34, pages: 4,…}
        count:10
        count_total:34
        pages:4
        posts:[{id: 2576, type: "post",…}, {id: 2378, type: "post",…}, {id: 2372, type: "post",…},…]
        status:"ok"
    ```
    失败返回
    ```
        {"status":"error","error":"Include 'search' var in your request."}
    ```
## 注释
    
    无
