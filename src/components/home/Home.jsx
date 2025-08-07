import React from "react";
import camera from "./camera.jpg";
import community from "./community.png";
import joy from "./joy.png";
import money from "./save_money.png";
import plant from "./help_the_plant.png";
import Search from "../search box/Search";
import Button from "../button/Button";
import ExploreItem from "../explore item/ExploreItem";
import Rental_Reveiws from "../rental reveiws/RentalReveiws";
import Cards from "../cards/Cards";
import homeCards from "../cards/data";
function Home() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-11/12">
          <div className="md:flex mb-5">
            <div className="lg:w-5/12 md:w-6/12 md:mt-5">
              <div className="p-5">
                <h1 className="text-3xl md:text-4xl">
                  Rent <strong className="text-blue-800">Cameras</strong> From
                  <strong className="text-blue-800">People</strong> In Your
                  Community
                </h1>
                <p className="text-gray-600 mt-5">
                  Enjoy the item without the button to own and at a fraction of
                  the price.
                </p>
              </div>
              <div>
                <Search />
                <div className="flex gap-5 items-center">
                  <p className="pl-5">or</p>
                  <Button />
                </div>
              </div>
            </div>
            <div>
              <img
                src={camera}
                alt="banner"
                className="xl:w-4/12 xl:top-15 lg:w-5/12 lg:top-25 md:absolute md:w-5/12 right-0 md:top-30 rounded-l-[20%] "
              />
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div className="lg:w-2/3 md:justify-evenly md:w-3/4 md:flex-row flex flex-col items-center w-1/2">
              <div className="md:hidden flex flex-col items-center my-5">
                <img src={community} alt="community" />
                <h3 className="font-semibold mt-2">Community based</h3>
                <p className="text-center text-gray-400">
                  Take part in the community. Grow Together
                </p>
              </div>
              <div className="md:flex md:flex-col md:items-center md:my-5 hidden">
                <img src={joy} alt="community" />
                <h3 className="md:font-semibold mt-2">Share the Joy</h3>
                <p className="md:text-center md:text-gray-400">
                  Grow closer. Take part in the community.
                </p>
              </div>
              <div className="flex flex-col items-center my-5">
                <img src={money} alt="save money" />
                <h3 className="font-semibold mt-2">Save money</h3>
                <p className="text-center text-gray-400">
                  Buy less. Rent on demand for a fraction of the price.
                </p>
              </div>
              <div className="flex flex-col items-center my-5">
                <img src={plant} alt="plant" />
                <h3 className="font-semibold mt-2">Help the planet</h3>
                <p className="text-center text-gray-400">
                  Live greener. Reduce waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreItem />
      {/* This maps over the homeCards array and renders a Cards component for each item */}
      {homeCards.map(card => (
        <Cards 
          key={card.id} 
          heading={card.heading}
          paragraph={card.paragraph}
          linkTo={card.linkTo}
          linkText={card.linkText}
          buttonLink={card.buttonLink}
          buttonText={card.buttonText}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          layout={card.layout}
        />
      ))}
      <Rental_Reveiws />
    </>
  );
}

export default Home;
