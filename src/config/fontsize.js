(function(doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth >720 ){
            clientWidth = 720
        }
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


export let Utils = {
    fontSize(doc, win, pageW=640){
        let htmlObj = doc.documentElement,
            resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
            rem = pageW / 100,
            resizeFunc = function () {
                let clientW = htmlObj.clientWidth;
                if (clientW) {
                    return;
                }
                if (clientW > 1024) {
                    clientW = 1024;
                }
                htmlObj.style.fontSize = clientW / rem + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, resizeFunc, false);
        doc.addEventListener('DOMContentLoaded', resizeFunc, false);
    },
    modalOpen(bodyCls){
        //bodyCls 为body上的样式  body{position:fixed; width: 100%;}
        var scrollTop;
        return {
            afterOpen: function() {
                scrollTop = document.body.scrollTop;
                document.body.classList.add(bodyCls);
                document.body.style.top = -scrollTop + 'px';
            },
            beforeClose: function() {
                document.body.classList.remove(bodyCls);
                document.body.scrollTop = scrollTop;
            }
        };
    }
}