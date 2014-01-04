# 项目规范

### 文件、文件夹命名规范

* 使用下划线。

### 代码格式

* 使用4个空格做为缩进。
  Sublime Text 2下强烈建议添加如下选项到项目配置文件的配置对象中：

  ```JavaScript
  "settings":
  {
    // The number of spaces a tab is considered equal to
    "tab_size": 2,

    // Set to true to insert spaces when tab is pressed
    "translate_tabs_to_spaces": true
  }  
  ```


### 缩写规范：使用缩写词前，先来此注册缩写词，以免冲突。

* pub: publish

### CSS编码规范

* 使用下划线"_".

### JavaScript编码规范

* 构造函数：首字母大写的驼峰式（没有下划线或连字符）

* 普通变量、普通函数、对象成员：首字母小写的驼峰式

* 私有变量、私有函数、对象内部使用的成员：以下划线开头的首字母小写的驼峰式。如：`_privateMethod`。

* 常量名全部大写，单词间用下划线分隔。


#### 注释格式

* 建议把注释写在所注释的代码的上一行，必要的时候可以写在同一行，不建议写在下一行，除非注明是对以上代码的注释。
* 注释和注释符号之间保持两个空格。


#### 代码格式

* 字符串使用**单引号**。

* 语句必须都有分号结尾，除了`for, function, if, switch, try, while`。

* 链式调用应考虑断行。如：

  ```JavaScript
  $("#id").find(".class")
    .addClass("class2");
  ```

* "{}"的"{"和"}"不要跟"{}"里的语句或表达式在同一行。"[]"同理，但表达式较短时可考虑在同一行。如：

  ```JavaScript
  while (--i) {
    console.log(arr[i]);
  }
  var arr = [{
	  	key: "foo"
	  },
	  {
		  key: "bar"
	  }
  ];
  var arr2 = ["foo", "bar"];
  ```

* "}"后的 `while, else` 等关键词应和"}"在同一行，但需要前后有空格。如：

  ```JavaScript
  if (statements) {
  	// do something
  } else {
    // do something else
	}
  ```

* 用来包含表达式或函数形参的"()"前后要有空格，除非直接后接行末的分号或用于函数调用。如：

  ```JavaScript
  function func( arg ) {

  }

  (function( $ ) {
  	// do something
  }) (jQuery);
  ```

* "="前后要有空格

* 数组成员间的","后面要有空格。如：`[1, 2]`

* 避免额外的逗号。如：`[1, 2, 3, ]`

#### 代码逻辑

* 使用不带类型转换的条件判断符：用`===`代替`==`，用`!==`代替`!=`。

* for-in循环体中要用hasOwnProperty方法检查成员是否为自身成员。避免来自原型链上的污染。如：

  ```JavaScript
  for (key in obj) {
  	if (obj.hasOwnProperty(key)) {
  		// obj[key]是自身成员，不在原型链上
  	}
  }
  ```

* 把变量或函数的声明放在所在作用域的最上面，不要使用未声明的变量。

* 不要修改内置对象的原型。

* 对于数值、字符串、布尔值、对象、数组，建议使用字面量构造，不建议使用`new Number, new String, new Boolean, new Object, new Array`。

