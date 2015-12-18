var UserLoginForm = function() {
  //this.id = 'UserLoginForm';

  this.buildForm = function(form, form_state, options) {
    //var self = this;
    return new Promise(function(ok, err) {
      form._action = dg.config('front'),
      form.name = {
        _type: 'textfield',
        _title: 'Username',
        _required: true,
        _title_placeholder: true
      };
      form.pass = {
        _type: 'password',
        _title: 'Password',
        _required: true,
        _title_placeholder: true
      };
      form.actions = {
        _type: 'actions',
        submit: {
          _type: 'submit',
          _value: 'Log in',
          _button_type: 'primary'
        }
      };
      ok(form);
    });
  };

  this.submitForm = function() {
    var self = this;
    return new Promise(function(ok, err) {
      var form_state = self.getFormState();
      jDrupal.userLogin(form_state.values['name'], form_state.values['pass']).then(ok);
    });

  };

};

// Extend the form prototype and attach our constructor.
UserLoginForm.prototype = new dg.Form('UserLoginForm');
UserLoginForm.constructor = UserLoginForm;