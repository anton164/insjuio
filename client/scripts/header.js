const React = require('react');

const Header = React.createClass({
    render: function(){
        return(

          <header>
            <img className="logo" src="images/insj.png" />
            <div className="header-content">
              <div className="header-content-inner">
                <h1 id="homeHeading">Har du en idé?</h1>
                <p>Har du en idé og lurer på hva du skal gjøre med den?</p>
                <hr/>
                <a data-toggle="collapse" onClick={this.log} href="#ideacontact" className="btn btn-primary btn-xl page-scroll">Snakk med oss</a>
              </div>
            </div>
          </header>

        );
    }
});

module.exports = Header;
