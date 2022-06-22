import React from "react";

import AppBarDoubleLinks from "../../components/ProductByCategories/AppBarDoubleLinks";
import Container2 from "../../components/ProductByCategories/Container2";
import SearchInput from "../../components/ProductByCategories/SearchInput";
import GridProduct from "../../components/ProductByCategories/GridProduct";
import OulinedButton from "../../components/ProductByCategories/OulinedButton";

const ProductByCategories = () => {
  return (
    <div>
      <AppBarDoubleLinks />
      <Container2 />
      <SearchInput />
      <GridProduct />
      <OulinedButton />
    </div>
  );
};

export default ProductByCategories;
