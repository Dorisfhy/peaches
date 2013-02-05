/**
 * pom.js 负责将styleText(样式表文本)处理成 POM对象
 * POM对象主要包含styleSheet属性,为一个CSSOM对象.
 */

var cssom = require('cssom');
var separator = require('./separator');
var merger = require('./merger');
/**
 * peaches object models
 * 处理两件事情:
 * 1. 独立每一个selector为一个样式块
 * 2. 将background 拆封成 background-image, background-position 的形式.
 * 这样处理之后,就可以准确的计算background-position了.
 */
function POM(styleText) {
    'use strict';
    this.styleText = styleText;
    this._init();
}
POM.prototype = {
    _init:function () {
        'use strict';
        this.styleSheet = cssom.parse(this.styleText);
        //独立每一个selector为一个样式块.
        merger(this.styleSheet);
        // 将background 拆封成 background-image, background-position 的形式.
        this.splitBackground();
    },
    /**
     * 拆封background
     */
    splitBackground:function () {
        'use strict';
        this.styleSheet.cssRules.forEach(function (cssRule) {
            // 如果是CSS function 那么没有 cssRule.style
            if (cssRule.style) {
                separator(cssRule.style);
            }

        });
    }
};
module.exports = POM;
