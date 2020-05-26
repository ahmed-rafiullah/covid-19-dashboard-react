import React from "react";
import { News } from "../../DataInterfaces/newsApiInterface";
import { captureException } from "@sentry/browser";

interface NewsDataState {
  page: number;
  news: News | null | undefined;
  error: string | null | undefined;
}

interface NewsDataProps {
  country: string;
}

export default class NewsData extends React.Component<
  NewsDataProps,
  NewsDataState
> {
  state: NewsDataState = {
    page: 1,
    news: null,
    error: null,
  };

  componentDidMount() {
    console.log('called')
    fetch(
      `http://www.newsapi.org/v2/everything?q=corona&apiKey=38145a8c86b24447b7b67755a293f60a&language=en&sortBy=popularity&pageSize=50`,
    )
      .then((response) => {
          console.log(response)
          return response.json()
      }
      )
      .then((result) => {
       console.log(result)
      })
      
  }

  

  render() {
    if (this.state.error) {
      return <div>Error ! :(</div>;
    } else {
      return (
        <>
          {this.state.news?.articles.map((x) => {
            return (
              <div style={{background: 'red', padding: '10px'}}>
                <h4>{x.title}</h4>
                <p>{x.description}</p>
              </div>
            );
          })}
        </>
      );
    }
  }
}
