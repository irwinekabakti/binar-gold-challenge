import React from "react";
import classes from "./CtaBanner.module.css";

const CtaBanner = () => {
  return (
    <section className={classes.CtaBanner} id="cta-banner">
      <div className="container">
        <div className={`text-center ${classes.cardBanner}`}>
          <div className="card-body">
            <h1
              className={`card-title justify-content-center align-self-center ${classes.cardTitleBanner}`}>
              Sewa Mobil di (Lokasimu) Sekarang
            </h1>
            <p className={`fw-bold card-text ${classes.cardParagraph}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br></br>
              tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a
              href="/SearchCars"
              className={`justify-content-center text-white fw-bold  ${classes.navItemBtn}`}>
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
