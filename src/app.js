import React, { useState } from 'react';

const App = () => {
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <main className="main">
        <div className="main__logo">
          <img src={require('../images/logo.svg')} alt="Ping Logo" />
        </div>
        <div className="main__hero-block">
          <h1 className="main__hero-block__announcement">
            We are launching <span>soon!</span>
          </h1>
          <div className="main__hero-block__cta">
            Subscribe and get notified
          </div>
          <form
            action=""
            className="main__hero-block__form"
            onSubmit={submit}
            noValidate
          >
            <input
              type="text"
              id="email"
              className="main__hero-block__form__input"
              placeholder="Your email address..."
            />
            <button type="submit" className="main__hero-block__form__button">
              Notify Me
            </button>
          </form>
        </div>
        <div className="main__hero-image-container">
          <img
            src={require('../images/illustration-dashboard.png')}
            alt="Illustration Dashboard"
            className="main__hero-image-container__image"
          />
        </div>
      </main>
      <footer className="footer">
        <div className="footer__social">
          <div className="footer__social__icon first">
            <img
              src={require('../images/facebook.svg')}
              alt="facebook"
              width="14px"
              height="14px"
            />
          </div>
          <div className="footer__social__icon">
            <img
              src={require('../images/twitter.svg')}
              alt="twitter"
              width="14px"
              height="14px"
            />
          </div>
          <div className="footer__social__icon">
            <img
              src={require('../images/instagram.svg')}
              alt="instagram"
              width="14px"
              height="14px"
            />
          </div>
        </div>
        <div className="footer__copyright">
          © Copyright Ping. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
