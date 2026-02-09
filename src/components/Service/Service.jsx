import "./Service.scss";

const Service = ({ heading, image, details }) => {
  return (
    <div className="serviceCard">
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
      <p>{details}</p>
    </div>
  );
};

export default Service;
