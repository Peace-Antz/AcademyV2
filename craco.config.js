module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback, // Keep existing fallbacks
          crypto: require.resolve('crypto-browserify'),
          os: require.resolve('os-browserify/browser'),
          stream: require.resolve('stream-browserify'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          zlib: require.resolve('browserify-zlib'),
          url: require.resolve('url'),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/"),
        "zlib": require.resolve("browserify-zlib"),
        "process": require.resolve("process/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "os": require.resolve("os-browserify/browser"),
      };

      return webpackConfig;
    },
  },
};
