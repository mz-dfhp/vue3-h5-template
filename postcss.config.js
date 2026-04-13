export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿宽度
      unitPrecision: 5, // 转换后保留小数位数
      viewportUnit: 'vw', // 目标单位
      selectorBlackList: [], // 不转换的选择器
      minPixelValue: 1, // 最小转换值
      mediaQuery: false, // 是否转换媒体查询中的 px
    },
  },
}
