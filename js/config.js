
seajs.config({
  // Enable plugins
  plugins: ['shim'],
  base: "../js",
 
  paths: {
    
  },
  // Configure alias
  alias: {
    'jquery': '../js/lib/jquery.js',
    'jquery.easing': {
      src: '../js/lib/jquery.easing.1.3.js',
      deps: ['jquery']
    },
    datepicker: 'lib/bootstrap-datepicker',
    area: "lib/jquery-plugin/location/area" ,
    location: 'lib/jquery-plugin/location/location',
    validation: "lib/jquery-plugin/validation/validation" ,
  }
});
