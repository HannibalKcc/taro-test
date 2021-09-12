import {
  View,
  Text,
  Picker,
} from '@tarojs/components';
import {Component} from 'react';

import './picker_demo.scss';

export default class PagePicker extends Component {
  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  };

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    });
  };
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  };

  render() {
    return (
      <View className="container">
        <View className="page-body">
          <View className="page-section">
            <Text>地区选择器</Text>
            <View>
              <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                <View className="picker">
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text>时间选择器</Text>
            <View>
              <Picker mode="time" onChange={this.onTimeChange}>
                <View className="picker">
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text>日期选择器</Text>
            <View>
              <Picker
                mode="date" fields="month"
                end="2022-9"
                onChange={this.onDateChange}
              >
                <View className="picker">
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
