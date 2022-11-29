import { Drink } from "./Drink";

import "./../../style.css";
import "./../../index.css";

export const Menu = () => {
  const element = document.createElement("section");
  element.setAttribute("id", "menu");
  element.classList.add("menu");

  const drinkList = document.createElement("div");
  drinkList.classList.add("drinks-list");
  drinkList.append(
    Drink({
      id: 'romano',
      name: 'Romano',
      ordered: false,
      image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
      layers: [
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ]
    })
  );

  element.append(drinkList);

  return element;
};
