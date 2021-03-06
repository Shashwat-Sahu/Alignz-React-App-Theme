import React, { useState, useEffect } from "react";
import "./IndicatorModal.scss";

const IndicatorModal = ({ indicatorModalInput, closeIndicatorModal }) => {
  // const [indicatorSettings, setIndicatorSettings] = useState(
  //   indicatorModalInput.settings
  // );
  const [tmpValue, setTmpValue] = useState(14);
  const [tmpSourceValue, setTmpSourceValue] = useState('Open');
  const [tmpTimeframeValue, setTmpTimeframeValue] = useState(indicatorModalInput.timeframe);
  const [offsetCandleValue, setOffsetCandleValue] = useState("");
  const [timeFrameValue, setTimeFrameValue] = useState("");
  const [segmentValue, setSegmentValue] = useState("");
  const [source, setSource] = useState("");

  const closeModal = () => {
    closeIndicatorModal({
      indicatorName: indicatorModalInput.indicatorName,
      timeframe: document.getElementById("scanner-candelstick-timeframe").value,
      offset: document.getElementById("scanner-offset").value,
      setting: indicatorModalInput.settings,
    });
    document.getElementById("staticBackdropLive").style.display = "none";
  };

  useEffect(() => {

    console.log(indicatorModalInput)
    document.getElementById("staticBackdropLive").style.background =
      "rgba(0, 0, 0, 0.9)";
  }, []);

  return (
    <div
      class="modal fade show blur"
      id="staticBackdropLive"
      style={{ display: "block" }}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLiveLabel"
      aria-modal="true"
      role="dialog"
      onDoubleClick={e => e.preventDefault()}
    >
      <div class="modal-dialog">
        <div
          class="modal-content"
          style={{ width: "max-content", padding: "0.5rem 1.5rem" }}
        >
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {indicatorModalInput.indicatorName.toUpperCase()}
            </h5>
          </div>
          <div class="modal-body" style={{ margin: "0" }}>
            <div className="scanner-conditions-options">
              <div className="scanner-conditions-option">
                <h6>Candelstick timeframe</h6>
                <select
                  className="form-control scanner-condition-option"
                  name="candelstick-timeframe"
                  id="scanner-candelstick-timeframe"
                  value={tmpTimeframeValue}
                  onChange={e => setTmpTimeframeValue(e.target.value)}
                >
                  <option value="1-min">1 min</option>
                  <option value="2-min">2 min</option>
                  <option value="3-min">3 min</option>
                  <option value="5-min">5 min</option>
                  <option value="10-min">10 min</option>
                  <option value="15-min">15 min</option>
                </select>
              </div>

              <div className="scanner-conditions-option">
                <h6>Offset</h6>
                <select
                  className="form-control scanner-condition-option"
                  name="scanner-offset"
                  id="scanner-offset"
                >
                  <option value="latest-candle">Latest Candle</option>
                  <option value="1-candle">1 Candle ago</option>
                  <option value="2-candle">2 Candle ago</option>
                  <option value="3-candle">3 Candle ago</option>
                  <option value="4-candle">4 Candle ago</option>
                  <option value="5-candle">5 Candle ago</option>
                </select>
              </div>

              <div className="scanner-conditions-option">
                <h6>Segment 2</h6>
                <select
                  className="form-control scanner-condition-option"
                  name="scanner-segment-2"
                  id="scanner-segment-2"
                >
                  <option value="latest-candel">Latest Candle</option>
                </select>
              </div>
            </div>

            <hr />

            <div className="indicator-settings">

              {indicatorModalInput.settings.map((e, i) => {
                return (
                  <div className="scanner-conditions-option">
                    <h6>{e.name}</h6>
                    {e.options === undefined ? (
                      <input
                        className="form-control scanner-condition-option"
                        type="number"
                        name="indicator-setting-length"
                        value={e.value}
                        onChange={(element) => {
                          if (element.target.value < 1) return;

                          e.value = element.target.value;
                          setTmpValue(element.target.value);
                        }}
                      />
                    ) : (
                      <select
                        className="form-control scanner-condition-option"
                        name="indicator-setting-source"
                        id="indicator-source"
                        value={e.value}
                        onChange={(element) => {
                          
                          e.value = element.target.value;
                          setTmpSourceValue(element.target.value);
                        }}
                      >
                        {e.options.map((v) => (
                          <option value={v}>{v}</option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorModal;
