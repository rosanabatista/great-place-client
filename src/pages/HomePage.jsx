import mainLogo from "../greatPlaces.svg";
import mainLogo2 from "../greatPlaces2.svg";

import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mt-3 mb-3 mainLogo">
          <img src={mainLogo} alt="logo" className="d-none d-lg-block w-100" />
          <img
            src={mainLogo2}
            alt="logo"
            className="d-lg-none w-100 ps-3 pe-3"
          />
        </div>
        <h4 className="w-50 text-center m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor
          pulvinar dolor
        </h4>
      </header>
    </div>
  );
}

export default HomePage;
