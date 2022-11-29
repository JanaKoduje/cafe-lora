import "./../style.css";
import "./../index.css";

export const Header = ({ isNavClosed }) => {
  const element = document.createElement("header");

  element.innerHTML = `
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
    `;

  element.querySelector(".nav-btn").addEventListener("click", () => {
    element.replaceWith(Header({ isNavClosed: !isNavClosed }));
  });

  element.querySelector(".rollout-nav").addEventListener("click", () => {
    element.replaceWith(Header({ isNavClosed: true }));
  });

  return element;
};
