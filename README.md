# FirstWebApp
>运用HTML5、CSS3、JS流行技术，采用组件式开发模式，开发Web App全站！

## 内容组织类：H5

## 方法：
>添加一个页 addPage
>添加一个组件 addComponent
>展现所有页面 loader

>图文组件类：H5ComponentBase
>作用：输出一个DOM，内容可以是图片或者文字
>事件：当前页载入：onLoad 当页面移除：onLeave

>图标组件类：H5Component???

>作用：在H5ComponetBase的基础之上插入DOM结构或Canvas图形

>事件：当前页面载入移出：onLoad、onLeave 图表组件本身的生长动画


## 项目JS类总结
+ 内容组织类：H5
+ 图文组件类：H5ComponentBase
+ 图表组件类：H5Component？
	+ 柱图Bar --
	+ 垂直柱图Bar_v
	+ 散点图 Point
	+ 折线图 Polyline
	+ 雷达图 Radar
	+ 饼图 Pie
	+ 环图ring

> h5_component表明这是一个组件JS中获取某页内所有组件$(thisPage).find('.h5_component')

>h5_component_base
>表明这是某个类型的组件，base、pie、point.....
>用于某类样式的附加，还包含他们的状态_load  _leave
>h5_component_name_myName 自定义组件名。用于附加样式
>例如通用的~_caption
