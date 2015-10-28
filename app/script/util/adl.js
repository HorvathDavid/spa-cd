'use strict';

function Adl() {};

Adl.prototype.post = function(options) {
  var options = options || {};
  return new Promise((resolve, reject) => {
    $.ajax({
      type: options.type,
      url: options.url,
      data: options.data,
      dataType: options.dataType,
      beforeSend: function(request) {
        request.setRequestHeader('Authorization', options.token);
      },

      success: function(data) {
        resolve(data);
      },

      error: function(err) {
        reject(err);
      },

    });
  });
};

module.exports = new Adl();
