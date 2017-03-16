const React = require('react'),
    ReactDOM = require('react-dom'),
    Navigation = require('./navigation.js'),
    IdeaContact = require('./ideaContact.js'),
    TeamContact = require('./teamContact.js'),
    Footer = require('./footer.js');

const Index = React.createClass({
    log: function(e) {
        console.log('her skjer det noe');
        e.preventDefault();
    },
    render: function() {
        return ( <
            div >
            <
            Navigation links = { this.props.navLinks }
            /> <
            header >
            <
            div className = "header-content" >
            <
            div className = "header-content-inner" >
            <
            h1 id = "homeHeading" > Har du en idé ? < /h1> <
            p > Har du en idé og lurer på hva du skal gjøre med den ? < /p> <
            hr / >
            <
            a data - toggle = "collapse"
            onClick = { this.log }
            href = "#ideacontact"
            className = "btn btn-primary btn-xl page-scroll" > Meld den inn her! < /a> <
            /div> <
            /div> <
            /header> <
            section id = "ideacontact"
            className = "bg-dark row collapse" >
            <
            IdeaContact / >
            <
            /section>

            <
            section className = "bg-primary"
            id = "about" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-lg-8 col-lg-offset-2 text-center" >
            <
            h2 className = "section-heading" > INSJ UiO < /h2> <
            hr className = "dark" / >
            <
            p className = "text-faded" > INSJ UiO er et kontaktpunkt og veiledningstjeneste
            for studenter som ønsker å videreutvikle idéen sin eller få en fot inn i startupmiljøet. < /p> <
            /div> <
            /div> <
            /div> <
            /section>

            <
            section id = "services" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-lg-12 text-center" >
            <
            h2 className = "section-heading" > Prosessen < /h2> <
            hr className = "primary" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "container"
            id = "process" >
            <
            div className = "row" >
            <
            div className = "col-lg-2 col-md-4 text-center" >
            <
            div className = "service-box" >
            <
            i className = "fa fa-4x fa-lightbulb-o text-primary sr-icons" > < /i> <
            h3 > Din idé < /h3> <
            p className = "text-muted" > Du har en idé som du har lyst til å realisere < /p> <
            /div> <
            /div> <
            div className = "col-lg-1 col col-md-6"
            id = "arrows" >
            <
            i className = "fa fa-2x fa-arrow-right text-primary sr-icons" > < /i>    <
            /div> <
            div className = "col-lg-2 col-md-4 text-center" >
            <
            div className = "service-box" >
            <
            i className = "fa fa-4x fa-envelope text-primary sr-icons" > < /i> <
            h3 > Kontakt oss < /h3> <
            p className = "text-muted" > Du kontakter oss
            for hjelp < /p> <
            /div> <
            /div> <
            div className = "col-lg-1 col col-md-6"
            id = "arrows" >
            <
            i className = "fa fa-2x fa-arrow-right text-primary sr-icons" > < /i>    <
            /div> <
            div className = "col-lg-2 col-md-4 text-center" >
            <
            div className = "service-box" >
            <
            i className = "fa fa-4x fa-users text-primary sr-icons" > < /i> <
            h3 > Match < /h3> <
            p className = "text-muted" > Vi matcher deg med passende veileder < /p> <
            /div> <
            /div> <
            div className = "col-lg-1 col col-md-6"
            id = "arrows" >
            <
            i className = "fa fa-2x fa-arrow-right text-primary sr-icons" > < /i>    <
            /div> <
            div className = "col-lg-2 col-md-4 text-center" >
            <
            div className = "service-box" >
            <
            i className = "fa fa-4x fa-trophy text-primary sr-icons" > < /i> <
            h3 > Realiser < /h3> <
            p className = "text-muted" > Realiser din idé! < /p> <
            /div> <
            /div> <
            /div> <
            /div> <
            /section>

            <
            section id = "team" >
            <
            div className = "container" >
            <
            div className = "container-inner" >
            <
            h1 id = "homeHeading" > Lyst til å bli med på team ? < /h1>         <
            p > Har du lyst til å bli en del av en startup ? < /p> <
            hr / >
            <
            a data - toggle = "collapse"
            href = "#teamcontact"
            className = "btn btn-primary btn-xl page-scroll" > Gi beskjed her! < /a> <
            /div> <
            /div> <
            /section>

            <
            TeamContact / >
            <
            Footer / >
            <
            /div>
        );
    }

});

ReactDOM.render( <
    Index / > ,
    document.getElementById('react-root')
);