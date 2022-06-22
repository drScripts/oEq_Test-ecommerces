import React from "react";

import AppBarHome from "../../components/HomePage/AppBarHome";
import SearchInput from "../../components/HomePage/SearchInput";
import PromotionCardSlider from "../../components/HomePage/PromotionCardSlider";
import SectionTitleWithLink from "../../components/HomePage/SectionTitleWithLink";
import CategorySlider from "../../components/HomePage/CategorySlider";
import SectionTitleWithLink11 from "../../components/HomePage/SectionTitleWithLink11";
import ProductCardSlider from "../../components/HomePage/ProductCardSlider";
import SimplePromotionCard from "../../components/HomePage/SimplePromotionCard";
import SectionTitleWithLink1 from "../../components/HomePage/SectionTitleWithLink1";
import ProductCardSlider1 from "../../components/HomePage/ProductCardSlider1";
import SimplePromotionCard from "../../components/HomePage/SimplePromotionCard";
import SectionTitleWithLink2 from "../../components/HomePage/SectionTitleWithLink2";
import ProductCardSlider2 from "../../components/HomePage/ProductCardSlider2";
import SectionTitleWithLink3 from "../../components/HomePage/SectionTitleWithLink3";
import LoopableProductCard4 from "../../components/HomePage/LoopableProductCard4";
import SectionTitleWithLink4 from "../../components/HomePage/SectionTitleWithLink4";
import PromoProductCard from "../../components/HomePage/PromoProductCard";
import SectionTitleOnly from "../../components/HomePage/SectionTitleOnly";
import LoopableNewsCard from "../../components/HomePage/LoopableNewsCard";
import BottomNavigation from "../../components/HomePage/BottomNavigation";

const HomePage = () => {
  return (
    <div>
      <AppBarHome />
      <SearchInput />
      <PromotionCardSlider />
      <SectionTitleWithLink />
      <CategorySlider />
      <SectionTitleWithLink11 />
      <ProductCardSlider />
      <SimplePromotionCard />
      <SectionTitleWithLink1 />
      <ProductCardSlider1 />
      <SimplePromotionCard />
      <SectionTitleWithLink2 />
      <ProductCardSlider2 />
      <SectionTitleWithLink3 />
      <LoopableProductCard4 />
      <SectionTitleWithLink4 />
      <PromoProductCard />
      <SectionTitleOnly />
      <LoopableNewsCard />
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
