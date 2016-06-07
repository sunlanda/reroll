/*
* @Author: chengfubei
* @Date:   2016-06-06 11:35:35
* @Last Modified by:   chengfubei
* @Last Modified time: 2016-06-06 11:36:18
*/

'use strict';

; (function ($) {
       $.Random = function (under, over) {
           switch (arguments.length) {
               case 1: return parseInt(Math.random() * under + 1);
               case 2: return parseInt(Math.random() * (over - under + 1) + under);
               default: return 0;
           }
       }
       /*http://www.tuicool.com/articles/RZrAfe*/
   })(jQuery);