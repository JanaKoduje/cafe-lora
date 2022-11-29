import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu/Menu";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./style.css";
import "./index.css";

const pageElement = document.createElement("div");
pageElement.classList.add("page");

const main = document.createElement("main");
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header({isNavClosed : true}), main, Footer());

document.querySelector("#app").append(pageElement);
