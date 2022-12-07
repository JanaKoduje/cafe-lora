import { Drink } from "./Drink";

export const Menu = ({ drinks }) => {
  const element = document.createElement("section");
  element.setAttribute("id", "menu");
  element.classList.add("menu");

  const orderLink = document.createElement("div");
  orderLink.classList.add("order-detail");
  orderLink.innerHTML = `<a href="/objednavka">Detail objednávky</a>`;

  const drinkList = document.createElement("div");
  drinkList.classList.add("drinks-list");

  if (drinks === undefined) {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks`, {
      method: "GET",
      headers: {
        Authorization: `Email klamy@centrum.cz`,
      },
    })
      .then((response) => response.json())
      .then((data) => element.replaceWith(Menu({ drinks: data.results })));
  } else {
    drinkList.append(...drinks.map((drink) => Drink(drink)));
  }

  element.append(drinkList, orderLink);

  return element;
};
