import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';

import './cssStyle.scss';
import ChildA from './components/childA/chidA';

export default class CssStyle extends Component {
	render() {
		return (
			<View className='cssStyle'>
				<View className='cardBox'>测试测试cardBox</View>
				<View>
					<Text className='fs24 fRed'>fs24</Text>
					<Text className='fs20'>fs20</Text>
					<Text className='fs16'>fs16</Text>
					<Text className='fs30'>fs30</Text>
				</View>
				{/*给子组件添加 className 是没有意义的，参考
				https://nervjs.github.io/taro/docs/component-style.html#%E5%A4%96%E9%83%A8%E6%A0%B7%E5%BC%8F%E7%B1%BB */}
				<ChildA className='cardBox fs60'></ChildA>
			</View>
		);
	}
}
