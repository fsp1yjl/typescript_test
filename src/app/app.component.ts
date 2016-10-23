import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <div class="ui vertical inverted sidebar menu left overlay visible" > 
	 <div class="header"> 图片 </div>
	 <div class="menu">
		<a class="item" href="www.baidu.com">泗泾</a>
		<a class="item" href="www.baidu.com">泗泾</a>
		<a class="item" href="www.baidu.com">泗泾</a>
	  </div>
  </div>
  <i class="add to calendar icon"></i>
  <div class="ui items">
  <div class="item">
    <div class="image">
      <img src="https://img1.doubanio.com/view/photo/photo/public/p2371782369.jpg">
    </div>
    <div class="content">
      <a class="header">标题</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">Additional Details </div>
    </div>
  </div>
    <div class="item">
    <div class="image">
      <img src="https://img1.doubanio.com/view/photo/photo/public/p2371782369.jpg">
    </div>
    <div class="content">
      <a class="header">标题</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">Additional Details </div>
    </div>
  </div>
  </div>
            `
})
export class AppComponent { 
  count:number = 3;
}


