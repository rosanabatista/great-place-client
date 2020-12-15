import mainLogo from "../greatPlaces.svg";
import mainLogo2 from "../greatPlaces2.svg";

import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mt-3 mb-3 mainLogo text-center">
          <img src={mainLogo} alt="logo" className="d-none d-lg-block w-100" />
          <img
            src={mainLogo2}
            alt="logo"
            className="d-lg-none w-100 ps-3 pe-3"
          />
        </div>
        <h4 className="w-50 text-center m-auto ">
          A great place is where everyone is welcomed.
        </h4>
      </header>
      <section className="hero mt-4">
        <div className="container">
          <div className="row text-align-center">
            <div className="col-sm-4 web-box text-center mt-3 mb-3">
              <span>
                <i className="icon-home fas fa-search-location"></i>
              </span>
              <h3>Find</h3>
              <p>Find a restaurant near you with informations that matter.</p>
            </div>
            <div className="col-sm-4 web-box text-center mt-3 mb-3">
              <span>
                <i className="icon-home fas fa-filter"></i>
              </span>
              <h3>Filter</h3>
              <p>
                Filter by accessibility. Are you going with kids? We have your
                back!
              </p>
            </div>
            <div className="col-sm-4 web-box text-center mt-3 mb-3">
              <span>
                <i className="icon-home fas fa-map-marker-alt"></i>
              </span>
              <h3>Go</h3>
              <p>Now you know that in this place you will be comfortable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
