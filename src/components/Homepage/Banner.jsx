import React from "react";

const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variation of price ranges in car service. But in all category we provide the most affordable price in the market.",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variation of price ranges in car service. But in all category we provide the most affordable price in the market.",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variation of price ranges in car service. But in all category we provide the most affordable price in the market.",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variation of price ranges in car service. But in all category we provide the most affordable price in the market.",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  return (
    <div className="mt-12">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url('/assets/images/banner/${index + 1}.jpg')`,
          }}
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[90vh] bg-top rounded-xl bg-no-repeat bg-cover"
        >
            <div className="ml-24 mt-24   max-w-2xl space-y-3">
              <h1 className="text-6xl text-white font-bold">{banner.title}</h1>

              <p className="text-lg text-gray-50">{banner.description}</p>

             <div className="flex gap-4">
             <button className="btn btn-primary text-white">Discover More</button>
              <button className="btn bg-transparent text-white border border-white">Latest Project</button>
             </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
