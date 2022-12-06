import { Header } from "../../components/Header";
import { Footer} from "../../components/Footer";
import { Order } from "./Order";

import "./objednavka.css"

export const OrderPage = () => {

 const pageElement = document.createElement("page");
 pageElement.classList.add("page");

 const main = document.createElement("main");
 main.classList.add("order")
 main.append(Order({})) ;
 
 pageElement.append(Header({showMenu : false}), main, Footer());
 return pageElement;

}