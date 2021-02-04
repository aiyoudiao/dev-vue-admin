module.exports = {
  title: '智能分析平台',

  info: {
    title: 'dev-vue-admin',
    list: [
      'dev-vue-admin 是一个基于XXXX工程可视化管理平台，采用token交互验证方式。',
      '您可以 dev-vue-admin 为基础，不只限制于vue的页面，你可以嵌入任意第三方网站，基于iframe框架。',
      'dev-vue-admin 构建简单上手快，最大程度上帮助企业节省时间成本和费用开支。'
    ]
  },

  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light，高贵主题 theme-puple
   * TODO: 更加优雅的换皮
   */
  sideTheme: 'theme-dark',

  /**
   * 是否系统布局配置
   */
  showSettings: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
