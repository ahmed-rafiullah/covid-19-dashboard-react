import React from "react";

export default class TwitterEmbed extends React.PureComponent {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }

  render() {
    return (
      <div className="twitter-embed" style={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        overflow: 'auto',
        padding: '20px'
      }}>
        <a className="twitter-timeline"data-theme="dark" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a> 
      </div>
    );
  }
}
