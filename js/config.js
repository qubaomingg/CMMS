
seajs.config({
  // Enable plugins
  plugins: ['shim'],
  base: "../js",
  // Configure alias
  alias: {
    'jquery': {
      src: '../js/lib/jquery.js',
      exports: 'jQuery'
    },

    'jquery.easing': {
      src: '../js/lib/jquery.easing.1.3.js',
      deps: ['jquery']
    }
  }
});
