import {Component} from 'react';
import Taro from '@tarojs/taro';
import {View, Canvas, Text} from '@tarojs/components';
import uCharts from '../../local_lib/u-charts';
import dataJson from '../../local_lib/test_data.json';

import './echart_demo.scss';

var canvaColumn = null;
var canvaLineA = null;
var canvaCandle = null;
export default class Echart_demo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cWidth: '',
      cHeight: '',
      pixelRatio: 1,
    };
  }

  componentDidMount() {
    const sysInfo = Taro.getSystemInfoSync();
    let pixelRatio = 1;
    if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
      pixelRatio = sysInfo.pixelRatio;
    }
    const cWidth = pixelRatio * sysInfo.windowWidth;
    const cHeight = 500 / 750 * cWidth;
    this.setState({cWidth, cHeight, pixelRatio}, () => this.getServerData());
  }

  getServerData = () => {
    // Taro.request({
    //   url: 'https://www.ucharts.cn/data.json',
    // })
    new Promise(resolve => {
      resolve(dataJson);
    })
      .then((res) => {
        const resData = res.data;
        console.log(resData);
        let Column = {categories: [], series: []};
        Column.categories = resData.ColumnB.categories;
        Column.series = resData.ColumnB.series;
        //自定义标签颜色和字体大小
        Column.series[1].textColor = 'red';
        Column.series[1].textSize = 18;
        let LineA = {categories: [], series: []};
        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
        LineA.categories = resData.LineA.categories;
        LineA.series = resData.LineA.series;
        let Candle = {categories: [], series: []};
        //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
        Candle.categories = resData.Candle.categories;
        Candle.series = resData.Candle.series;
        this.showColumn('canvasColumn', Column);
        this.showLineA('canvasLineA', LineA);
        this.showCandle('canvasCandle', Candle);
      }).catch(err => {
      console.log(err);
    });
  };

  showColumn = (canvasId, chartData) => {
    const {cWidth, cHeight, pixelRatio} = this.state;
    let ctx = Taro.createCanvasContext(canvasId, this);
    canvaColumn = new uCharts({
      type: 'column',
      context: ctx,
      legend: true,
      fontSize: 11,
      background: '#FFFFFF',
      pixelRatio,
      animation: true,
      categories: chartData.categories,
      series: chartData.series,
      xAxis: {
        disableGrid: true,
      },
      yAxis: {
        //disabled:true
      },
      dataLabel: true,
      width: cWidth,
      height: cHeight,
      extra: {
        column: {
          type: 'group',
          width: cWidth * 0.45 / chartData.categories.length
        }
      }
    });
  };

  touchColumn = (e) => {
    canvaColumn.showToolTip(e, {
      formatter: function(item, category) {
        if (typeof item.data === 'object') {
          return category + ' ' + item.name + ':' + item.data.value;
        } else {
          return category + ' ' + item.name + ':' + item.data;
        }
      }
    });
  };
  showLineA = (canvasId, chartData) => {
    const {cWidth, cHeight, pixelRatio} = this.state;
    let ctx = Taro.createCanvasContext(canvasId, this);
    canvaLineA = new uCharts({
      type: 'line',
      context: ctx,
      fontSize: 11,
      legend: true,
      dataLabel: true,
      dataPointShape: true,
      background: '#FFFFFF',
      pixelRatio,
      categories: chartData.categories,
      series: chartData.series,
      animation: true,
      enableScroll: true,//开启图表拖拽功能
      xAxis: {
        disableGrid: false,
        type: 'grid',
        gridType: 'dash',
        itemCount: 4,
        scrollShow: true,
        scrollAlign: 'left',
        //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
        //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
      },
      yAxis: {
        //disabled:true
        gridType: 'dash',
        splitNumber: 8,
        min: 10,
        max: 180,
        formatter: (val) => {
          return val.toFixed(0) + '元';
        }//如不写此方法，Y轴刻度默认保留两位小数
      },
      width: cWidth,
      height: cHeight,
      extra: {
        line: {
          type: 'straight'
        }
      },
    });
  };

  touchLineA = (e) => {
    canvaLineA.scrollStart(e);
  };

  moveLineA = (e) => {
    canvaLineA.scroll(e);
  };

  touchEndLineA = (e) => {
    canvaLineA.scrollEnd(e);
    //下面是toolTip事件，如果滚动后不需要显示，可不填写
    canvaLineA.showToolTip(e, {
      formatter: function(item, category) {
        return category + ' ' + item.name + ':' + item.data;
      }
    });
  };

  showCandle = (canvasId, chartData) => {
    const {cWidth, cHeight, pixelRatio} = this.state;
    let ctx = Taro.createCanvasContext(canvasId, this);
    canvaCandle = new uCharts({
      type: 'candle',
      context: ctx,
      fontSize: 11,
      legend: true,
      background: '#FFFFFF',
      pixelRatio,
      categories: chartData.categories,
      series: chartData.series,
      animation: true,
      enableScroll: true,
      xAxis: {
        disableGrid: true,
        itemCount: 20,
        scrollShow: true,
        scrollAlign: 'right',
        labelCount: 4,
      },
      yAxis: {
        //disabled:true
        gridType: 'dash',
        splitNumber: 5,
        formatter: (val) => {
          return val.toFixed(0);
        }
      },
      width: cWidth,
      height: cHeight,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        candle: {
          color: {
            upLine: '#f04864',
            upFill: '#f04864',
            downLine: '#2fc25b',
            downFill: '#2fc25b'
          },
          average: {
            show: true,
            name: ['MA5', 'MA10', 'MA30'],
            day: [5, 10, 30],
            color: ['#1890ff', '#2fc25b', '#facc14']
          }
        },
        tooltip: {
          bgColor: '#000000',
          bgOpacity: 0.7,
          gridType: 'dash',
          dashLength: 5,
          gridColor: '#1890ff',
          fontColor: '#FFFFFF',
          horizentalLine: true,
          xAxisLabel: true,
          yAxisLabel: true,
          labelBgColor: '#DFE8FF',
          labelBgOpacity: 0.95,
          labelAlign: 'left',
          labelFontColor: '#666666'
        }
      },
    });
  };

  touchCandle = (e) => {
    canvaCandle.scrollStart(e);
  };

  moveCandle = (e) => {
    canvaCandle.scroll(e);
  };

  touchEndCandle = (e) => {
    canvaCandle.scrollEnd(e);
    //下面是toolTip事件，如果滚动后不需要显示，可不填写
    canvaCandle.showToolTip(e, {
      formatter: function(item, category) {
        return category + ' ' + item.name + ':' + item.data;
      }
    });
  };

  render() {
    const {cWidth, cHeight} = this.state;
    let canvasProps = {};
    if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
      canvasProps = {width: cWidth, height: cHeight, style: {width: '100%', height: '100%'}};
    } else {
      canvasProps = {style: {width: cWidth, height: cHeight}};
    }
    return (
      <View>
        <Text>Hello world!</Text>
        <Canvas
          {...canvasProps}
          canvasId='canvasColumn'
          id='canvasColumn'
          onTouchStart={this.touchColumn}
        />
        <Canvas
          {...canvasProps}
          canvas-id='canvasLineA'
          id='canvasLineA'
          onTouchStart={this.touchLineA}
          onTouchMove={this.moveLineA}
          onTouchEnd={this.touchEndLineA}
        />
        <Canvas
          {...canvasProps}
          canvas-id='canvasCandle'
          id='canvasCandle'
          onTouchStart={this.touchCandle}
          onTouchMove={this.moveCandle}
          onTouchEnd={this.touchEndCandle}
        />
      </View>
    );
  }
}
