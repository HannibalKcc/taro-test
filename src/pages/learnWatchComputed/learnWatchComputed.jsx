import Taro, {Component} from '@tarojs/taro';
import {View, Button} from '@tarojs/components';

// import ChildA from './children/childA';
// import ChildB from './children/childB';

export default class LearnWatchComputed extends Component {
	constructor(props) {
		super(props);

		let o = {
			objA: {x: 66, y: 99},
		};

		this.state = o;

		// 常规的 setState 并不能触发，没有意义，所以不要用这个方法监听变量
		Object.defineProperties(this.state.objA, {
			'x': {
				set(v) {
					console.log('x newVal', v);
				}
			}
		});
	}

	// 除了函数名本身的语义，利用这个周期实现 computed 也是一个不错的选择
	// 但是 watch 就不行了，因为没有旧值可以给我们对比
	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps', 'props', props, 'state', state);
	}

	// 按照文档 https://taro-docs.jd.com/taro/docs/apis/about/tarocomponent#componentwillupdate 的说法
	// 这里并不建议使用 this.setState ，这里具备了 watch 所需要的条件
	componentWillUpdate(nextProps, nextState, ctx) {
		console.log('componentWillUpdate', nextProps, nextState);
	}


	handleChangeState() {
		this.setState({
			objA: {x: 77, y: 99},
		});
	}

	render() {
		return (
			<View className='learnWatchComputed'>
				{/*<ChildA/>*/}
				{/*<ChildB/>*/}

				<View>objA {this.state.objA}</View>

				<Button onClick={() => this.handleChangeState()}>
					点击 setStatae
				</Button>

				{/* eslint-disable-next-line react/no-direct-mutation-state */}
				<Button onClick={() => this.state.objA.x = 99}>
					点击直接修改属性
				</Button>
			</View>
		);
	}
}
