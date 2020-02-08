import React from "react";

class Detail extends React.Component {
  //if users goes 'movie-detail' directly,
  //then I push them to 'Home'.
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  //this part happens first
  //if location doesn't exit then I would get an error.
  render() {
    const { location } = this.props;
    //so, I check the location exists.
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
