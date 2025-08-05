import React from "react";
import { Link } from "react-router-dom";

import exploreimg1 from "./exploreimg1.png";
import exploreimg2 from "./exploreimg2.png";
import exploreimg3 from "./exploreimg3.png";
import exploreimg4 from "./exploreimg4.png";
import exploreimg5 from "./exploreimg5.png";
import exploreimg6 from "./exploreimg6.png";
import exploreimg7 from "./exploreimg7.png";
import iphoneImage from "./iphone.png";

function ExploreItem() {
  return (
    <div>
      <section className="flex justify-center">
        <div className="lg:w-11/12 w-10/12 m-5">
          <div className="md:grid-cols-5 grid grid-cols-2 gap-3">
            <div className="md:col-span-3 mr-auto">
              <h2 className="text-2xl font-bold">Explore Item Categories</h2>
            </div>
            <div className="md:col-span-2 ml-auto">
              <button className="md:bg-white md:text-cyan-700 md:border-2 md:hover:bg-gray-200 shadow-2xl text-white bg-cyan-700 rounded-lg transition-colors cursor-pointer hover:bg-cyan-800 px-10 py-3">
                <Link to="/search">View All</Link>
              </button>
            </div>
            <div className="md:col-span-5 col-span-2">
              <p className="text-gray-400">
                Hover and select to view items available to be rented. From film
                & Photography to Drones to Clothes & Shoes. If you can think of
                it, you can find it.
              </p>
            </div>
            <div className="relative group col-span-2 row-span-2 cursor-pointer">
              {/* Use the imported image variable */}
              <img src={exploreimg1} alt="img1" className="w-full" />
              <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">Cameras</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={exploreimg2} alt="img2" className="md:h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">GPU</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={exploreimg3} alt="img3" className="md:h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">
                  Warehouse
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={exploreimg4} alt="img4" className="md:h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">
                  Celebration
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={exploreimg5} alt="img5" className="md:h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">Sports</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={exploreimg6} alt="img6" className="md:h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">
                  Headphones
                </p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img
                src={exploreimg7}
                alt="img7"
                className="md:h-full w-full h-auto block rounded-md"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl flex items-end justify-center">
                <p className="text-white text-lg font-semibold pb-2">
                  Clothing
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center bg-blue-50 rounded-2xl my-25">
            <div className="md:w-1/2 p-5">
              <h2 className="font-semibold text-2xl mb-5">Access on the go</h2>
              <p>
                Elephant Please is a responsive website, open it on any browser
                and use it on your devices. Rent more ,save more. Lend more,
                earn more.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={iphoneImage} alt="phone" className="md:w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreItem;
