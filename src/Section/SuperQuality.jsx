import { shoe8 } from "../assets/images";
import Button from "../Component/Button";

const SuperQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-ful max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide You {""}
          <span className="text-coral-red ">Super {""}</span>
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-slate-gray">
          Ensuring premium comfort and style, our meticuliously crafted
          footwearc is designed to elevate your expereince, providing your with
          unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="my-5 lg:max-w-lg info-text">
          Our dedication to detail and excellence emsures your satisfaction.
        </p>
        <div className="mt-8 ">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex juatify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
