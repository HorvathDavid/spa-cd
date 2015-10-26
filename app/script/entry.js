(function() {
  var AppRoot = require('./app/AppRoot.jsx');
  var _ = require('./thirdparty/underscore.js');

  //Needed for React Developer Tools
  window.React = React;
  window._ = _;

  React.render(<AppRoot />, document.getElementById('mountPoint'));
})();
