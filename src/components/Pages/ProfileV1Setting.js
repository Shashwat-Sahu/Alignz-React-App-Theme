import React from "react";
import { connect } from "react-redux";
import imageuser from "../../assets/images/user.png";
import { useSelector } from "react-redux";
const ProfileV1Setting = () => {
  const auth = useSelector((state) => state.auth);
  var backtestWidth;
  var emailWidth;
  var telegramWidth;
  var whatsappWidth;
  var virtualWidth;
  if (auth.user.tier === 0) {
    backtestWidth = (auth.user.backtest / 2) * 100;
    emailWidth = (auth.user.emailNotification / 5) * 100;
    telegramWidth = (auth.user.telegramNotification / 5) * 100;
    whatsappWidth = (auth.user.whatsappNotification / 5) * 100;
    virtualWidth = (auth.user.virtualTradesNotification / 200) * 100;
  } else if (auth.user.tier === 2) {
    backtestWidth = (auth.user.backtest / 10) * 100;
    emailWidth = (auth.user.emailNotification / 50) * 100;
    telegramWidth = (auth.user.telegramNotification / 50) * 100;
    whatsappWidth = (auth.user.whatsappNotification / 50) * 100;
    virtualWidth = (auth.user.virtualTradesNotification / 500) * 100;
  } else if (auth.user.tier === 3) {
    backtestWidth = (auth.user.backtest / 50) * 100;
    emailWidth = (auth.user.emailNotification / 150) * 100;
    telegramWidth = (auth.user.telegramNotification / 150) * 100;
    whatsappWidth = (auth.user.whatsappNotification / 150) * 100;
    virtualWidth = -1;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-3 text-center p-3"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "20px",
              height: "250px",
            }}
          >
            <img
              src={imageuser}
              className="img-fluid mt-4"
              style={{ borderRadius: "50%" }}
              alt=" "
            />
            <h3>{auth.user.name}</h3>
          </div>

          <div className="col-12 col-md-9 pl-4">
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "20px",
                marginBottom: "30px",
              }}
            >
              <h3 className="p-3">Personal Information</h3>

              <form className="p-3">
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={auth.user.email}
                      disabled
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Phone Number</label>
                  <input
                    type="phone"
                    class="form-control"
                    id="inputAddress"
                    placeholder="12342456"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputCity">State</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
            <div
              className="mt-4"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "20px",
                marginBottom: "30px",
              }}
            >
              <h3 className="px-3 pt-3">Account Information</h3>
              <div className="p-3">
                <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                  Your Tier : {auth.user.tier}
                </div>
                <p style={{ marginBottom: "0" }} className="pt-3">
                  Backtests
                </p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${backtestWidth}%` }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                {virtualWidth !== -1 && (
                  <>
                    {" "}
                    <p style={{ marginBottom: "0" }} className="pt-3">
                      Virtual Trades
                    </p>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: `${virtualWidth}%` }}
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </>
                )}

                <p style={{ marginBottom: "0" }} className="pt-3">
                  Email Alerts
                </p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${emailWidth}%` }}
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <p style={{ marginBottom: "0" }} className="pt-3">
                  Whatsapp Alerts
                </p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${whatsappWidth}%` }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p style={{ marginBottom: "0" }} className="pt-3">
                  Telegram Alerts
                </p>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: `${telegramWidth}%` }}
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                  className="pt-3"
                >
                  Days Left : <span style={{ color: "green" }}>25 Days</span>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.125)",
                borderRadius: "20px",
                marginBottom: "30px",
              }}
            >
              <h3 className="p-3">Share Your Code</h3>
              <p className="pl-3">
                Share the redeem code with others to get extra cashbacks and
                rewards
              </p>
              <p
                className="p-3 text-center"
                style={{ fontSize: "40px", fontWeight: "bold", color: "green" }}
              >
                {auth.user.hisReferral}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileV1Setting;
