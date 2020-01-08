import React from "react";

export default class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      items: null
    };
  }

  async componentDidMount() {
    const url =
      "https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      items: data.results[0]
    });
  }

  render() {
    return;
  }
}
