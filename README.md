# vue

## 基本模版
```html
<!doctype html>
<html>
<head>
	<meta charset='utf-8'>
	<title>vue</title>
</head>
<body>
	<div id='app'>
	</div>
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<!-- 
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
-->
<script>
	var app = new Vue({
		el: '#app',
		data: {
		},
		methods: {
		}
	});

</script>
</body>
</html>
```

## 声明式渲染
```html
<div id='app'>
    {{ message }}
</div>
```

js
```js
let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
```

## v-bind
```html
<div id='app'>
    <span v-bind:title="message">
        悬停查看绑定信息
    </span>
    <a v-bind:href="canvas_url">CANVAS</a>
</div>
```
js
```js
let app = new Vue({
	el: '#app',
	data: {
		message: '页面加载时间：' + new Date().toLocaleString(),
		canvas_url: 'https://canvas.shenjinxiang.com',
	},
});
```