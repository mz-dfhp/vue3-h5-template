export default {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'iOS >= 9',
        'Safari >= 9',
      ],
    },
    'postcss-pxtorem': {
      rootValue() {
        return 37.5
      },
      propList: ['*'],
      selectorBlackList: ['html'], // 排除含有 'html' 选择器的代码块
    },
  },
}
