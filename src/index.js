import { HomePage } from "./pages/HomePage";
import { OrderPage } from "./pages/OrderPage/OrderPage";

import "./style.css";
import "./index.css";

const { pathname } = window.location;

if 
(pathname === '/') {
  document.querySelector('#app').append(HomePage());
} else if (pathname === '/objednavka') {
  document.querySelector('#app').append(OrderPage());
}
