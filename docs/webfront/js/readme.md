## 基础
### 浏览器执行js

浏览器分为两部分：

1. 渲染引擎：解析html,css,俗称内核
2. JS引擎：JS解释器，用来读取js代码并处理运行，如chrome的v8

###  js组成

1. ECMAScript规定了JS的语法和基础核心
2. DOM-文档对象模型：
3. BOM-浏览器对象模型

### js书写

1. 行内js
```
<!-- 行内式JS -->
    <input type="button" value="唐伯虎" onclick="alert('行内式JS')"> 
```
2. 内嵌式js
```
<script>
        alert("内嵌式JS")
    </script>
```
3. 外部JS文件引入
```
<script src="./js/alert.js">
```
4. js注释
//单行注释  ctrl+/
/*多行注释*/   shift+alt +a 
5. 输入输出
```
    <script>
        //输入框输出
        // prompt('输入框输出')
            //alt弹出警示框
        // alert('警示框')
            //
            // 控制台输出
        console.log('控制台输出')
    </script>
```
### js语法
##### 变量
1. 变量使用
	- 声明  `var age;`
	- 赋值  `age=19;`
	- 初始化：声明时直接赋值` var name='初始化'`
	- 重新赋值： `name='重新复制'`
2. 声明变量的特殊情况
	- 声明不赋值：类型undefined
	- 不声明不赋值：报错
	- 不声明直接赋值：可以使用不建议
	```
	    //只声明不赋值
        var sex;
        console.log(sex); //undefined
        //不声明不赋值
        //console.log(tel); //报错
        //不声明只赋值
        qq=110;
        console.log(qq) //110 可以使用
	```
3. 变量命名规范
	- 字母数字下划线美元符号组成
	- 严格区分大小写
	- 不能以数字开头
	- 不能是关键字保留字
	- 约定规范：驼峰法 
##### 数据类型

不同数据类型所占用的存储空间是不同的，变量的数据类型是不确定的，只有运行过程中根据等号右边的值确定的，并且变量的数据类型是可以转换的。

1. 分类
	- 简单数据类型
	- 复杂数据类型
2. 简单数据类型分类:5大类，Number,Boolean,String,Undefined,Null
	- 数字型：Number，整型，浮点型
		- 进制：
			- 八进制以0开头：`var num = 010;`
			- 十六进制以0x开头：` var num1 = 0x9;`
		- 范围：
			- Number.MAX_VALUE,Number.MIN_VALUE
		- 特殊值：
			- lnfinity无穷大
			- -lnfinity,无穷小
			- NaN,非数值
		- 方法
			- isNaN()是否数值
	- 字符串型:String,单引号或者双引号
		- 嵌套带引号的字符串：外双内单，或者外单内双防止引号就近匹配报错
		- 转义符
			- 以\开头,写到引号里面
			- \n换行 \\斜杠 \'  \" \t 缩进 \b空格
		- 字符串的长度str.length
		- 字符串的拼接，+  
		- 字符串和其他类型拼接结果是字符串类型，连接操作
		- 变量和字符串相连的口诀： 引引++，在字符串中先输入引号，再引号中写++，再++中写变量
	- 布尔型：Boolean,
	- undefined:已过变量声明未赋值就是undefined未定义数据类型
	- undefined和字符串相连结果是undefinedstr,和数值或者boolean相连结果是NaN
	- null空值：null和数值相加结果是数值，和字符串相连结果是nullstr,和布尔相连结果是1或者0
3. 获取变量类型
	- 数据类型检测 typeof :console.log(typeof num)
	- 字面量：数字字面量，字符串
	- 布尔字面量
4.类型转换
	- 使用表单、prompt获取的数据默认是字符串类型
	- 变量类型转换
		- 转换为字符串
			- toString() `var num = 1;alert(num.toString())`
			- String()强制转换 `alert(String(num))`
			- 使用+号拼接结果是字符串 `alert(num + "我是字符串")`
		- 转换为数字
			- parseInt(string) 得到整数
			- parseFloat(string) 
			- Number('str')强制转换 
			- js隐式转换,使用算数运算符 `'12'- 0 `
		- 转换为布尔
			- Boolean(),空、否定的值会被转换为false,如'',0,NaN,null,undefined,其余都会转换为true
