import { HomePage } from "./pages/HomePage";

import "./style.css";
import "./index.css";

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
