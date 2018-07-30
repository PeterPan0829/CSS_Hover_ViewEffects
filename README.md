# Use CSS native method build more button hover effects

> This repo you will know CSS skill and a little of JQuery drive CSS
> <p>chrome,opera,IE9+,firefox</p>


* Demo
* https://cdn.rawgit.com/PeterPanTW/CSS_Hover_ViewEffects/fff07dd7/index.html

### User Story :smile: :
* User can see and "try" fresh a lot of different hover effects

### Video Walkthrough :movie_camera: :movie_camera:
![Alt Text](https://github.com/PeterPanTW/CSS_Hover_ViewEffects/blob/master/Demo_ButtonEffects.gif)


### Philosophy (The Rule)：
+ border 屬性拆分開來理解
+ 類似拆分開畫三角形


```javascript

	border:1px solid currentColor; /*currentColor當前文字的顏色*/
	border-style: solid;
	border-width: 0 0 0 0;　/*上、右、下、左*/
	border-color: #611c19 transparent transparent transparent;
	/*btn-13特殊*/
	.btn-13-js:hover span {
            width: 562.5px;　/*525是按鈕對角線的最大長度(三角函數)Math.sqrt(寬度的平方+高度的平方)再開平方*/
            height: 562.5px;
        }

	/*btn-13.js*/
	$(function () {
    	$('.btn-13-js').on('mouseenter', function (e) {
          var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
          console.log(parentOffset);
                    /**
                    * (this).offset()當前對象 parentOffset 距離 parentOffset.left、parentOffset.top 兩邊的距離
                    * $(this).offset()當前對象 parentOffset 相對於整個頁面的上和左的固定偏移值：Object {top: 692, left: 757.84375}

                    * e.pageX鼠標相對於當前頁面的x坐標值：變化的值
                    * e.pageY鼠標相對於當前頁面的y坐標值：變化的值
                    */

                    console.log(e.pageX);
                    $(this).find('span').css({
                        top: relY,
                        left: relX
                    });
                }).on('mouseout', function (e) {
                    var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
                    $(this).find('span').css({
                        top: relY,
                        left: relX
               });
        });
    });
```
