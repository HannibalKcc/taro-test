import Taro from '@tarojs/taro';
import {Component} from 'react';
import {View, Text, Button} from '@tarojs/components';
import './index.scss';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.routeList = [
      {
        url: '/pages/echart_demo/echart_demo',
        name: 'echart_demo',
      },
      {
        url: '/pages/picker_demo/picker_demo',
        name: 'picker_demo',
      },
      {
        url: '/pages/table_demo/table_demo',
        name: 'table_demo',
      },
    ];
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        {
          this.routeList.map((item, index) => (
            <Button
              className="btn-max-w" key={index}
              onClick={() => {
                Taro.navigateTo({
                  url: item.url
                });
              }}
            >
              {item.name}
            </Button>
          ))
        }
      </View>
    );
  }
}
