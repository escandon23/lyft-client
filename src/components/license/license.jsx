import React from "react";
import { HashLink } from "react-router-hash-link";
import "./license.scss";

const License = () => {


  const thisYear = new Date().getFullYear()

  return (
    <footer className="license">
      {/* TOP */}
      <div className="license-top">
        <div className="brand">
          <h2><HashLink to="/#home">LYFT FX</HashLink></h2>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="license-middle">
        <span className="label">Liquidity Providers</span>
        <div className="liquidity">
          <img src="dukascopy.svg" alt="Dukascopy" />
          <img src="barclays.svg" alt="Barclays" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="license-bottom">
        <p className="risk-title">Risk Warning</p>

        <p>
          Trading Forex and CFDs involves significant risk and may not be
          suitable for all investors. You may lose all of your invested capital.
          Please ensure you fully understand the risks involved.
        </p>


        <div className="footer-links">
          <span>Terms & Conditions</span>
          <span>Risk Disclosure</span>
          <span>Privacy Policy</span>
        </div>

        <p className="copyright">
          &copy; {thisYear} LYFT FX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default License;
