import React from "react";

import AppBarDoubleLinks from "../../components/DetailNews/AppBarDoubleLinks";
import Container2 from "../../components/DetailNews/Container2";
import SectionTitleOnly from "../../components/DetailNews/SectionTitleOnly";
import NewsCard from "../../components/DetailNews/NewsCard";
import NewsCard from "../../components/DetailNews/NewsCard";
import OulinedButton from "../../components/DetailNews/OulinedButton";

const DetailNews = () => {
  return (
    <div>
      <AppBarDoubleLinks />
      <Container2 />
      <SectionTitleOnly />
      <NewsCard />
      <NewsCard />
      <OulinedButton />
    </div>
  );
};

export default DetailNews;
