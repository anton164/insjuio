const React = require('react');

const TeamContact = React.createClass({
    render: function () {
        let teamFormData = {};
        return (
            <section id="teamcontact" className="bg-dark collapse">
                <div className="container" id="cross">
                    <i className="fa fa-1x fa-times text-primary sr-icons" data-toggle="collapse" href="#teamcontact"></i>
                </div>

                <div className="container" id="contactform">
                    <h1>Bli med på team!</h1>
                    <div className="row">
                        <div className="col-sm-8 col-md-6">
                            /*#if teamEnquirySubmitted
                            <h3>Thanks for getting in touch.</h3>
                            else*/
                            <form method="post">
                                <input type="hidden" name="action" value="teamcontact" />
                                <div className="form-group {{#if teamValidationErrors.name}}has-error{{/if}}">
                                    <label>Navn*</label>
                                    <input type="text" name="name.full"  className="form-control" value="{{teamFormData.[name.full]}}" />
                                </div>
                                <div className="form-group {{#if teamValidationErrors.email}}has-error{{/if}}">
                                    <label>Epost*</label>
                                    <input type="email" name="email" className="form-control" value="{teamFormData.email}" />
                                </div>
                                <div className="form-group {{#if teamValidationErrors.student}}has-error{{/if}}">
                                    <label>Studieretning på UiO*</label>
                                    <input type="text" name="student" placeholder="(optional)" className="form-control" value="{{teamFormData.phone}}" />
                                </div>
                                <div className="form-group {{#if teamValidationErrors.message}}has-error{{/if}} ">
                                    <label>Fortell oss om deg!*</label>
                                    <textarea name="message" placeholder="Fortell oss om deg selv!" rows="4" className="form-control">{teamFormData.message}</textarea>
                                </div>
                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = TeamContact;