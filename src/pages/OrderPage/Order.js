import { OrderItem } from "./OrderItem";

import "./objednavka.css";

export const Order = ({ items }) => {
  const element = document.createElement("div");
  element.classList.add("order__content");
  element.classList.add("container");
  element.innerHTML = `<h1>Vaše objednávka</h1>`;

  const emptyInfo = document.createElement("p");
  emptyInfo.classList.add("empty-order");
  emptyInfo.innerHTML = `<span>Zatím nemáte nic objednáno</span>`;

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
      .then((data) => element.replaceWith(Order({ items: data.results })));
  } else {
    const filtered = items.filter((item) => item.ordered);

    if (filtered.length === 0) {
      element.append(emptyInfo);
    } else {
      orderList.append(
        ...filtered.map((item) => OrderItem({ name: item.name, image: item.image }))
      );
      element.append(orderList);
    }
  }

  return element;
};
