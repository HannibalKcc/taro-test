// TODO 写一个脚本 自动读取路径？
// import() 可以有 IDE 智能支持吗？可以正确的相对路径吗？
const Index = {pagePath: 'pages/index/index', text: 'index'};
const Example = {pagePath: 'pages/example/example', text: 'Example'};

const Nav = {pagePath: '/pages/nav/nav', info: '导航研究'};
const CssStyle = {pagePath: '/pages/cssStyle/cssStyle', info: 'CSS样式研究'};

// 泰罗原生组件学习
const Swiper = {pagePath: '/pages/taroStudy/swiper/swiper', info: 'Taro Swiper组件研究'};
const taroStudyList = [Swiper];

const tabBarItemList = [
	Index,
	Example,
];

// 路由汇总
const routerItemList = [
	Nav,
	CssStyle,
	...taroStudyList,
];

export default {tabBarItemList, routerItemList};
