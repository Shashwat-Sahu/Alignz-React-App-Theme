import React from "react";
import { connect } from "react-redux";

class StripedRows extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>
              Striped Rows{" "}
              <small>
                Use <code>.table-striped</code> to add zebra-striping to any
                table row within the <code>&lt;tbody&gt;</code>
              </small>
            </h2>
          </div>
          <div className="body table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>USERNAME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>
                    Otto lorem100cefl,vnjefrvoiepw;mlcewd3u94fih4f43 f4rfr4g
                    t5gerfreg erfewdikrcv Otto
                    lorem100cefl,vnjefrvoiepw;mlcewd3u94fih4f43 f4rfr4g
                    t5gerfreg erfewdikrcv Otto
                    lorem100cefl,vnjefrvoiepw;mlcewd3u94fih4f43 f4rfr4g
                    t5gerfreg erfewdikrcv
                  </td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>Jellybean</td>
                  <td>@lajelly</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Larry</td>
                  <td>Kikat</td>
                  <td>@lakitkat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(StripedRows);
