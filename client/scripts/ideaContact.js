import React from 'react'
import { Form, Text, Select, Textarea, Checkbox, Radio, NestedForm, FormError } from 'react-form'

const IdeaContact = function(){
    return(
    <Form
        validate={values => {
            const{name, email, student, idea, experience} = values
            return{
                name: !name ? 'Navn er påkrevd': false,
                email : !email ? 'Epost er påkrevt': false,
                student: !student ? 'Studieretning påkrevd': false,
                idea: !idea ? 'Du må forklare din idé!' : false,
                experience: !experience ? 'Ønsket erfaring er påkrevd!': false

            }
        }}

        onValidationFail={() =>  {
            window.alert('Det er en feil i skjemaet. Sjekk at du har fylt ut alle påkrevde felter!')
        }}
    > 
    {({ values, submitForm, addValue, removeValue, getError }) => {

        return(
            <div className="container" id="contactform">
                <h1>Har du en idé?</h1>
                <div className="row">
                    <div className="col-sm-8 col-md6">
                        <form onSubmit={submitForm}>
                            <div className="form-group">
                                <label>Navn</label>
                                <Text field='name' placeholder='Navn'/>
                            </div>
                            <div className="form-group">
                                <label>Epost</label>
                                <Text field="email" placeholder="Epost"/>
                            </div>
                            <div className="form-group">
                                <label>Studieretning på UiO</label>
                                <Text field="student" placeholder="Studieretning"/>
                            </div>
                            <div className="form-group">
                                <label>Forklar din idé!</label>
                                <Textarea field="idea" placeholder="Fortell oss om din idé!"/>
                            </div>
                            <div className="form-group">
                                <label>Erfaring på veileder</label>
                                <Textarea field="experience" placeholder="Kompetanse/erfaring du ønsker på veileder"/>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }}
    </Form>)
};

module.exports = IdeaContact;

// const React = require('react');

// const IdeaContact = React.createClass({
//     render: function () {
//         let ideaFormData = {};
//         return (
//             <section id="ideacontact" className="bg-dark collapse">
//                 <div className="container" id="cross">
//                     <i className="fa fa-1x fa-times text-primary sr-icons" data-toggle="collapse" href="#idea"></i>
//                 </div>

//                 <div className="container" id="contactform">
//                     <h1>Har du en idé?</h1>
//                     <div className="row">
//                         <div className="col-sm-8 col-md-6">
//                             if ideaEnquirySubmitted
//                             <h3>Thanks for getting in touch.</h3>
//                             else
//                             <form method="post">
//                                 <input type="hidden" name="action" value="ideacontact" />
//                                 <div className="form-group {{#if ideaValidationErrors.name}}has-error{{/if}}">
//                                     <label>Navn</label>
//                                     <input type="text" name="name.full"  className="form-control" value="{{ideaFormData.[name.full]}}" />
//                                 </div>
//                                 <div className="form-group {{#if ideaValidationErrors.email}}has-error{{/if}}">
//                                     <label>Epost</label>
//                                     <input type="email" name="email" className="form-control" value="{{ideaFormData.email}}" />
//                                 </div>
//                                 <div className="form-group {{#if ideaValidationErrors.student}}has-error{{/if}}">
//                                     <label>Studieretning på UiO</label>
//                                     <input type="text" name="student" placeholder="(optional)" className="form-control" value="{{ideaFormData.student}}" />
//                                 </div>
//                                 <div className="form-group {{#if ideaValidationErrors.idea}}has-error{{/if}} ">
//                                     <label>Forklar din idé!</label>
//                                     <textarea name="idea" placeholder="Fortell oss om din idé!" rows="4" className="form-control">{ideaFormData.idea}</textarea>
//                                 </div>
//                                 <div className="form-group {{#if ideaValidationErrors.experience}}has-error{{/if}}">
//                                     <label>Erfaring på veileder</label>
//                                     <textarea name="experience" placeholder="Kompetanse/erfaring du ønsker på veileder" rows="4" className="form-control">{ideaFormData.experience}</textarea>
//                                 </div>
//                                 <div className="form-actions">
//                                     <button type="submit" className="btn btn-primary">Send</button>
//                                 </div>
//                             </form>
                            
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// });
// module.exports = IdeaContact;