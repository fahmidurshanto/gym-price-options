import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  console.log(name, price, features);

  return (
    <div className="bg-violet-500 rounded-md p-4 my-8 text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">$ {price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-7">
        <h3 className="text-2xl text-center">Features:</h3>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="btn btn-primary w-full mx-auto hover:bg-green-900 duration-1000 border-none mt-10">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
