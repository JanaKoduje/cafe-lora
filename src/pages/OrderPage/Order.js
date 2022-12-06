import { OrderItem } from "./OrderItem";

import "./objednavka.css";

export const Order = ({ items }) => {
  const element = document.createElement("div");
  element.classList.add("order__content");
  element.classList.add("container");
  element.innerHTML = `<h1>Vaše objednávka</h1>`;

  const orderList = document.createElement("div");
  orderList.classList.add("order__items");

  if (items === undefined) {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks`, {
      method: "GET",
      headers: {
        Authorization: `Email klamy@centrum.cz`,
      },
    })
      .then((response) => response.json())
      .then((data) => element.replaceWith(Order({ items: data.results.filter(((item) => item.ordered)) })));
  } else {
   
    if (items.length === 0) {
      const emptyInfo = document.createElement("p");
      emptyInfo.classList.add("empty-order");
      emptyInfo.textContent = "Zatím nemáte nic objednáno";

      element.append(emptyInfo);
    } else {
      orderList.append(
        ...items.map((item) =>
          OrderItem({ name: item.name, image: item.image })
        )
      );
      element.append(orderList);
    }
  }

  return element;
};
