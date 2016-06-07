/*
* @Author: chengfubei
* @Date:   2016-06-07 12:03:07
* @Last Modified by:   chengfubei
* @Last Modified time: 2016-06-07 12:04:21
*/

'use strict';
/*页面截取字符长度*/
/*遍历对应元素查看文本长度*/
(function($) {
    jQuery.fn.ellipsis = function(maxlength) {
        this.each(function() {
            if ($(this).text().length > maxlength) {
                $(this).text($(this).text().substring(0, maxlength))
                $(this).html($(this).html() + '...')
            }
        });
    }
})(jQuery);