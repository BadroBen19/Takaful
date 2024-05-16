import CanoteList from "./CanoteList";
import CanotParagraphe from "./CanotParagraphe";

const CategoriesBody = (props) => {
  return (
    <div
      style={{
        width: "calc(100% - 120px)",
        margin: "0 auto",
        padding: "0 60px",
      }}
    >
      <CanotParagraphe
        imageUrl={props.bimageUrl}
        CanotParagraphe={props.CanotParagraphe}
      />
      <CanoteList />
    </div>
  );
};

export default CategoriesBody;
