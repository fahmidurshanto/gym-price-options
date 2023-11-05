import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Cardio equipment usage",
        "Locker room access",
        "Unlimited water and towel service",
        "Access to weightlifting area",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "All Basic Membership features",
        "Free group fitness classes",
        "Sauna and steam room access",
        "Access to indoor swimming pool",
        "Discounts on personal training sessions",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "All Standard Membership features",
        "Personal trainer sessions (2 per month)",
        "24/7 access to the gym",
        "Nutritional counseling sessions",
        "Access to exclusive VIP lounge",
      ],
      price: 79.99,
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
