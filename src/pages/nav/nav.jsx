import Taro, {Component} from '@tarojs/taro';
import {View, Text, Input} from '@tarojs/components';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {color: 'yellow'};
	}

	onNavTo() {
		Taro.navigateTo({
			url: `/pages/nav/children/childA?name=胡汉三&id=23333&color=${this.state.color}`
		});
	}

	render() {
		return (
			<View className='index'>
				<Input
					type='text'
					placeholder='请输入颜色'
					value={this.color}
					onInput={(e) => this.setState({color: e.detail.value})}
				/>
				<Text onClick={this.onNavTo}>点我携带参数导航</Text>
			</View>
		);
	}
}
