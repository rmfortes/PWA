import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import README from "../../../src/README.md";

class ReadMe extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(README)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} />;
  }
}

export default ReadMe;
