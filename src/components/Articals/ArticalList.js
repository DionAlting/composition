import React, { useState, useEffect } from "react";

import Timeout from "await-timeout";
import axios from "axios";

import ArticleCard from "./ArticalCard";

export default function ArticleList() {
  const [articles, set_articles] = useState();
  const clearNotifications = () => {
    set_articles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      await Timeout.set(2000);
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={clearNotifications}>Clear Notifications</button>
      {articles ? (
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
