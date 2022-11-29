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
      name: "Lungo",
      image: "https://apps.kodim.cz/daweb/cafelora/assets/cups/lungo.png",
    })
  );

  element.append(drinkList);

  return element;
};
