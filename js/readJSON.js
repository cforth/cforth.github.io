
    //保存一个json文件访问的URL作为一个变量
    let requestURL = 'js/dictionary.json';
    //创建一个HTTP请求对象
    let request = new XMLHttpRequest();
    //使用open（）打开一个新请求
    request.open('GET', requestURL);
    //设置XHR访问JSON格式数据，然后发送请求
    // request.responseType = 'json';
    //设置XHR访问text格式数据
    request.responseType = 'text';
    request.send();
 
    //处理来自服务器的数据
    request.onload = function() {
        let dictText = request.response;
        dict = JSON.parse(dictText);
    };

