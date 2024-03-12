import React, { useContext } from "react";
import { heroBg } from "../../images/homeImages";
import PopupBtn from "../Popup/PopupBtn";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { token, loginUser } = useContext(GlobalContext);

  function handleGuestLogin() {
    const email = "tester@mail.com";
    const pw = "tester";

    loginUser(email, pw);
  }

  return (
    <section className="hero text-center">
      <div
        className="hero-background h-100 w-100 all-center"
        style={{ background: `url(${heroBg})` }}
      >
        <div className="container h-100 all-center-column justify-content-sm-around">
          <div className="caption all-center-column">
            <div className="title bold">
              Welcome to <span className="dark">Price Tracker Pro</span>
            </div>
            <div className="subtitle">
              We help you track any Amazon product and maintain your records in
              one place.
            </div>

            <div className="buttons mt-4 all-center">
              {!token && (
                <>
                  <PopupBtn type="login">
                    <div className="call-to-action all-center-column">
                      <button
                        className="btn btn-outline-secondary btn-md mx-2"
                        onClick={handleGuestLogin}
                      >
                        Demo
                      </button>
                    </div>
                  </PopupBtn>

                  <PopupBtn type="signUp">
                    <button className="btn bold btn-primary btn-md mx-2">
                      Get started
                    </button>
                  </PopupBtn>
                </>
              )}

              {token && (
                <Link
                  className="btn bold btn-primary btn-md mx-2"
                  to="/dashboard"
                >
                  View Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* <img
            src={heroVector}
            alt="vector"
            className="vector d-sm-block d-none"
          /> */}
        </div>
      </div>
    </section>
  );
}
