import React from 'react';
import "./tab.css";
const Tab = () => {
  return (
    <div>
      <div className="modal_main">
        <h3 className="modal_main_title">My Docs</h3>
      </div>
      <div class="card">
        <div class="container">
          <div className="card_wrapper">
            <div className="card_wrapper_sub">
              <h5 className="card_main_title">Employee Handbook Template</h5>
              <span className="card_main_title_sub">English</span>
            </div>
            <button className="card_btn">Download Now</button>
          </div>
        </div>
        <div className="short_description">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/spain-flag-icon.png"
            alt="spain_icon"
            className="flag_Icon"
          ></img>
          <p className="flag_name">Spain</p>
          <p className="some_desc">Some Text</p>
        </div>
        <div>
          <p className="purchased">Purchased 2 June, 2022</p>
        </div>

        <div className="short_description_second">
          <img
            src="https://iconarchive.com/download/i76280/designbolts/credit-card-payment/Visa.ico"
            alt="spain_icon"
            className="flag_Icon"
          ></img>
          <p className="flag_name">VISA</p>
          <p className="some_desc_sub">****0987</p>
        </div>
      </div>

      <div class="card">
        <div class="container">
          <div className="card_wrapper">
            <div className="card_wrapper_sub">
              <h5 className="card_main_title">Employee Handbook Template</h5>
              <span className="card_main_title_sub">English</span>
            </div>
            <button className="card_btn">Download Now</button>
          </div>
        </div>
        <div className="short_description">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/spain-flag-icon.png"
            alt="spain_icon"
            className="flag_Icon"
          ></img>
          <p className="flag_name">Spain</p>
          <p className="some_desc">Some Text</p>
        </div>
        <div>
          <p className="purchased">Purchased 2 June, 2022</p>
        </div>

        <div className="short_description_second">
          <img
            src="https://iconarchive.com/download/i76280/designbolts/credit-card-payment/Visa.ico"
            alt="spain_icon"
            className="flag_Icon"
          ></img>
          <p className="flag_name">VISA</p>
          <p className="some_desc_sub">****0987</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
