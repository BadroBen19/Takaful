import "./TestimoniesHeader.css";
import kid from "./img/kidOkay.png";

const TestimoniesHeader = () => {
  return (
    <div className="testimonies-header">
      <div className="left">
        <h1 className="text-header">Testimonials: Stories of Transformation</h1>
        <p className="p-header">
          Here, individuals share their first-hand experiences of how donations
          received through our platform positively impact their lives. These
          testimonials offer powerful narratives of personal growth, overcoming
          challenges, and achieving goals, illustrating the profound difference
          charitable giving can make. Through heartfelt testimonials, visitors
          to our site can witness the real-world impact of their contributions
          and gain a deeper understanding of the transformative power of
          generosity
        </p>
      </div>
      <div className="right">
        <div className="img">
          <img src={kid} alt="Kid" />
        </div>
      </div>
    </div>
  );
};

export default TestimoniesHeader;
