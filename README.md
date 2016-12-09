#alert插件#
不依赖任何库类的纯js插件

##效果示例##
![alert插件的效果图](./example.png)

##使用方法##
```html
    <script src="./alert.js"></script>
    <script>
        alert({title:'温馨提示',content:'您好 , 欢迎光临'});
    </script>
```

##演示地址##
[demo](https://rawgit.com/758915145/alert/master/example.html)

##兼容性##
* IE6+
* IE6中不支持position:fixed，所以IE6中使用position:absolute

##知识点##
在ie8及以下版本的浏览器，不能这样动态设置css：
```js
var sty = document.createElement('style');
sty.innerHTML = "#xiaoyi-close-a{position:absolute;}";
document.head.appendChild(sty);
```
需要这样：
```js
var sty = document.createElement('style');
var styTxt = "#xiaoyi-close-a{position:absolute;}";
sty.type = "text/css";
if(sty.styleSheet){
    sty.styleSheet.cssText = styTxt;
}else{
    sty.innerHTML = styTxt;
}
document.getElementsByTagName('head')[0].appendChild(sty);
```
