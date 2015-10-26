(function() {
  var AppRoot = require('./app/AppRoot.jsx');
  var _ = require('./thirdparty/underscore.js');

  require('./thirdparty/react.js');
  require('./thirdparty/JSXTransformerreact.js');

  //Needed for React Developer Tools
  window.React = React;
  window._ = _;

  var injectTapEventPlugin = require("react-tap-event-plugin");
  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  React.render(<AppRoot />, document.getElementById('mountPoint'));
})();
