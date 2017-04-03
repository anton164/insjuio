const React = require('react');

const Services = React.createClass({
  render: function () {
    return (
      <section id="services">
        <div className="container" id="process">
          <div className="row">
            <div className="col-sm-4 text-center">
              <img className="wat-mann" src="images/wat-mann.png" />
            </div>
            <div className="col-sm-8">
              <h2 className="section-heading">Er det ikke på tide at du bidrar?</h2>
              <br />
              <p>
                Har du noensinne tenkt at det finnes viktige problemer de
                </p>
              <p>
                Det spiller ingen rolle om du har en god idé, en dårlig idé eller en briljant idé<br />
                - <strong>det er viktig å ha noen å sparre med</strong>.
              </p>
              <p>
                Vi setter deg i kontakt med en mentor som hjelper deg med å teste og videreutvikle idéen din. Helt gratis.
              </p>
              <p>
                Har du lyst til å kommersialisere et forskningsprosjekt?
              </p>
              <div className="weird-slogans">
                <span className="catstagram">
                  Eller lage <span className="instagram">instagram</span> for katter 🐱?
                </span>
                <span className="tinderdog">
                  Hva med <span className="tinder">Tinder🔥</span> for hundepass 🐶?
                </span>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-sm-6">
              <h2 className="section-heading">Vi er her for å hjelpe deg</h2>
              <br />
              <p>
                Insj UiO er et kontaktpunkt for deg som ønsker å realisere idéen din eller få en fot inn i startupmiljøet.
              </p>
              <p>
                Kanskje du bare er nysgjerrig på hva som skjer i startupmiljøet på UiO?<br />
                Eller har lyst til å bli med i et team?<br />
              </p>
              <br />
              <p className="text-center">
                <a data-toggle="collapse" onClick={this.log} href="#ideacontact" className="btn btn-success btn-xl page-scroll">
                  Snakk med oss
                </a>
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <img src="images/idea-woman.png" className="idea-woman" />
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Services;
