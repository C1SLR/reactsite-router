import img1 from "./Group 143.png";
import img1Mobile from "./Group 141.png";
import img2 from "./Group 142.png";

const homeCards = [
  {
    id: 1,
    heading: "Rent to save and be green",
    paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque at culpa magni minus omnis magnam maxime repudiandae, earum odit? Laudantium adipisci unde doloremque aliquam iure dolores id eligendi rerum iste quidem! Praesentium vel saepe ab quos veniam! Ducimus, voluptatum magni.",
    linkTo: "how renting works.html", // Assuming this is an internal path
    linkText: "How Renting Works",
    imageSrc: img1,
    imageMobileSrc: img1Mobile, // A second image for mobile layout
    imageAlt: "A person writing on a whiteboard",
    layout: "right", // Image on the right on desktop
  },
  {
    id: 2,
    heading: "Lend to start earning",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum magni reprehenderit placeat sapiente tempore maxime quasi fugit hic obcaecati animi repellendus consectetur ad rem minima, explicabo distinctio maiores excepturi amet expedita. Eum alias nesciunt ea quasi numquam illo cumque?",
    buttonLink: "itemlist.html",
    buttonText: "List and earn",
    imageSrc: img2,
    imageMobileSrc: img2,
    imageAlt: "A group of people collaborating",
    layout: "left",
  },
];

export default homeCards