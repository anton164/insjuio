const React = require('react');

const IdeaContact = React.createClass({
    render: function () {
        let ideaFormData = {};
        return (
            <section id="ideacontact" class="bg-dark collapse">
                <div class="container" id="cross">
                    <i class="fa fa-1x fa-times text-primary sr-icons" data-toggle="collapse" href="#idea"></i>
                </div>

                <div class="container" id="contactform">
                    <h1>Har du en idé?</h1>
                    <div class="row">
                        <div class="col-sm-8 col-md-6">
                            if ideaEnquirySubmitted
                            <h3>Thanks for getting in touch.</h3>
                            else
                            <form method="post">
                                <input type="hidden" name="action" value="ideacontact" />
                                <div class="form-group {{#if ideaValidationErrors.name}}has-error{{/if}}">
                                    <label>Navn</label>
                                    <input type="text" name="name.full"  class="form-control" value="{{ideaFormData.[name.full]}}" />
                                </div>
                                <div class="form-group {{#if ideaValidationErrors.email}}has-error{{/if}}">
                                    <label>Epost</label>
                                    <input type="email" name="email" class="form-control" value="{{ideaFormData.email}}" />
                                </div>
                                <div class="form-group {{#if ideaValidationErrors.student}}has-error{{/if}}">
                                    <label>Studieretning på UiO</label>
                                    <input type="text" name="student" placeholder="(optional)" class="form-control" value="{{ideaFormData.student}}" />
                                </div>
                                <div class="form-group {{#if ideaValidationErrors.idea}}has-error{{/if}} ">
                                    <label>Forklar din idé!</label>
                                    <textarea name="idea" placeholder="Fortell oss om din idé!" rows="4" class="form-control">{ideaFormData.idea}</textarea>
                                </div>
                                <div class="form-group {{#if ideaValidationErrors.experience}}has-error{{/if}}">
                                    <label>Erfaring på veileder</label>
                                    <textarea name="experience" placeholder="Kompetanse/erfaring du ønsker på veileder" rows="4" class="form-control">{ideaFormData.experience}</textarea>
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
module.exports = IdeaContact;