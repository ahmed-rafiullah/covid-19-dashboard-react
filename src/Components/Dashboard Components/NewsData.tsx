import React from "react";
import { News } from "../../DataInterfaces/newsApiInterface";
import { captureException } from "@sentry/browser";

interface NewsDataState {
  page: number;
  news: News | null | undefined;
  error: string | null | undefined;
}


export default function NewsData() {
  return <> </>
}

  
