define(
    [
        "backbone",
        "text!templates/shared/login.html",
        "text!templates/shared/register.html",
        "text!templates/shared/forgot.html"
    ],
    function(Backbone, login_template, register_template, forgot_template) {
        var LoginFormView = Backbone.View.extend({
            el: "#body",
            render: function() {
                var template = _.template(login_template);
                this.$el.html(template);
            }
        });

        var RegisterFormView = Backbone.View.extend({
            el: "#body",
            render: function() {
                var template = _.template(register_template);
                this.$el.html(template);
            }
        });

        var ForgotFormView = Backbone.View.extend({
            el: "#body",
            render: function() {
                var template = _.template(forgot_template);
                this.$el.html(template);
            }
        });

        return ({
            login_form_view: LoginFormView,
            register_form_view: RegisterFormView,
            forgot_form_view: ForgotFormView
        });
    }
);