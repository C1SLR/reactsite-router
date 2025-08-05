import React from "react";

function Footer() {
  return (
    <footer>
      <div className="md:flex md:flex-wrap md:gap-5 bg-blue-50 p-5">
        <div className="md:w-1/2">
          <div>
            <img src="assets/footer logo.png" alt="logo" className="my-10" />
          </div>
          <div>
            <p>
              Elephant Please was established in 2021 to alleviate and bring
              awarness to excessive purchasing, over spending and its effect on
              climate change. Elephant Please is a member of Revision AI
              Limited.
            </p>
          </div>
          <div className="flex w-full justify-around my-5">
            <div>
              <a href="https:facebook.com">
                <img src="assets/fb.png" alt="fb" className="p-5" />
              </a>
            </div>
            <div>
              <a href="https:twitter.com">
                <img
                  src="assets/X.png"
                  alt="x"
                  className="bg-blue-900 rounded-full p-5"
                />
              </a>
            </div>
            <div>
              <a href="https:youtube.com">
                <img src="assets/yt.png" alt="yt" className="p-5" />
              </a>
            </div>
            <div>
              <a href="https:linkedin.com">
                <img src="assets/in.png" alt="in" className="p-5" />
              </a>
            </div>
            <div>
              <a href="https:instagram.com">
                <img src="assets/ig.png" alt="ig" className="p-5" />
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
      <div>
        <p className="p-8 text-center bg-blue-100 font-semibold">
          &copy; Elephant Please 2021
        </p>
      </div>
    </footer>
  );
}

export default Footer;
