import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Subscription = () => {
  const auth = useSelector((state) => state.auth);
  const name = auth.user.name;
  const id = auth.user._id;
  const email = auth.user.email;

  const [values, setValues] = useState({
    amount: 0,
    orderID: "",
    error: "",
    success: false,
  });
  const { amount, orderID, error, success } = values;

  const createOrder = async () => {
    const res = await axios
      .get(`http://localhost/api/payment/createOrder`)
      .then((res) => res)
      .catch((err) => console.log(err));
    if (res) {
      setValues({
        error: "",
        success: true,
        orderID: res.data.id,
        amount: res.data.amount,
      });
    }
  };

  const showRazorPay = () => {
    const form = document.createElement("form");
    form.setAttribute("action", "http://localhost/api/payment/callback");
    form.setAttribute("method", "POST");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.setAttribute("data-key", "rzp_test_yPJvTUYJKWzCa6");
    script.setAttribute("data-amount", amount);
    script.setAttribute("data-name", "Unfluke");
    script.setAttribute("data-prefill.contact", "9650324051");
    script.setAttribute("data-prefill.email", email);
    script.setAttribute("data-order_id", orderID);
    script.setAttribute("data-prefill.name", name);
    document.getElementById("root").appendChild(form);
    form.appendChild(script);
    console.log(form);

    script.onload = () => {
      console.log(form.childNodes[1]);
      form.childNodes[1].click();
      form.childNodes[1].style.display = "none";
    };
  };

  useEffect(() => {
    if (amount && orderID && amount > 0 && orderID !== "") {
      showRazorPay();
    }
  }, [values]);
  return (
    <div>
      <div className="col-12">
        <h1
          style={{
            fontSize: "24px",
            textAlign: "left",
            padding: "40px 0px 30px 0px",
            opacity: "0.6",
          }}
        >
          Subscription Bill
        </h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-12 col-md-8 p-5"
            style={{ background: "#00000008", borderRadius: "12px" }}
          >
            <div className="row">
              <div
                className="col-6"
                style={{
                  fontSize: "32px",
                  font: "normal normal bold 32px/37px Ubuntu",
                }}
              >
                Ultima Pack
              </div>
              <div
                className="col-6"
                style={{
                  fontSize: "32px",
                  font: "normal normal bold 32px/37px Ubuntu",
                  textAlign: "right",
                }}
              >
                ₹ 5,500
              </div>
            </div>
            <div className="row">
              <div
                className="col-12"
                style={{
                  fontSize: "18px",
                  opacity: "0.6",
                }}
              >
                10,000 points add on
                <hr />
              </div>
            </div>
            <div className="row">
              <div
                className="col-8"
                style={{
                  fontSize: "20px",
                  opacity: "0.6",
                }}
              >
                Real Money already in the account ( in Points )
              </div>
              <div
                className="col-4 text-right"
                style={{ fontSize: "20px", opacity: "0.6" }}
              >
                ₹ 500
              </div>
            </div>
            <div className="row">
              <div
                className="col-8"
                style={{
                  fontSize: "20px",
                  opacity: "0.6",
                }}
              >
                Offer Discount
              </div>
              <div
                className="col-4 text-right"
                style={{ color: "#DC3545", fontSize: "20px" }}
              >
                {" "}
                - ₹ 100
              </div>
            </div>
            <div className="row">
              <div
                className="col-8"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Net amount
              </div>
              <div
                className="col-4 text-right"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                ₹ 4900
              </div>
            </div>
            <div className="row">
              <div
                className="col-8"
                style={{
                  fontSize: "24px",
                  opacity: "0.6",
                }}
              >
                GST ( 18% )
              </div>
              <div
                className="col-4 text-right"
                style={{
                  color: "#28A745",
                  fontSize: "24px",
                  opacity: "0.6",
                  fontWeight: "500",
                }}
              >
                + ₹ 1000
              </div>
            </div>
            <div className="row">
              <div
                className="col-8"
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                }}
              >
                Total Amount
              </div>
              <div
                className="col-4 text-right"
                style={{ fontSize: "26px", fontWeight: "bold" }}
              >
                ₹ 5900
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 ">
            <div className="col-12">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Coupon Code"
                />
                <div class="input-group-append">
                  <button
                    className="btn"
                    type="button"
                    style={{
                      backgroundColor: "#E27498",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Apply Coupon Code
                  </button>
                </div>
              </div>
            </div>
            <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                {" "}
                <button
                  className="btn"
                  type="button"
                  style={{
                    backgroundColor: "#E27498",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  onClick={createOrder}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
