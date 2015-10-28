'use strict';

const moment = require('moment');
const Datepicker = require('../components/Datepicker');

module.exports = React.createClass({

  _onDatePickerChange: function(date) {
    console.error(date);
    this.setState({
      date: date,
    });
  },

  _onSubmit: function(e) {
    e.preventDefault();

    let data = {
      name: React.findDOMNode(this.refs.name).value,
      email: React.findDOMNode(this.refs.email).value,
      profession: React.findDOMNode(this.refs.profession).value,
    };

    let options = {
      type: 'POST',
      url: '/api/post',
      data: data,
      dataType: 'json',
      token: 'whatever',
    };

    window.adl.post(options).then((data) => {
      alert(JSON.stringify(data));
    }).catch((err) => {
      console.error(err);
    });

  },

  render: function() {
    return (
      <div className='container col-md-offset-4 col-md-4 col-xs-12'>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control required' ref='name' id='name' placeholder='Your name here' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input type='email' className='form-control required' ref='email' id='email' placeholder='Email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='profession'>Profession</label>
            <input type='text' className='form-control' ref='profession' id='profession' placeholder='Profession' />
          </div>
          <div className='form-group pull-right'>
            <Datepicker onChange={this._onDatePickerChange} />
          </div>
          <button type='submit' ref='submit' className='btn btn-default' onClick={this._onSubmit} >Submit</button>
        </form>
      </div>
    );
  },
});
