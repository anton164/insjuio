const React = require('react');

const Header = React.createClass({
    render: function(){
        return(

          <header>
            <img className="logo" src="images/insj.png" />
            <div className="header-content">
              <div className="header-content-inner">
                <p>
                  Pønsker du på en idé og lurer på hvordan du skal gå frem?
                  <br />
                  Vil du være med på å skape morgendagens tjenester?
                </p>
                <h1 id="homeHeading">Ta litt insj a</h1>
                <br /><br /><br />
                <a data-toggle="collapse" onClick={this.log} href="#ideacontact" className="btn btn-primary btn-xl page-scroll">Snakk med oss</a>
              </div>
            </div>
          </header>

        );
    }
});

module.exports = Header;
