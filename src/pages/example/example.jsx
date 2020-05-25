import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';

import router from '../../route/index';

export default class Example extends Component {
	onNavTo(path) {
		if (!path) return;

		Taro.navigateTo({
			url: path,
		});
	}

	render() {
		return (
			<View className='example'>
				{
					router.routerItemList.map(item =>
						<View onClick={() => this.onNavTo(item.pagePath)} taroKey={item.info}>
							{item.info}
						</View>)
				}
			</View>
		);
	}
}
