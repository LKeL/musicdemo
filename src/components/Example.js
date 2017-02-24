import React from 'react';

const Example = () => {
  return (
    <div>
      Example
    </div>
  );
};

Example.propTypes = {
};

export default Example;


function XMLHttpRequest() {
    var XHR = null;
    if (window.XMLHttpRequest) {
    // 非IE内核
        XHR = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE内核,这里早期IE的版本写法不同,具体可以查询下
        XHR = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        XHR = null;  
    }
    return XHR;
}

function AJAX() {
    var xhr = XMLHttpRequest();
    xhr.open("GET", "ajaxServer.action");
    xhr.onreadystatechange = function () {
        // readyState值说明
        // 0,初始化,XHR对象已经创建,还未执行open
        // 1,载入,已经调用open方法,但是还没发送请求
        // 2,载入完成,请求已经发送完成
        // 3,交互,可以接收到部分数据

        // status值说明
        // 200:成功
        // 404:没有发现文件、查询或URl
        // 500:服务器产生内部错误
        if (XHR.readyState == 4 && XHR.status == 200) {
            // 这里可以对返回的内容做处理
            // 一般会返回JSON或XML数据格式
            console.log(XHR.responseText);
            // 主动释放,JS本身也会回收的
            XHR = null;
        }
    };
    xhr.send();
}
