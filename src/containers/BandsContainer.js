import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";
import Band from "../components/Band";

class BandsContainer extends Component {
  renderBands = () =>
    this.props.bands.map((band, id) => <Band key={id} name={band.name} />);
  // console.log(this.props.bands.map((band) => band.name));

  render() {
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ol>{this.renderBands()}</ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({ type: "ADD_BAND", payload: formData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
