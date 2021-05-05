export interface NewYorkTimeHeadline {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
}

export interface News {
  _id: string;
  abstract: string;
  byline: Array<any>;
  document_type: string;
  headline: NewYorkTimeHeadline;
  keywords: Array<any>;
  lead_paragraph: string;
  multimedia: Array<any>;
  news_desk: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
}

export interface NewYorkTimes {
  docs: News[];
}
