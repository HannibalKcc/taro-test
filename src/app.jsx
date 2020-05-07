import Taro, {Component} from '@tarojs/taro';
import Index from './pages/index';

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

	// 坑~这里的配置不支持任何隐式声明，包括 IIFE，函数返回值，变量
	// TODO 尝试让脚本解决这个问题
  config = {
		pages: [
			'pages/index/index',
			'pages/example/example',
			'pages/nav/nav',
			'pages/nav/children/childA',
			'pages/cssStyle/cssStyle',
			'pages/taroStudy/swiper/swiper'
		],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#fff',
			navigationBarTitleText: 'WeChat',
			navigationBarTextStyle: 'black'
		},
		tabBar: {
			list: [
				{pagePath: 'pages/index/index', text: 'index'},
				{pagePath: 'pages/example/example', text: 'Example'}
			]
		},
		permission: {
			'scope.usetLocation': {
				desc: '测试获取地理位置'
			}
		},
	}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
		return (
			<Index/>
		);
	}
}

Taro.render(<App/>, document.getElementById('app'));
