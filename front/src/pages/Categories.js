import React from "react";
import CardGridHeader from "../components/CardGridHeader.js";
import CategoriesBody from "../components/CategoriesBody";
import CanoteList  from "../components/CanoteList.js"; 

const Categories = (props) => {
  return (
    <div>
      <CardGridHeader
        headerTitle={props.headerTitle}
        iconlink={props.iconlink}
      />
      <CategoriesBody
        bimageUrl={props.bimageUrl}
        CanotParagraphe={props.CanotParagraphe}
      />
      <CanoteList category={props.category} />
    </div>
  );
};

export default Categories;
