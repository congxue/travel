
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if( clientWidth < 320 ){
                clientWidth = 320
            }else if( clientWidth > 768 ){
                clientWidth = 768
            }else if( !clientWidth ){
                return;
            }
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            // alert($('a').css('fontSize'))
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


$(document).ready(function(){
    $('.search .close').on('click',function(){
        console.log('123')
        $(this).siblings('input').val('');
    })
});