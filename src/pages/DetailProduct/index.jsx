import React from "react";

import AppBarDoubleLinks2 from "../../components/DetailProduct/AppBarDoubleLinks2";
import Container5 from "../../components/DetailProduct/Container5";
import ProductDetail from "../../components/DetailProduct/ProductDetail";
import StoreProfile1 from "../../components/DetailProduct/StoreProfile1";
import Container15 from "../../components/DetailProduct/Container15";
import TitlesWithRating from "../../components/DetailProduct/TitlesWithRating";
import UserReview from "../../components/DetailProduct/UserReview";
import UserReview1 from "../../components/DetailProduct/UserReview1";
import UserReview2 from "../../components/DetailProduct/UserReview2";
import OulinedButton from "../../components/DetailProduct/OulinedButton";
import SectionTitleWithLink from "../../components/DetailProduct/SectionTitleWithLink";
import LoopableProductCard from "../../components/DetailProduct/LoopableProductCard";

const DetailProduct = () => {
  return (
    <div>
      <AppBarDoubleLinks2 />
      <Container5 />
      <ProductDetail />
      <StoreProfile1 />
      <Container15 />
      <TitlesWithRating />
      <UserReview />
      <UserReview1 />
      <UserReview2 />
      <OulinedButton />
      <SectionTitleWithLink />
      <LoopableProductCard />
    </div>
  );
};

export default DetailProduct;
