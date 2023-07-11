import { useState } from "react";
import "./styles.css";
import image1 from "./Assets/Images_Drones/Image_Acc.jpg"
const cards = [
  {
    header: "heading",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "heading",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "heading",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "heading",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "heading",
    image: image1,
    text: `Image description here`,
  },
];

const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img src={card.image} alt="Client 4"/>
            <div className="content">
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default  Accordion