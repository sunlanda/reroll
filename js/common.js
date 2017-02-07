/**
 * Created by chengfubei on 2017/2/7.
 */


(function () {

    var comm_fun = {
        //获取哈希名称
        getHashName: function () {
            var _hash_name = window.location.hash ? window.location.hash.substr(1) : window.location.hash.substr(1);
            return _hash_name;
        },
        //获取文件名称
        getFileName: function () {
            var _file_name = location.pathname.lastIndexOf("/") >= location.pathname.length - 1 ? "index" : location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
            return _file_name;
        },
        //打开页面
        open_win: function (config) {
            location.href = config.url;
        },
        //获取链接中参数
        GetQueryString : function (name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return "";
        },
        //判空
        isNull : function(name){
            if(name == "" || name == undefined || name == null)return true;
            return false;
        },
        //判空
        isNotNull : function(name){
            return !comm_fun.isNull(name);
        },
        //删空格
        trim : function(str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },
    };
    var util = {

        ajax : function(settings){
            settings.type = (settings.type && settings.type == "POST")?"POST":"GET";
            var load;
            if(settings.hideLoading)load = console.log("数据加载中...");

            $.ajax({
                url : settings.url,
                type : settings.type,
                cache:false,
                data : settings.params,
                dataType : "json",
                success : function(result){
                    if (settings.successCallback) {
                        settings.successCallback(result);
                        return;
                    }
                },
                error : function(){
                    if(settings.failureCallback && typeof settings.failureCallback == "function"){
                        settings.failureCallback();
                    }
                    else{
                        //if(!settings.hideLoading) {
                        if(load)$(load).fadeOut();
                        //}
                        console.log(JSON.stringify(settings));
                    }
                },
                complete : function(){
                    if(load)$(load).fadeOut();
                }
            });

        },
        post : function(url, params, callBack, failureCallback, hideLoading) {
            util.ajax({
                url : url,
                type : "POST",
                params : params,
                successCallback : callBack,
                failureCallback : failureCallback,
                hideLoading : hideLoading
            });
        },
        get : function(url, params, callBack, failureCallback , hideLoading) {
            util.ajax({
                url : url,
                type : "GET",
                params : params,
                successCallback : callBack,
                failureCallback : failureCallback,
                hideLoading : hideLoading
            });
        },
        //报错信息行数
        console : function() {
            var method;
            var noop = function(){};
            var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
            var length = methods.length;
            var console = (window.console = window.console || {});
            while (length--) {
                method = methods[length];
                // Only stub undefined methods.
                if (!console[method]) {
                    console[method] = noop;
                }
            }
        }
    };

    function testError(){
        var errorMsg = "";
        errorMsg += "错误信息：" + arguments[0];
        errorMsg += "\n错误行数：" + arguments[2];
        errorMsg += "\n错误列数：" + arguments[3];
        errorMsg += "\nURL信息：" + arguments[1];
        errorMsg += "\n错误详细：" + arguments[4];
        alert(errorMsg);
        window.onerror=null;
        return true;
    }

    window.comm_fun = comm_fun;
    window.onerror = testError;
    window.util = util;
    window.util.console();

})();
