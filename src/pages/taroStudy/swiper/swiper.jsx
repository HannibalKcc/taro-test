import Taro, {Component} from '@tarojs/taro';
import {View, Text, Swiper, SwiperItem} from '@tarojs/components';

export default class StudySwiper extends Component {
	render() {
		return (
			<View>
				<Swiper
					className='test-h'
					indicatorColor='#999'
					indicatorActiveColor='#333'
					vertical
					circular
					indicatorDots
					autoplay
				>
					<SwiperItem>
						<View className='demo-text-1'>1</View>
					</SwiperItem>
					<SwiperItem>
						<View className='demo-text-2'>2</View>
					</SwiperItem>
					<SwiperItem>
						<View className='demo-text-3'>3</View>
					</SwiperItem>
				</Swiper>
			</View>
		);
	}
}
