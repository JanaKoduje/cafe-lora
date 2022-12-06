import "./../../style.css";
import "./../../index.css";

import { Layer } from "./Layer";

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  let orderClass = "";
  if (ordered) {
    orderClass = "order-btn--ordered";
  }

  const element = document.createElement("div");
  element.classList.add("drink");

  element.innerHTML = `
   <div class="drink__product">
     <div class="drink__cup">
       <img src=${image}>
     </div>
     <div class="drink__info">
       <h3>${name}</h3>
     </div>
   </div>
   <div class="drink__controls">
     <button class="order-btn ${orderClass}">
       ${ordered ? "Zrušit" : "Objednat"}
     </button>
   </div>
`;

  element
    .querySelector(".drink__info")
    .append(...layers.map((layer) => Layer(layer)));

  element.querySelector(".order-btn").addEventListener("click", () => {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Email klamy@centrum.cz`,
      },
      body: JSON.stringify({ ordered: !ordered }),
    })
      .then((response) => response.json())
      .then((data) => element.replaceWith(Drink(data.results)));
  });

  return element;
};
