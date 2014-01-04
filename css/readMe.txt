less说明：

1：所有页面只应有一个入口， 即 cmms.less(编译后变成cmms.css)
2: css里面的basic.css&detail.css&log.css是之前别人做的， 不管。
3：写代码之前打开cmd，在项目根目录敲grunt，即可自动编译less。（关于grunt的相关知识， 可以去简单了解一下。）
4：less文件夹里面：
 import-mixins.less是相关的实用函数，可以方便的进行调用。（如果需要增加，需周知所有成员）
 import-reset.less 不解释了。
 import-ui.less 是一些简单的ui布局。比如 class="ui-m0"， 即可调用。
 import-var.less 定义基本变量， 颜色、大小等等， 方便全站统一。

 import-mod-xxx.less 是每个页面或者模块单独的less文件，每增加一个页面都要单独写一个，并在cmms.less里添加。