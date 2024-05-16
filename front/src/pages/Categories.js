import CardGridHeader from "../components/CardGridHeader.js";
import CategoriesBody from "../components/CategoriesBody";

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
    </div>
  );
};

export default Categories;
