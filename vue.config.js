module.exports = {
    devServer: {
      proxy: {
        // 设置代理
        '/api': {
          target: 'http://localhost:8080', // 你要代理的目标地址
          changeOrigin: true,
          pathRewrite: {
            '^/api': '', // 如果接口本身没有 '/api' 这个前缀，那么需要将 '/api' 移除
          },
        },
      },
    },
  };
  