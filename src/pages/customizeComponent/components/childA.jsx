import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';

export default class ChildA extends Component {
	static defaultProps = {
		name: '缺省名字',
		uid: '缺省id'
	};

	render() {
		const {name, uid} = this.props;

		return (
			<View className='childA'>
				<Text>
					这里是 childA，展示自身的 props 属性 \n
					{`name: ${name}\nuid：${uid}`}
				</Text>
			</View>
		);
	}
}
