const React = require('react');

const Services = React.createClass({
    render: function(){
        return(
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Prosessen</h2>
                  <hr className="primary" />
                </div>
              </div>
            </div>
            <div className="container" id="process">
              <div className="row">
                <div className="col-lg-2 col-md-4 text-center">
                  <div className="service-box">
                    <i className="fa fa-4x fa-lightbulb-o text-primary sr-icons"></i>
                    <h3>Din idé</h3>
                    <p className="text-muted">Du har en idé som du har lyst til å realisere</p>
                  </div>
                </div>
                <div className="col-lg-1 col col-md-6" id="arrows">
                  <i className="fa fa-2x fa-arrow-right text-primary sr-icons"></i>
                </div>
                <div className="col-lg-2 col-md-4 text-center">
                  <div className="service-box">
                    <i className="fa fa-4x fa-envelope text-primary sr-icons"></i>
                    <h3>Kontakt oss</h3>
                    <p className="text-muted">Du kontakter oss for hjelp</p>
                  </div>
                </div>
                <div className="col-lg-1 col col-md-6" id="arrows">
                  <i className="fa fa-2x fa-arrow-right text-primary sr-icons"></i>
                </div>
                <div className="col-lg-2 col-md-4 text-center">
                  <div className="service-box">
                    <i className="fa fa-4x fa-users text-primary sr-icons"></i>
                    <h3>Match</h3>
                    <p className="text-muted">Vi matcher deg med passende veileder</p>
                  </div>
                </div>
                <div className="col-lg-1 col col-md-6" id="arrows">
                  <i className="fa fa-2x fa-arrow-right text-primary sr-icons"></i>
                </div>
                <div className="col-lg-2 col-md-4 text-center">
                  <div className="service-box">
                    <i className="fa fa-4x fa-trophy text-primary sr-icons"></i>
                    <h3>Realiser</h3>
                    <p className="text-muted">Realiser din idé!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
}
});

module.exports = Services;
