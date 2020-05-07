import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';

export default class ChildA extends Component {
	constructor() {
		super();
		this.state = {name: 'hahhaha'};
	}

	componentWillMount() {
		console.log('携带过来的路由参数', this.$router.params);
	}

	// `name: ${this.$router.params.name}`
	// `id: ${this.$router.params.id}`
	// `color: ${this.$router.params.color}`

	render() {
		return (
			<View className='ChildA'>
				<text>
					{`
					name: ${this.$router.params.name} \n
					id: ${this.$router.params.id} \n
					color: ${this.$router.params.color} \n
					`}
				</text>
			</View>
		);
	}
}
