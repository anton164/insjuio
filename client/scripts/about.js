const React = require('react');

const About = React.createClass({
    render: function(){
        return(
          <section className="bg-primary" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <h2 className="section-heading">INSJ UiO</h2>
                  <hr className="dark"/>
                  <p className="text-faded">INSJ UiO er et kontaktpunkt og veiledningstjeneste for studenter som ønsker å videreutvikle idéen sin eller få en fot inn i startupmiljøet.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <img className="img-thumbnail" src="images/folk/AntonAbilov.jpg" />
                      <hr className="dark"/>
                      <h3 className="section-heading">Anton Abilov</h3>
                    </div>
                    <div className="col-md-6 text-center">
                      <img src="" />
                      <hr className="dark"/>
                      <h3 className="section-heading">Sebastian Berge</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <img className="img-thumbnail" src="images/folk/Stine.png" />
                      <hr className="dark"/>
                      <h3 className="section-heading">Stine Holst</h3>
                    </div>
                    <div className="col-md-6 text-center">
                      <img className="img-thumbnail" src="images/folk/Aleksander.jpg" />
                      <hr className="dark"/>
                      <h3 className="section-heading">Aleksander Røe Strømshoved</h3>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">

                </div>
              </div>
              <div className="row">
                Sponsorer, Spark, UiO, osv.
              </div>
            </div>
          </section>
        );
    }
});

module.exports = About;
