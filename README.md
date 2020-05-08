# Trao 的试水

## 值得注意的地方
组件样式独立 [参考](https://taro-docs.jd.com/taro/docs/best-practice.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E8%AF%B4%E6%98%8E)

JSX 数组操作比较反人类 [参考](https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/manipulate-jsx-as-array.md)

小程序端不要将在模板中用到的数据设置为 undefined，请使用 null

环境变量 process.env 的使用不支持解构取值（虽然我也没有么干过）

尺寸单位，Trao 回对 px 单位进行转换，而 `PX` 、`Px` 则不会转换

组件和引用组件的页面不能使用 id 选择器、属性选择器；同时极端情况下，后代选择器会出问题（？？？坑爹啊）；子元素选择器也很限制
```
    #a { } /* 在组件中不能使用 */
    [a] { } /* 在组件中不能使用 */
    button { } /* 在组件中不能使用 */
    .a > .b { } /* 除非 .a 是 view 组件节点，否则不一定会生效 */
```

使用`props.children` 务必当心！即使是一个变量传递、打印也是会翻车的，非常 magic

## TODO LIST
- [X] 列表渲染
- [X] 条件渲染
- [X] 路由
- [X] 自定义组件
- [X] props、默认值 defaultProps(注意，插槽不能用这个)
- [ ] 小程序上的 props 类型检查按照文档来说有点小问题，那只能自己检查了？？？
- [ ] context
- [ ] slot、组合（需要遵守跟 this.props.children 一样的规则）
- [ ] 函数调用弹窗
- [ ] swiper
- [ ] Taro-ui
- [ ] 权限申请
- [ ] 调用相机
- [ ] ICON 或者 SVG 处理
