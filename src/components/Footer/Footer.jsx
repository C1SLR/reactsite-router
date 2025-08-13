import React from "react";
import footerimage from "./footer logo.png";
import fb from "./fb.png";
import ig from "./ig.png";
import linkedin from "./in.png";
import x from "./X.png";
import yt from "./yt.png";
function Footer() {
  return (
    <footer>
      <div className="flex justify-center bg-blue-50">
        <div className="w-11/12">
          <div className="md:flex md:justify-between md:flex-wrap md:gap-5 p-5 w-11/12">
            <div className="md:w-1/2">
              <div>
                <img src={footerimage} alt="logo" className="my-10" />
              </div>
              <div>
                <p>
                  Elephant Please was established in 2021 to alleviate and bring
                  awarness to excessive purchasing, over spending and its effect
                  on climate change. Elephant Please is a member of Revision AI
                  Limited.
                </p>
              </div>
              <div className="flex w-full justify-around my-5">
                <div>
                  <a href="https:facebook.com">
                    <img src={fb} alt="fb" className="p-5" />
                  </a>
                </div>
                <div>
                  <a href="https:twitter.com">
                    <img
                      src={x}
                      alt="x"
                      className="bg-blue-900 rounded-full p-5"
                    />
                  </a>
                </div>
                <div>
                  <a href="https:youtube.com">
                    <img src={yt} alt="yt" className="p-5" />
                  </a>
                </div>
                <div>
                  <a href="https:linkedin.com">
                    <img src={linkedin} alt="in" className="p-5" />
                  </a>
                </div>
                <div>
                  <a href="https:instagram.com">
                    <img src={ig} alt="ig" className="p-5" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h1 className="md:my-5 text-blue-950 font-semibold text-lg my-2">
                Elephant Please
              </h1>
              <div className="grid grid-cols-2 md:gap-5">
                <div className="my-2">
                  <a href="how renting works.html">How renting works</a>
                </div>
                <div className="my-2">
                  <a href="terms of use.html">Terms of use</a>
                </div>
                <div className="my-2">
                  <a href="lend to start earning.html">How lending works</a>
                </div>
                <div className="my-2">
                  <a href="privacy policy.html">Privacy Policy</a>
                </div>
                <div className="my-2">
                  <a href="faqs.html">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="p-8 text-center bg-blue-100 font-semibold">
          &copy; Elephant Please 2021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
