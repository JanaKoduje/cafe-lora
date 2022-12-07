export const Header = ({ showMenu = true }) => {
  let menu = `  
    <nav class="inline-nav">
      <a href="/">Hlavní stránka</a>
    </nav>
    `;

  if (showMenu) {
    menu = `
    <div class="navigation">
      <button class="nav-btn"></button>
      <nav class="rollout-nav nav-closed">
        <a href="#home">domů</a>
        <a href="#menu">menu</a>
        <a href="#gallery">galerie</a>
        <a href="#contact">kontakt</a>
      </nav>
    </div>
    `;
  }

  const element = document.createElement("header");

  element.innerHTML = `
    <div class="header__content container">
      <div class="site-logo"></div> 
      ${menu}
    </div>
    `;

  if (showMenu) {
    element.querySelector(".nav-btn").addEventListener("click", () => {
      element.querySelector(".rollout-nav").classList.toggle("nav-closed");
    });

    const rolloutNav = element.querySelector(".rollout-nav");
    rolloutNav.addEventListener("click", (e) => {
      rolloutNav.classList.add("nav-closed");
    });
  }

  return element;
};
