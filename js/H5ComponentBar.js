/* 柱图组件对象 */

var H5ComponentBar =function ( name, cfg ) {
  var component =  new H5ComponentBase( name ,cfg );

  $.each(cfg.data,function(idx,item){
    // 定义需要的数据
    var line = $('<div class="line">');
    var name = $('<div class="name">');
    var rate = $('<div class="rate">');
    var per = $('<div class="per">');
    // 让宽度变成百分比
    var width = item[1]*100 + '%';

    var  bgStyle = '';
    // 如果item[2] 存在数据就用自己的数据（颜色）
    if( item[2] ){
      bgStyle = 'style="background-color:'+item[2]+'"';
    }
    // 向html里面添加样式
    rate.html( '<div class="bg" '+bgStyle+'></div>' );
    // 设置宽度
    rate.css('width',width);
    // 设置明年工作
    name.text( item[0]);

    per.text(width);
    // 把name rate per 添加到line里面
    line.append( name ).append( rate ).append( per );
    // 把line添加到component组件里面
    component.append(line);
  });

  return component;
}