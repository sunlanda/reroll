/*
 * @Author: chengfubei
 * @Date:   2016-06-07 14:21:03
 * @Last Modified by:   chengfubei
 * @Last Modified time: 2016-06-07 16:53:23
 */

'use strict';
/*元素垂直居中*/
/*重点 rezise window的宽高减去元素宽高 除以二作为padding */
;
(function() {
    jQuery.fn.center = function(options) {
    	/*设定元素的参数*/
        var options = $.extend({
            inside: window,
            transition: 0,
            minX: 0,
            minY: 0,
            withScrolling: true,
            vertical: true,
            horizontal: true
        }, options);

        return this.each(function() {
            var props = { position: 'absolute' };
            if (options.vertical) {
                var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                top = (top > options.minY ? top : options.minY);
                $.extend(props, { top: top + 'px' })
                    //将top高度值存入props
            }
            if (options.horizontal) {
                var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                left = (left > options.minX ? left : options.minX);
                $.extend(props, { left: left + 'px' })
                    //将left左侧距离存入props
            }
            //如果设置transition效果就是用animate过渡
            if (options.transition) $(this).animate(props, options.transition)
            else $(this).css(props)
            return $(this)
        });
    }
})(jQuery);

/*(function(){
	$.fn.extend({
		center:function(options){
			
		}
	});
})(jQuery);*/
