import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-4 h-[600px] w-[200px]">
          <div>
            <div className="text-6xl font-bold w-[750px]">
              EnKaliteli Ayakkabilar Burada
            </div>
            <div className="text-lg my-4 w-[750px]">
              Documentation is written information that describes and explains a
              product, system, or service. It can take many different forms,
              such as user manuals, technical guides, and online help resources.
              Documentation is typically used to provide information and
            </div>
            <div className="flex bg-blue-200 items-center justify-center border rounded-full cursor-pointer text-2xl w-[200px] h-16 ">
              incele
            </div>
          </div>
          <img
            className="h-[400px] w-[400px]"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/231381b3-0087-4efa-ad6a-15ab497715ae/sko-air-max-270-MJxJfF.png"
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-4 h-[600px] w-[200px]">
          <div>
            <div className=" text-6xl font-bold">
              EnKaliteli Ayakkabilar Burada
            </div>
            <div className="text-lg my-4">
              Documentation is written information that describes and explains a
              product, system, or service. It can take many different forms,
              such as user manuals, technical guides, and online help resources.
              Documentation is typically used to provide inform
            </div>
            <div className="bg-blue-200 flex items-center justify-center border rounded-full cursor-pointer text-2xl w-[200px] h-16 ">
              incele
            </div>
          </div>
          <img
            className="h-[300px] w-[300px]"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d4776188-7104-419e-a1c8-f055737b9e6e/court-vision-low-next-nature-shoes-X4wrxh.png"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
