import React from "react";

import AppBarDetailPage from "../../components/AllNews/AppBarDetailPage";
import SearchInput from "../../components/AllNews/SearchInput";
import NewsCard from "../../components/AllNews/NewsCard";
import NewsCard1 from "../../components/AllNews/NewsCard1";
import NewsCard2 from "../../components/AllNews/NewsCard2";
import NewsCard4 from "../../components/AllNews/NewsCard4";
import NewsCard5 from "../../components/AllNews/NewsCard5";

const AllNews = () => {
  return (
    <div>
      <AppBarDetailPage />
      <SearchInput />
      <NewsCard />
      <NewsCard1 />
      <NewsCard2 />
      <NewsCard4 />
      <NewsCard5 />
    </div>
  );
};

export default AllNews;
