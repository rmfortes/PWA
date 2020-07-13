import React, { Component } from "react";
import AppMarkdown from "./About.md";
import ReactMarkdown from "react-markdown";

class About extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    // Gets the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <div className="about"><ReactMarkdown source={markdown} /></div>;
  }
}

export default About;
