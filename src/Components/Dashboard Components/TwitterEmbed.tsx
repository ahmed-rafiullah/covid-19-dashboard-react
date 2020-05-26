import React from "react";

// https://dev.to/heymarkkop/embed-twitter-widget-on-reactjs-1768
export default class TwitterEmbed extends React.PureComponent {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }

  render() {
    return (
      <>
        <div style={{height:'40px' , padding: '10px', marginBottom: '10px', fontSize: '20px', fontWeight: 'bold'}}>Twitter Feed</div>
        <div
          className="twitter-embed"
          style={{
            position: "absolute",
            top: "50px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            overflow: "auto",
            padding: "10px",
          }}
        >
          <a
            className="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/WHO?ref_src=twsrc%5Etfw"
          >
            Tweets by WHO
          </a>
        </div>
      </>
    );
  }
}
