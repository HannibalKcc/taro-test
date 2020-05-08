import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';

export default class ChildB extends Component {
	static defaultProps = {
		renderSlot: '',
		renderFooter: ''
	};

	render() {
		const {name, renderSlot} = this.props;

		return (
			<View className='childB'>
				<Text>
					这里是 childB，展示插槽内容
					{`name: ${name}`}
				</Text>
				<View className='slot'>
					{/*第一句话是不奏效的，文档中提到过，真是very magic！*/}
					{renderSlot}
					{/*这句话才奏效*/}
					{this.props.renderSlot}
				</View>
				{this.props.children}
				<View className='footer'>
					{this.props.renderFooter}
				</View>
			</View>
		);
	}
}
