/**
 * 获取可是区域的高度
 */
const getOffsetHeight = function(elem){
    if(elem){
        return elem.offsetHeight
    }else{
        return document.documentElement.offsetHeight
    }
}

/**
 * 获取滚动区域高度
 */
const getScrollHeight = function(elem){
    if(elem){
        return elem.scrollHeight
    }else{
        return document.documentElement.scrollHeight
    }
}

/**
 * 节流函数,实现频率过快操作时,每间隔指定时间操作一次
 * params {delay} 毫秒数
 * params {action} 要执行的回调
 */
export const throttle = function(delay, action){
    var last = 0, moveY = 0
    return function(){
        var curr = +new Date()
        if(curr - last > delay && this.absMoveY >= moveY){
            action.apply(this, arguments)
            last = curr
            moveY = this.absMoveY
        }
    }
}


/**
 * 获取css样式方法
 */
export const getStyle = function(elem, attr, numMode = 'init'){
    let  target
    if(attr === 'scrollTop'){
        target = elem.scrollTop
    }else if(elem.currentStyle){
        target = elem.currentStyle[attr]
    }else{
        target = document.defaultView.getComputedStyle(elem, null)[attr]
    }
    return numMode == 'float' ? parseFloat(target) : parseInt(target)
}

/**
 * 到指定位置才执行任务
 */
export const loadMoreData = (elem, callback) => {
    let windowHeight = window.screen.height
    let height  //监测元素高
    let setTop  //检测元素距离上部高
    let paddingBottom
    let marginBottom
    let requestFram
    let oldScrollTop

    window.addEventListener('scroll', () => {
        loadMore()
    })

    elem.addEventListener('touchstart', () =>　{

        height = elem.offsetHeight
        setTop = elem.offsetTop
        paddingBottom = getStyle(elem, 'paddingBottom')
        marginBottom = getStyle(elem, 'marginBottom')
    }, {passive: true})

    elem.addEventListener('touchmove', () => {
        // loadMore()
    }, {passive: true})

    elem.addEventListener('touchend', () => {
        oldScrollTop = document.body.scrollTop
        moveEnd()
    }, {passive: true})

    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if(document.body.scrollTop != oldScrollTop){
                oldScrollTop = document.body.scrollTop
                loadMore()
                moveEnd()
            }else{
                cancelAnimationFrame(requestFram)
                height = elem.offsetHeight
                loadMore()
            }
        })
    }

    const loadMore = () => {
        if(getScrollTop() + windowHeight >= height + setTop + paddingBottom + marginBottom){
            callback()
        }
    }
}

/**
 * 获取滚动位置信息
 */
const getScrollTop = function(elem){
    if(elem){
        return elem.scrollTop
    }else{
        return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
    }
}


/**
 * 底部上啦跳转逻辑,主要用在详情页面,底部上拉打开详细信息展板
 * params {elem} 监测元素
 * params {options} 配置选项
 * options: {
   *            distance: 100,
   *            bottomElem: null,  底部操作元素
   *            callback: this.travelModalS  松手后回调函数
   *         }
 */
export const Myload = function(elem, options){
    this.elem = elem
    this.options = options
    this.bottomHeight = this.options.bottomElem.offsetHeight
}

Myload.prototype.init = function(){
    this.elem.addEventListener('touchstart', this.touchstart.bind(this), {passive: true})
    this.elem.addEventListener('touchmove', this.touchmove.bind(this), {passive: true})
    this.elem.addEventListener('touchend', this.touchend.bind(this), {passive: true})
}

Myload.prototype.doCheck = function(){
    var scrollTop = getScrollTop()
    var offsetHeight = getOffsetHeight()
    var scrollHeight = getScrollHeight()
    if(scrollTop + offsetHeight >= scrollHeight - 60){
        this.isBottom = true
    }else{
        this.isBottom = false
    }
}

Myload.prototype.touchstart = function(e){
    this.startY = e.touches[0].pageY
    // this.touchScrollTop = getScrollTop(this.elem)
    this.fuc = throttle(0, function(){
        bottom.style.height = this.bottomHeight + this.absMoveY + 'px'
    })
}

Myload.prototype.touchmove = function(e){
    this.curY = e.touches[0].pageY
    this.moveY = this.curY - this.startY

    if(this.moveY > 0){
        this.direction = 'up'
    }else if(this.moveY < 0){
        this.direction = 'down'
    }
    this.doCheck()
    this.absMoveY = Math.abs(this.moveY)
    if(this.isBottom){
        this.fuc()
        if(this.absMoveY < 100){
            this.options.bottomElem.innerHTML = "请继续拖动!"
        }else{
            this.options.bottomElem.innerHTML = "快撒手!"
        }
    }
}

Myload.prototype.touchend = function(){
    if(this.direction == 'down'){
        bottom.style.height = this.bottomHeight+'px'
        if(this.absMoveY >= 100){
            this.options.bottomElem.innerHTML = "已跳转..."
            if(typeof this.options.callback == 'function'){
                this.options.callback()
            }
        }
    }
    this.absMoveY = 0
}

/**
 * cookie 解决ios无痕浏览模式下storage被禁用问题
 * */
try{
    window.sessionStorage.setItem("test", "test");
    window.sessionStorage.removeItem("test");
    window.isPrivateMode = false;
}catch(e){
    window.isPrivateMode = true;
}

export const cutoCookies = function(){};
cutoCookies.prototype = {
    setCookie:function(c_name, value, expiredays){
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString()) + ";path=/";
    },
    getCookie:function(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return (arr[2]);
        }else{
            return null;
        }
    },
    delCookie:function(name){
        var cookie = new cutoCookies();
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=cookie.getCookie(name);
        if(cval!=null){
            document.cookie= name + "="+cval+";expires="+exp.toGMTString() + ";path=/";
        }
    }
}


let cutoCook = new cutoCookies()
/**
 * 存储localStorage
 */
export const setStore = function(name, content){
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    if(!window.isPrivateMode){
        window.localStorage.setItem(name, content);
    }else{
        cutoCook.setCookie(name, content, 10);
    }
}

/**
 * 获取localStorage
 */
export const getStore = function(name){
    if (!name) return;
    if(!window.isPrivateMode){
        return window.localStorage.getItem(name);
    }else{
        return unescape(cutoCook.getCookie(name));
    }
}

/**
 * 删除localStorage
 */
export const removeStore = function(name){
    if (!name) return;
    if(!window.isPrivateMode){
        window.localStorage.removeItem(name);
    }else{
        cutoCook.delCookie(name);
    }
}


