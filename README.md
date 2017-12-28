########################################################################################################################
# webapp

> 走四方app和移动web站
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

技术栈: vue-cli+vue+vuex+vue-router+axios

构建入口文件main.js

文件夹:src下
assets     => 图片\公用css\等资源
components => 公共组件
config     => 一些常用js工具逻辑
pages      => 页面模板
plugins    =>第三方插件
router     => 前端各个页面的路由
store      => vuex数据存放

########################################################################################################################

1.目前该项目前端框架已搭起,首页到支付页面,登录等前端静态页面已搭好,部分交互逻辑已完成,有些需要与动态数据一同调试开发(待完成)
2.首页目前在尝试配合后台渲染数据(广告轮播\搜索列表)

注意事项:


