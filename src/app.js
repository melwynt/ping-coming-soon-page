import React, { useState } from 'react';
import EmailValidator from 'email-validator';

const App = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const submit = (event) => {
    event.preventDefault();

    !EmailValidator.validate(email)
      ? setErrorEmail(true)
      : setErrorEmail(false);
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
          <form className="main__hero-block__form" onSubmit={submit} noValidate>
            <input
              type="text"
              id="email"
              className={`main__hero-block__form__input ${
                errorEmail ? 'error' : ''
              }`}
              placeholder="Your email address..."
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="main__hero-block__form__button">
              Notify Me
            </button>
          </form>
          {errorEmail && (
            <div className="main__hero-block__message-error">
              Please provide a valid email address
            </div>
          )}
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
            <img src={require('../images/facebook.svg')} alt="facebook" />
          </div>
          <div className="footer__social__icon">
            <img src={require('../images/twitter.svg')} alt="twitter" />
          </div>
          <div className="footer__social__icon">
            <img src={require('../images/instagram.svg')} alt="instagram" />
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
