'use strict';

module.exports = React.createClass({

  _datePicker: null,

  componentDidMount: function() {
    let onChange = this.props.onChange;
    this._datePicker = $(React.findDOMNode(this.refs.datepicker)).datepicker({
      onSelect: function(dateText) {
        onChange($(this).datepicker('getDate'));
      },
    });
  },

  render: function() {
    return (
      <div>
        <p> Birthdate: <input type='text' ref='datepicker' /></p>
      </div>
    );
  },
});
