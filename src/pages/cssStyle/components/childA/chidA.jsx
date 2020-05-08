import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import './childA.scss';

export default class ChildA extends Component {
	render() {
		return (
			<View className='fRed'>
				测试
			</View>
		);
	}
}
