import React from "react";
import "./license.scss";

const License = () => {
  return (
    <footer className="license">
      {/* TOP */}
      <div className="license-top">
        <div className="brand">
          <h2>LYFT FX</h2>
          <span className="tagline">Global Forex & CFD Trading Platform</span>
        </div>

        <div className="regulation">
          <span className="label">Regulated by</span>
          <div className="reg-badge">
            <img src="license-approved.svg" alt="MFSA" />
            <p>MFSA · License No: IS/560000</p>
          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="license-middle">
        <span className="label">Liquidity Providers</span>
        <div className="liquidity">
          <img src="dukascopy.svg" alt="Dukascopy" />
          <img src="barclays.svg" alt="Barclays" />
          <img src="ubs.svg" alt="UBS" />
          <img src="citi.svg" alt="Citi" />
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
          © 2015–2026 LYFT FX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default License;
