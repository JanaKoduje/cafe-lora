import "./../style.css";
import "./../index.css";

export const Header = ({ isNavClosed, showMenu }) => {
  const element = document.createElement("header");

  element.innerHTML = showMenu
    ? `
    <div class="header__content container">
      <div class="site-logo"></div> 
      <div class="navigation">
        <button class="nav-btn"></button>
        <nav class="rollout-nav ${isNavClosed ? "nav-closed" : null}">
          <a href="#home">domů</a>
          <a href="#menu">menu</a>
          <a href="#gallery">galerie</a>
          <a href="#contact">kontakt</a>
        </nav>
      </div>
    </div>
    `
    : `
    <div class="header__content container">
  <div class="site-logo"></div>
  <nav class="inline-nav">
    <a href="/">Hlavní stránka</a>
  </nav>
  </div>
    `;

  const navElm = element.querySelector(".nav-btn");
  if (navElm) {
    element.querySelector(".nav-btn").addEventListener("click", () => {
      element.replaceWith(
        Header({ ...props, isNavClosed: !isNavClosed })
      );
    });
  }

  const rollElm = element.querySelector(".rollout-nav");
  if (rollElm) {
    element.querySelector(".rollout-nav").addEventListener("click", () => {
      element.replaceWith(Header({ ...props, isNavClosed: true }));
    });
  }

  return element;
};
