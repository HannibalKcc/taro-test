import Taro, {Component} from '@tarojs/taro';
import {View, Text, Button} from '@tarojs/components';

import ChildA from './components/childA';
import ChildB from './components/childB';

export default class CustomizeComponent extends Component {
	render() {
		return (
			<View className='customizeComponent cardBox'>
				{/*子组件名字一定要大驼峰，不然 props 穿不过去，坑~*/}
				<ChildA className='cardBox' name='胡汉三' uid='456'></ChildA>
				<ChildB
					className='cardBox'
					name='李狗蛋'
					renderSlot={<Text>瑟瑟发抖的插槽内容</Text>}
					renderFooter={
						<Button className='close'>Close</Button>
					}
				>
					<Text>children</Text>
				</ChildB>
			</View>
		);
	}
}
