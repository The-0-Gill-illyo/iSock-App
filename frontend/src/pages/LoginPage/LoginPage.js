import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  },);
  

  return (
    <div className="brand">
      <div>
        <p>
          <h1 className="title">
          Investing isn't just about money—it's about your future Let us help you create the future you want 
          for yourself and your loved ones. Whether you're new to investing or an experienced trader, we're here to help you on your way.
          </h1>
          <h1 className="stocks">
            Stocks
          </h1>
          <h2 className="invest">
            Invest in your favorite companies Put your money to work in our easy-to-manage account
          </h2>
          <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label >
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button>Login!</button>
      </form>
          <h1 className="questions">
          Frequently Asked Questions
          What Does The Intelligent Investor Teach You?
          </h1>
          <h2 className="quote">
          The Intelligent Investor is widely considered to be the definitive text on value investing. 
          According to Graham, investors should analyze a company's financial reports and its operations 
          but ignore the market noise. The whims of investors—their greed and fear—are what creates this 
          noise and fuels daily market sentiments.

          Most importantly, investors should look for price-value discrepancies—when the market price of a 
          stock is less than its intrinsic value. When these opportunities are identified, investors should 
          make a purchase. Once the market price and the intrinsic value are aligned, investors should sell.

          The Intelligent Investor also advises investors to hold a portfolio of 50% stocks and 50% bonds or 
          cash, to be the pitfalls of day trading, to take advantage of market fluctuations and market volatility, 
          to avoid buying stocks simply when they are fashionable, and to look out for ways that companies may be 
          manipulating their accounting methods in order to inflate their EPS value
          </h2>
        </p>
        </div>
        </div>
  );
};

export default LoginPage;
