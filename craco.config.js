module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          crypto: false,
          os: false,
          // Add any other modules you want to resolve to false here.
        };
        
        return webpackConfig;
      },
    },
  };
  