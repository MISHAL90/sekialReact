import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import DeviceList from "./DeviceList";
class Home extends Component {
  async componentDidMount() {
    await this.props.fetchDevices();
  }

  DeviceChange(e) {
    this.setState({ iemi_id: e.target.value });
  }
  ownershipChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const ListDevices = this.props.devices.map(device => (
      <DeviceList key={device.id} device={device} />
    ));
    return (
      <>
        {this.props.user ? (
          <div className="col-10">
            <div id="content-wrapper col-12">
              <div className="container-fluid">
                <div className="card-body col-12">
                  <div className="table-responsive col-12">
                    <table
                      className="table table-bordered col-12 backgroundTable"
                      id="dataTable"
                      width="100%"
                      style={{ height: 200 }}
                    >
                      <thead style={{ backgroundColor: "#0d6675" }}>
                        <tr>
                          <th style={{ color: "#fff" }}>IMEI</th>
                        </tr>
                      </thead>

                      <tbody>
                        <div
                          style={{
                            overflow: "scroll",
                            height: "500px",
                            marginBottom: 10,
                            padding: 20
                          }}
                        >
                          {ListDevices}
                        </div>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          this.props.history.push("/login")
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices,
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDevices: () => dispatch(actionCreators.fetchDevices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
