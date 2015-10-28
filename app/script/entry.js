(function() {
  var Parent = require('./parent/Parent.jsx');
  var _ = require('./thirdparty/underscore.js');
  var adl = require('./util/adl.js');

  //Needed for React Developer Tools
  window.React = React;
  window._ = _;
  window.adl = adl;

  React.render(<Parent />, document.getElementById('mountPoint'));
})();
