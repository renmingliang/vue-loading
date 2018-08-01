# vue-loading

> Loading自定义组件

	针对vue进行组件拓展练习

## Usage
```
默认加载中： Load()

自定义： Load({
	msg: 'O(∩_∩)O哈哈~',
	hideIcon: true,
	duration: 3000
})
```

## Screenshot
![示例](screenshot/gif.gif)


## API

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
			<th>Type</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>msg</td>
			<td>提示语</td>
			<td>String</td>
			<td>加载中</td>
		</tr>
		<tr>
			<td>hideIcon</td>
			<td>是否隐藏加载图标</td>
			<td>Boolean</td>
			<td>false</td>
		</tr>
		<tr>
			<td>styleBG</td>
			<td>背景遮罩颜色</td>
			<td>String</td>
			<td>transparent</td>
		</tr>
		<tr>
			<td>duration</td>
			<td>展示时间周期(ms)</td>
			<td>Number</td>
			<td>3000</td>
		</tr>
	</tbody>
</table>


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:2017
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
"# vue-loading" 
