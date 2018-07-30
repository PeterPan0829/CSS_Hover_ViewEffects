/*
 * JQuery 起手式最普遍的是 $(document).ready(...) 但其實也可以寫成以下的 $(function () {});
 * 另外下面的 function (e) 是屬於 JS 和 JQuery 的事件處理這裡僅附上網址說明並不多贅述，但非常重要請花心思理解！
 * https://codepen.io/Gothburz/pen/jbxxao
 * https://code.i-harness.com/zh-TW/q/9d85c0

*/
$(function () {
    $('.btn-13-js').on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        console.log(parentOffset);
        /**
         * (this).offset()當前對象 parentOffset 距離 parentOffset.left、parentOffset.top 兩邊的距離
         * $(this).offset()當前對象 parentOffset 相對於整個頁面的上和左的固定偏移值：Object {top: 692, left: 757.84375}
         * e.pageX鼠標相對於當前頁面的x坐標值：變化的值
         * e.pageY鼠標相對於當前頁面的y坐標值：變化的值
         *
         */
        console.log(e.pageX);
        $(this).find('span').css({
            top: relY,
            left: relX
        });

    }).on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        });
    });
});
