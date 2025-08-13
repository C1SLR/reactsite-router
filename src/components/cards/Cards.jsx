import React from "react";
import { Link } from "react-router-dom";

function Cards({
  heading,
  paragraph,
  linkTo,
  linkText,
  buttonLink,
  buttonText,
  imageSrc,
  imageMobileSrc,
  imageAlt,
  layout,
}) {
  const isImageRight = layout === "left";

  return (
    <section className="flex justify-center">
      <div
        className={`md:flex md:gap-5 m-5 w-11/12 ${
          isImageRight ? "md:flex-row-reverse" : ""
        }`}
      >
        {}
        <div className="lg:border lg:pt-20 md:w-1/2">
          <h2 className="font-bold text-2xl mb-5">{heading}</h2>
          <p className="text-gray-400">{paragraph}</p>
          {}
          {linkTo && linkText && (
            <Link
              to={linkTo}
              className="md:font-semibold md:flex hidden hover:text-cyan-800 transition-colors duration-200 mt-5"
            >
              {linkText}
            </Link>
          )}

          {}
          {buttonLink && buttonText && (
            <button className="md:hidden shadow-2xl text-white bg-cyan-700 rounded-lg transition-colors cursor-pointer hover:bg-cyan-800 px-10 py-3 my-10">
              <Link to={buttonLink}>{buttonText}</Link>
            </button>
          )}
        </div>

        {}
        <div className="md:w-1/3">
          <img src={imageSrc} alt={imageAlt} className="md:flex w-full hidden" />
          <img
            src={imageMobileSrc}
            alt={imageAlt}
            className="md:hidden w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;
