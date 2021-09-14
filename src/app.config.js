export default {
  pages: [
    'pages/index/index',
    'pages/echart_demo/echart_demo',
    'pages/picker_demo/picker_demo',
    'pages/table_demo/table_demo',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'tab1'
      }, {
        pagePath: 'pages/index/index',
        text: 'tab2'
      }, {
        pagePath: 'pages/index/index',
        text: 'tab3'
      }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};
