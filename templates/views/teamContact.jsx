const React = require('react');

const TeamContact = React.createClass({
    render: function () {
        let teamFormData = {};
        return (
            <section id="teamcontact" class="bg-dark collapse">
                <div class="container" id="cross">
                    <i class="fa fa-1x fa-times text-primary sr-icons" data-toggle="collapse" href="#teamcontact"></i>
                </div>

                <div class="container" id="contactform">
                    <h1>Bli med på team!</h1>
                    <div class="row">
                        <div class="col-sm-8 col-md-6">
                            #if teamEnquirySubmitted
                            <h3>Thanks for getting in touch.</h3>
                            else
                            <form method="post">
                                <input type="hidden" name="action" value="teamcontact" />
                                <div class="form-group {{#if teamValidationErrors.name}}has-error{{/if}}">
                                    <label>Navn*</label>
                                    <input type="text" name="name.full"  class="form-control" value="{{teamFormData.[name.full]}}" />
                                </div>
                                <div class="form-group {{#if teamValidationErrors.email}}has-error{{/if}}">
                                    <label>Epost*</label>
                                    <input type="email" name="email" class="form-control" value="{teamFormData.email}" />
                                </div>
                                <div class="form-group {{#if teamValidationErrors.student}}has-error{{/if}}">
                                    <label>Studieretning på UiO*</label>
                                    <input type="text" name="student" placeholder="(optional)" class="form-control" value="{{teamFormData.phone}}" />
                                </div>
                                <div class="form-group {{#if teamValidationErrors.message}}has-error{{/if}} ">
                                    <label>Fortell oss om deg!*</label>
                                    <textarea name="message" placeholder="Fortell oss om deg selv!" rows="4" class="form-control">{teamFormData.message}</textarea>
                                </div>
                                <div class="form-actions">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>

                            </form>
                            /if
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = TeamContact;